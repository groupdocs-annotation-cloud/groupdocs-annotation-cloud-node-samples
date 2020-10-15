"use strict";

class AddTextRedactionAnnotation {
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
		a1.type = annotation_cloud.AnnotationInfo.TypeEnum.TextRedaction;
		a1.text = "This is text redaction annotation";
		a1.creatorName = "Anonym A.";

		var request = new annotation_cloud.PostAnnotationsRequest("annotationdocs\\one-page.docx", [a1]);
		await annotateApi.postAnnotations(request);
		console.log("AddTextRedactionAnnotation: Text Redaction Annotation added.");
	}
}
module.exports = AddTextRedactionAnnotation;