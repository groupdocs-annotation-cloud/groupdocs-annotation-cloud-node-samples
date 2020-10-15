"use strict";

class GetPages {
	static async Run() {
		var request = new annotation_cloud.GetPagesRequest("annotationdocs\\one-page.docx");
		let response = await previewApi.getPages(request)
		console.log("GetPages: pages count = " + response.totalCount);
	}
}
module.exports = GetPages;