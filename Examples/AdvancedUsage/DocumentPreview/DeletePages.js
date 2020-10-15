"use strict";

class DeletePages {
	static async Run() {
		var request = new annotation_cloud.DeletePagesRequest("annotationdocs\\one-page.docx");
		await previewApi.deletePages(request)
		console.log("DeletePages: pages deleted.");
	}
}
module.exports = DeletePages;