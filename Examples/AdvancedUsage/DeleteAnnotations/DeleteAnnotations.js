"use strict";

class DeleteAnnotations {
	static async Run() {
		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "input\\input.docx";
		let options = new annotation_cloud.RemoveOptions();
		options.fileInfo = fileInfo;
		options.annotationIds = [1, 2, 3];
		options.outputPath = "Output/output.docx";

		// Remove annotations
		let result = await annotateApi.removeAnnotations(new annotation_cloud.RemoveAnnotationsRequest(options));

		console.log("DeleteAnnotations: annotations delete: " + result.href);
	}
}
module.exports = DeleteAnnotations;