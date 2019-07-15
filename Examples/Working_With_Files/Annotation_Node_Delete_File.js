"use strict";
class Annotation_Node_Delete_File {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.DeleteFileRequest("annotations1/one-page1.docx", myStorage);
		fileApi.deleteFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'annotations1/one-page1.docx' deleted.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Delete_File;
