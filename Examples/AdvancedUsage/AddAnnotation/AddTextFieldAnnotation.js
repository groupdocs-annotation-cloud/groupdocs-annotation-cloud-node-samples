"use strict";

class AddTextFieldAnnotation {
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
		a1.fontColor = 65535;
		a1.fontSize = 12;
		a1.type = annotation_cloud.AnnotationInfo.TypeEnum.TextField;		
		a1.text = "Text field text";
		a1.creatorName = "Anonym A.";

		var request = new annotation_cloud.PostAnnotationsRequest("annotationdocs\\one-page.docx", [a1]);
		await annotateApi.postAnnotations(request);
		console.log("AddTextFieldAnnotation: Text Field Annotation added.");
	}
}
module.exports = AddTextFieldAnnotation;