"use strict";
class Annotation_Node_Delete_Pages {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.DeletePagesRequest("Annotationdocs\\ten-pages.docx");
		previewApi.deletePages(request)
			.then(function (response) {
				console.log("Expected response type is Void: pages deleted.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Delete_Pages;