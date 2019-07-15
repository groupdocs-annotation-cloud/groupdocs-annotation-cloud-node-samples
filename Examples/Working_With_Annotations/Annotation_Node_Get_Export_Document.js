"use strict";
class Annotation_Node_Get_Export_Document {
	static Run() {
		var request = new groupdocs_annotation_cloud_1.GetExportRequest("annotations\\one-page-annotated.pdf", undefined, undefined, undefined, undefined, undefined);
		annotateApi.getExport(request)
			.then(function (response) {
				console.log("Expected response type is File: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Get_Export_Document;