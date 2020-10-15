"use strict";

class DownloadFile {
	static async Run() {
		let request = new annotation_cloud.DownloadFileRequest("annotationdocs/one-page.docx", myStorage);
		let response = await fileApi.downloadFile(request);
		console.log("Expected response type is Stream: " + response.length);
	}
}
module.exports = DownloadFile;
