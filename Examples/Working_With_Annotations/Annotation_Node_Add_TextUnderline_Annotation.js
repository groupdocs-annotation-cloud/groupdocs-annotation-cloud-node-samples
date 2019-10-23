"use strict";
class Annotation_Node_Add_TextUnderline_Annotation {
	static Run() {

		let a1 = new groupdocs_annotation_cloud_1.AnnotationInfo();
		a1.annotationPosition = new groupdocs_annotation_cloud_1.Point();
		a1.annotationPosition.x = 852;
		a1.annotationPosition.y = 59.388262910798119;
		a1.pageNumber = 2;
		a1.fontColor = 65535;
		a1.type = groupdocs_annotation_cloud_1.AnnotationInfo.TypeEnum.TextUnderline;
		a1.text = "This is text underline annotation";
		a1.creatorName = "Anonym A.";

		var request = new groupdocs_annotation_cloud_1.PostAnnotationsRequest("Annotationdocs\\ten-pages.pdf", [a1]);
		annotateApi.postAnnotations(request)
			.then(function (response) {
				console.log("Expected response type is void: Text Underline Annotation added.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Add_TextUnderline_Annotation;