"use strict";

class AddArrowAnnotation {
	static async Run() {
		let a1 = new annotation_cloud.AnnotationInfo();
		a1.annotationPosition = new annotation_cloud.Point();
		a1.annotationPosition.x = 1;
		a1.annotationPosition.y = 1;
		a1.box = new annotation_cloud.Rectangle();
		a1.box.x = 100;
		a1.box.y = 100;
		a1.box.width = 200;
		a1.box.height = 100;
		a1.pageNumber = 0;
		a1.penColor = 1201033;
		a1.penStyle = annotation_cloud.AnnotationInfo.PenStyleEnum.Solid;
		a1.penWidth = 1;
		a1.type = annotation_cloud.AnnotationInfo.TypeEnum.Arrow;
		a1.text = "This is arrow annotation";
		a1.creatorName = "Anonym A.";

		var request = new annotation_cloud.PostAnnotationsRequest("annotationdocs\\one-page.docx", [a1]);
		await annotateApi.postAnnotations(request);
		console.log("AddArrowAnnotation: arrow Annotation added.");
	}
}
module.exports = AddArrowAnnotation;