"use strict";

class ObjectExists {
	static async Run() {
		// retrieve supported file-formats
		let request = new annotation_cloud.ObjectExistsRequest("annotationdocs/one-page.docx", myStorage);
		let response = await storageApi.objectExists(request);
		console.log("Expected response type is ObjectExist: " + response.exists);
	}
}
module.exports = ObjectExists;
