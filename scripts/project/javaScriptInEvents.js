

const scriptsInEvents = {

	async Base_sheet_Event258_Act15(runtime, localVars)
	{
		const params = new URLSearchParams(window.location.search);
		let rawName = params.get("name");
		if (rawName) {
		    try {
		        rawName = decodeURIComponent(rawName);
		    } catch (e) {
		        // fallback if decodeURIComponent fails
		        console.warn("Could not decode name, using raw value instead.");
		    }
		    runtime.globalVars.name = rawName;
		}
		
	},

	async Digging_sheet_Event466_Act10(runtime, localVars)
	{

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
