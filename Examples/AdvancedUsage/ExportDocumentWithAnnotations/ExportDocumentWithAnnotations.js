"use strict";

class ExportDocumentWithAnnotations {
	static async Run() {
		var request = new annotation_cloud.GetExportRequest("annotationdocs\\one-page.docx");
		let response = await annotateApi.getExport(request)
		console.log("ExportDocumentWithAnnotations: file size = " + response.length);
	}
}
module.exports = ExportDocumentWithAnnotations;