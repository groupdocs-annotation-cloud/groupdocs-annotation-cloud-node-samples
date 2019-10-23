"use strict";
class Annotation_Node_Add_TextRedaction_Annotation {
	static Run() {

		let a1 = new groupdocs_annotation_cloud_1.AnnotationInfo();
		a1.annotationPosition = new groupdocs_annotation_cloud_1.Point();
		a1.annotationPosition.x = 852;
		a1.annotationPosition.y = 59.388262910798119;
		a1.box = new groupdocs_annotation_cloud_1.Rectangle();
		a1.box.x = 375.89276123046875;
		a1.box.y = 59.388263702392578;
		a1.box.width = 88.7330551147461;
		a1.box.height = 37.7290153503418;
		a1.pageNumber = 2;
		a1.fontColor = 65535;
		a1.fontSize = 12;
		a1.type = groupdocs_annotation_cloud_1.AnnotationInfo.TypeEnum.TextRedaction;
		a1.text = "This is text redaction annotation";
		a1.creatorName = "Anonym A.";

		var request = new groupdocs_annotation_cloud_1.PostAnnotationsRequest("Annotationdocs\\ten-pages.pdf", [a1]);
		annotateApi.postAnnotations(request)
			.then(function (response) {
				console.log("Expected response type is void: Text Redaction Annotation added.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Add_TextRedaction_Annotation;