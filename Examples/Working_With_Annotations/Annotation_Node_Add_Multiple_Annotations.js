"use strict";
class Annotation_Node_Add_Multiple_Annotations {
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
		a1.pageNumber = 0;
		a1.penColor = 1201033;
		a1.penStyle = 0;
		a1.penWidth = 1;
		a1.type = groupdocs_annotation_cloud_1.AnnotationInfo.TypeEnum.Distance;
		a1.text = "This is distance annotation";
		a1.creatorName = "Anonym A.";

		let a2 = new groupdocs_annotation_cloud_1.AnnotationInfo();
		a2.annotationPosition = new groupdocs_annotation_cloud_1.Point();
		a2.annotationPosition.x = 852;
		a2.annotationPosition.y = 59.388262910798119;
		a2.box = new groupdocs_annotation_cloud_1.Rectangle();
		a2.box.x = 375.89276123046875;
		a2.box.y = 59.388263702392578;
		a2.box.width = 88.7330551147461;
		a2.box.height = 37.7290153503418;
		a2.pageNumber = 2;
		a2.penColor = 1201033;
		a2.penStyle = 0;
		a2.penWidth = 1;
		a2.type = groupdocs_annotation_cloud_1.AnnotationInfo.TypeEnum.Area;
		a1.text = "This is area annotation";
		a2.creatorName = "Anonym A.";

		let a3 = new groupdocs_annotation_cloud_1.AnnotationInfo();
		a3.annotationPosition = new groupdocs_annotation_cloud_1.Point();
		a3.annotationPosition.x = 852;
		a3.annotationPosition.y = 59.388262910798119;
		a3.box = new groupdocs_annotation_cloud_1.Rectangle();
		a3.box.x = 375.89276123046875;
		a3.box.y = 59.388263702392578;
		a3.box.width = 88.7330551147461;
		a3.box.height = 37.7290153503418;
		a3.pageNumber = 4;
		a3.type = groupdocs_annotation_cloud_1.AnnotationInfo.TypeEnum.Point;
		a1.text = "This is point annotation";
		a3.creatorName = "Anonym A.";

		let a4 = new groupdocs_annotation_cloud_1.AnnotationInfo();
		a4.annotationPosition = new groupdocs_annotation_cloud_1.Point();
		a4.annotationPosition.x = 852;
		a4.annotationPosition.y = 59.388262910798119;
		a4.box = new groupdocs_annotation_cloud_1.Rectangle();
		a4.box.x = 375.89276123046875;
		a4.box.y = 59.388263702392578;
		a4.box.width = 88.7330551147461;
		a4.box.height = 37.7290153503418;
		a4.pageNumber = 5;
		a4.penColor = 1201033;
		a4.penStyle = 0;
		a4.penWidth = 1;
		a4.type = groupdocs_annotation_cloud_1.AnnotationInfo.TypeEnum.Arrow;
		a1.text = "This is arrow annotation";
		a4.creatorName = "Anonym A.";

		var request = new groupdocs_annotation_cloud_1.PostAnnotationsRequest("Annotationdocs\\ten-pages.pdf", [a1, a2, a3, a4]);
		annotateApi.postAnnotations(request)
			.then(function (response) {
				console.log("Expected response type is void: Multiple Annotations added.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Add_Multiple_Annotations;