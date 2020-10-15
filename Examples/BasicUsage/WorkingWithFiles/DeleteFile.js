"use strict";

class DeleteFile {
	static async Run() {
		let request = new annotation_cloud.DeleteFileRequest("annotationdocs1/one-page1.docx", myStorage);
		await fileApi.deleteFile(request);
		console.log("Expected response type is Void: 'annotationdocs1/one-page1.docx' deleted.");
	}
}
module.exports = DeleteFile;
