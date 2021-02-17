"use strict";

// This example demonstrates how to get document information
class GetDocumentInformation {
	static async Run() {
		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "annotationdocs/one-page.docx";

		const response = await infoApi.getInfo(new annotation_cloud.GetInfoRequest(fileInfo));

		console.log("GetDocumentInformation: Pages Count = " + response.pages.length);
	}
}
module.exports = GetDocumentInformation;
