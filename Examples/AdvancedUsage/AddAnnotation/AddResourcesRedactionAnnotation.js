"use strict";

class AddResourcesRedactionAnnotation {
	static async Run() {
		let a1 = new annotation_cloud.AnnotationInfo();
		a1.box = new annotation_cloud.Rectangle();
		a1.box.x = 100;
		a1.box.y = 100;
		a1.box.width = 200;
		a1.box.height = 100;
		a1.pageNumber = 0;
		a1.type = annotation_cloud.AnnotationInfo.TypeEnum.ResourcesRedaction;
		a1.text = "This is Resources Redaction annotation";
		a1.creatorName = "Anonym A.";

		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "annotationdocs\\one-page.docx";
		let options = new annotation_cloud.AnnotateOptions();
		options.fileInfo = fileInfo;
		options.annotations = [a1];
		options.outputPath = "Output/output.docx";
		let result = await annotateApi.annotate(new annotation_cloud.AnnotateRequest(options));
		
		console.log("AddResourcesRedactionAnnotation: Resources Redaction Annotation added: " + result.href);
	}
}
module.exports = AddResourcesRedactionAnnotation;
