"use strict";

class AddSquigglyAnnotation {
	static async Run() {
		let a1 = new annotation_cloud.AnnotationInfo();
		let p1 = new annotation_cloud.Point();
		p1.x = 80;
		p1.y = 730;
		let p2 = new annotation_cloud.Point();
		p2.x = 240;
		p2.y = 730;
		let p3 = new annotation_cloud.Point();
		p3.x = 80;
		p3.y = 650;
		let p4 = new annotation_cloud.Point();
		p4.x = 240;
		p4.y = 650;
		a1.points = [p1, p2, p3, p4];
		a1.pageNumber = 0;
		a1.fontColor = 65535;
		SquigglyColor = 1422623, //Supported only Word and PDF
		a1.type = annotation_cloud.AnnotationInfo.TypeEnum.TextSquiggly;
		a1.text = "This is squiggly annotation";
		a1.creatorName = "Anonym A.";

		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "annotationdocs\\one-page.docx";
		let options = new annotation_cloud.AnnotateOptions();
		options.fileInfo = fileInfo;
		options.annotations = [a1];
		options.outputPath = "Output/output.docx";
		let result = await annotateApi.annotate(new annotation_cloud.AnnotateRequest(options));
		
		console.log("AddSquigglyAnnotation: Squiggly annotation added: " + result.href);
	}
}
module.exports = AddSquigglyAnnotation;