"use strict";

// This example demonstrates how to get document information
class GetDocumentInformation {
	static async Run() {
		let request = new annotation_cloud.GetInfoRequest("annotationdocs/one-page.docx");
		let response = await infoApi.getInfo(request);
		console.log("GetDocumentInformation: Pages Count = " + response.pages.length);
	}
}
module.exports = GetDocumentInformation;
