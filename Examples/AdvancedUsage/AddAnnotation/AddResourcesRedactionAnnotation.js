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

		var request = new annotation_cloud.PostAnnotationsRequest("annotationdocs\\one-page.docx", [a1]);
		await annotateApi.postAnnotations(request);
		console.log("AddResourcesRedactionAnnotation: Resources Redaction Annotation added.");
	}
}
module.exports = AddResourcesRedactionAnnotation;
