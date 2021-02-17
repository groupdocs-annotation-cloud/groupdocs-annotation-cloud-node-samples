"use strict";

class GetPages {
	static async Run() {
		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "annotationdocs\\one-page.docx";
		let options = new annotation_cloud.PreviewOptions();
		options.fileInfo = fileInfo;          

		const response = await previewApi.getPages(new annotation_cloud.GetPagesRequest(options));

		console.log("GetPages: pages count = " + response.totalCount);
	}
}
module.exports = GetPages;