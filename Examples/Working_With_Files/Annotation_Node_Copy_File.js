"use strict";
class Annotation_Node_Copy_File {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.CopyFileRequest("annotations/one-page1.docx", "annotations/one-page-copied.docx", myStorage, myStorage);
		fileApi.copyFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'annotations/one-page1.docx' file copied as 'annotations/one-page-copied.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Copy_File;
