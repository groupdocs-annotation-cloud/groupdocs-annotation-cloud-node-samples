"use strict";

class CopyFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new annotation_cloud.CopyFolderRequest("annotationdocs", "annotationdocs1", myStorage, myStorage);
		await folderApi.copyFolder(request);
		console.log("Expected response type is Void: 'annotationdocs' folder copied as 'annotationdocs1'.");
	}
}
module.exports = CopyFolder;
