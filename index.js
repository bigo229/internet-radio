export default {
  async fetch(request, env, ctx) {
    // 1. CORS Preflight Configuration
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
      });
    }

    try {
      const data = await request.json();
      const { name, email, stream, message, token } = data;

      // Validate required text items
      if (!name || !email || !message || !token) {
        return new Response(JSON.stringify({ error: "Missing required payload metrics or security tokens." }), {
          status: 400,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }

      // 2. Validate Turnstile token with Cloudflare's verify API endpoint
      // Uses a secure Environment Variable binding: env.TURNSTILE_SECRET_KEY
      const verifyFormData = new FormData();
      verifyFormData.append("secret", env.TURNSTILE_SECRET_KEY);
      verifyFormData.append("response", token);
      verifyFormData.append("remoteip", request.headers.get("CF-Connecting-IP"));

      const verifyUrl = "https://cloudflare.com";
      const tokenVerification = await fetch(verifyUrl, {
        body: verifyFormData,
        method: "POST",
      });

      const verificationOutcome = await tokenVerification.json();
      
      // If validation fails, immediately drop the response sequence
      if (!verificationOutcome.success) {
        return new Response(JSON.stringify({ error: "Security check failed. Spambot activity blocked." }), {
          status: 403,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }

      // 3. Assemble and dispatch Email payloads
      const emailBody = `
        New Clean Listener Transmission Verified By Turnstile:
        ---------------------------------------------------------
        Sender Name: ${name}
        Sender Email: ${email}
        Selected Stream: ${stream}
        
        Message:
        ${message}
      `;

      await env.SE_MAILER.send({
        from: "contact-form@yourstationdomain.com", 
        to: "your-personal-inbox@gmail.com", 
        subject: `[Radio Contact] Verified message regarding stream: ${stream}`,
        text: emailBody
      });

      return new Response(JSON.stringify({ success: true, message: "Transmission dispatched safely." }), {
        status: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: "Internal Server Error", details: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }
  }
};
