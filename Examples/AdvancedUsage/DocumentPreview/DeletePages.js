"use strict";

class DeletePages {
	static async Run() {
		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "annotationdocs\\one-page.docx";

		var request = new annotation_cloud.DeletePagesRequest(fileInfo);
		await previewApi.deletePages(request)
		console.log("DeletePages: pages deleted.");
	}
}
module.exports = DeletePages;