"use strict";

class MoveFile {
	static async Run() {
		let request = new annotation_cloud.MoveFileRequest("annotationdocs/one-page1.docx", "annotationdocs1/one-page1.docx", myStorage, myStorage);
		await fileApi.moveFile(request);
		console.log("Expected response type is Void: 'annotationdocs/one-page1.docx' file moved to 'annotationdocs1/one-page1.docx'.");
	}
}
module.exports = MoveFile;
