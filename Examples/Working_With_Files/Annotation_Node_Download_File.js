"use strict";
class Annotation_Node_Download_File {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.DownloadFileRequest("annotations/one-page.docx", myStorage);
		fileApi.downloadFile(request)
			.then(function (response) {
				console.log("Expected response type is Stream: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Download_File;
