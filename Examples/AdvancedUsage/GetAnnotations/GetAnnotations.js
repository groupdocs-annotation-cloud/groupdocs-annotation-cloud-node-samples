"use strict";

class GetAnnotations {
	static async Run() {
		var request = new annotation_cloud.GetImportRequest("annotationdocs\\one-page.docx");
		let response = await annotateApi.getImport(request)
		console.log("GetAnnotations: annotations count = " + response.length);
	}
}
module.exports = GetAnnotations;