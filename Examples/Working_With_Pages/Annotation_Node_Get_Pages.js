"use strict";
class Annotation_Node_Get_Pages {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.GetPagesRequest("annotations\\ten-pages.docx", 1, 1, 1, undefined, undefined, undefined, "");
		previewApi.getPages(request)
			.then(function (response) {
				console.log("Expected response type is PageImages: " + response);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Get_Pages;