"use strict";

class ExtractAnnotations {
	static async Run() {
		let fileInfo = new annotation_cloud.FileInfo();
		fileInfo.filePath = "input\\input.docx";
		let result = await annotateApi.extract(new annotation_cloud.ExtractRequest(fileInfo));   
		console.log("GetAnnotations: annotations count = " + result.length);
	}
}
module.exports = ExtractAnnotations;