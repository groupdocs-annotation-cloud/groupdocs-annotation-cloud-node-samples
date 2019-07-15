"use strict";
class Annotation_Node_Get_PDF {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.GetPdfRequest("annotations\\ten-pages.docx");
		annotateApi.getPdf(request)
			.then(function (response) {
				console.log("Expected response type is File: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Get_PDF;