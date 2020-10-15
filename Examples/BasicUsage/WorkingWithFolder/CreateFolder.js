"use strict";

class CreateFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new annotation_cloud.CreateFolderRequest("annotationdocs", myStorage);
		await folderApi.createFolder(request);
		console.log("Expected response type is Void: 'annotationdocs' folder created.");
	}
}
module.exports = CreateFolder;
