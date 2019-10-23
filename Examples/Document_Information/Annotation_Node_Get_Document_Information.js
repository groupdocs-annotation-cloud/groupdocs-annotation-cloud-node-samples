"use strict";
class Annotation_Node_Get_Document_Information {
	static Run() {

		var request = new groupdocs_annotation_cloud_1.GetInfoRequest("Annotationdocs\\one-page.docx", "");

		infoApi.getInfo(request)
			.then(function (response) {
				console.log("Expected response type is DocumentInfo: " + response.getPath());
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Get_Document_Information;
