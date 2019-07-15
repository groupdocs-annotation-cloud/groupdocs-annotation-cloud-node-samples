"use strict";
class Annotation_Node_Delete_Annotation {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.DeleteAnnotationsRequest("annotations\\ten-pages.docx");
		annotateApi.deleteAnnotations(request)
			.then(function (response) {
				console.log("Expected response type is Void: Annotation deleted from document.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Delete_Annotation;