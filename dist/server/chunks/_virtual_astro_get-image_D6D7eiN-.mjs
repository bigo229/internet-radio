import { n as getImage$1 } from "./assets_B_7Z0CVa.mjs";
//#region \0virtual:astro:get-image
var imageConfig = {
	"endpoint": {
		"route": "/_image",
		"entrypoint": "astro/assets/endpoint/node"
	},
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: void 0,
	enumerable: false,
	configurable: true
});
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
export { getImage };
