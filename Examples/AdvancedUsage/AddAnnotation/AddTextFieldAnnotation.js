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

		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "annotationdocs\\one-page.docx";
		let options = new annotation_cloud.AnnotateOptions();
		options.fileInfo = fileInfo;
		options.annotations = [a1];
		options.outputPath = "Output/output.docx";
		let result = await annotateApi.annotate(new annotation_cloud.AnnotateRequest(options));
		
		console.log("AddTextFieldAnnotation: Text Field Annotation added: " + result.href);
	}
}
module.exports = AddTextFieldAnnotation;