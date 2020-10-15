"use strict";

class DeleteAnnotations {
	static async Run() {
		var request = new annotation_cloud.DeleteAnnotationsRequest("annotationdocs\\one-page.docx");
		await annotateApi.deleteAnnotations(request)
		console.log("DeleteAnnotations: annotations deleted.");
	}
}
module.exports = DeleteAnnotations;