"use strict";
class Annotation_Node_Move_File {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.MoveFileRequest("Annotationdocs/one-page1.docx", "annotations1/one-page1.docx", myStorage, myStorage);
		fileApi.moveFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'Annotationdocs/one-page1.docx' file moved to 'Annotationdocs1/one-page1.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Move_File;
