"use strict";

class AddMultipleAnnotations {
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
		a1.type = annotation_cloud.AnnotationInfo.TypeEnum.Distance;
		a1.text = "This is distance annotation";
		a1.creatorName = "Anonym A.";

		let a2 = new annotation_cloud.AnnotationInfo();
		a2.annotationPosition = new annotation_cloud.Point();
		a2.annotationPosition.x = 1;
		a2.annotationPosition.y = 1;
		a2.box = new annotation_cloud.Rectangle();
		a2.box.x = 100;
		a2.box.y = 100;
		a2.box.width = 200;
		a2.box.height = 100;
		a2.pageNumber = 2;
		a2.penColor = 1201033;
		a2.penStyle = annotation_cloud.AnnotationInfo.PenStyleEnum.Solid;
		a1.pageNumber = 2;
		a2.penWidth = 1;
		a2.type = annotation_cloud.AnnotationInfo.TypeEnum.Area;
		a1.text = "This is area annotation";
		a2.creatorName = "Anonym A.";

		let a3 = new annotation_cloud.AnnotationInfo();
		a3.annotationPosition = new annotation_cloud.Point();
		a3.annotationPosition.x = 1;
		a3.annotationPosition.y = 1;
		a3.box = new annotation_cloud.Rectangle();
		a3.box.x = 100;
		a3.box.y = 100;
		a3.box.width = 200;
		a3.box.height = 100;
		a3.pageNumber = 4;
		a3.type = annotation_cloud.AnnotationInfo.TypeEnum.Point;
		a1.text = "This is point annotation";
		a3.creatorName = "Anonym A.";

		let a4 = new annotation_cloud.AnnotationInfo();
		a4.annotationPosition = new annotation_cloud.Point();
		a4.annotationPosition.x = 1;
		a4.annotationPosition.y = 1;
		a4.box = new annotation_cloud.Rectangle();
		a4.box.x = 100;
		a4.box.y = 100;
		a4.box.width = 200;
		a4.box.height = 100;
		a4.pageNumber = 5;
		a4.penColor = 1201033;
		a2.penStyle = annotation_cloud.AnnotationInfo.PenStyleEnum.Solid;
		a4.penWidth = 1;
		a4.type = annotation_cloud.AnnotationInfo.TypeEnum.Arrow;
		a1.text = "This is arrow annotation";
		a4.creatorName = "Anonym A.";

		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "annotationdocs\\ten-pages.docx";
		let options = new annotation_cloud.AnnotateOptions();
		options.fileInfo = fileInfo;
		options.annotations = [a1, a2, a3, a4];
		options.outputPath = "Output/output.docx";
		let result = await annotateApi.annotate(new annotation_cloud.AnnotateRequest(options));		

		console.log("AddMultipleAnnotations: Multiple Annotations added.");
	}
}
module.exports = AddMultipleAnnotations;