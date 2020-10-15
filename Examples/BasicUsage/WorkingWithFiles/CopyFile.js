"use strict";

class CopyFile {
	static async Run() {
		let request = new annotation_cloud.CopyFileRequest("annotationdocs/one-page1.docx", "annotationdocs/one-page-copied.docx");
		await fileApi.copyFile(request);
		console.log("Expected response type is Void: 'annotationdocs/one-page1.docx' file copied as 'annotationdocs/one-page-copied.docx'.");
	}
}
module.exports = CopyFile;
