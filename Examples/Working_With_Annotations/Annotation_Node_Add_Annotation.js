"use strict";
class Annotation_Node_Add_Annotation {
	static Run() {

		var annotation = new groupdocs_annotation_cloud_1.AnnotationInfo();

		annotation.annotationPosition = new groupdocs_annotation_cloud_1.Point();
		annotation.annotationPosition.x = 852;
		annotation.annotationPosition.y = 59.388262910798119;

		annotation.box = new groupdocs_annotation_cloud_1.Rectangle();
		annotation.box.x = 375.89276123046875;
		annotation.box.y = 59.388263702392578;
		annotation.box.width = 88.7330551147461;
		annotation.box.height = 37.7290153503418;
		annotation.pageNumber = 0;
		annotation.penColor = 1201033;
		annotation.penStyle = 0;
		annotation.penWidth = 1;
		annotation.type = groupdocs_annotation_cloud_1.AnnotationInfo.TypeEnum.Area;
		annotation.creatorName = "Anonym annotation.";

		var request = new groupdocs_annotation_cloud_1.PostAnnotationsRequest("annotations\\one-page.docx", [annotation]);
		annotateApi.postAnnotations(request)
			.then(function (response) {
				console.log("Expected response type is void: Annotation added.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Add_Annotation;