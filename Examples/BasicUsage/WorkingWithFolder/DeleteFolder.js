"use strict";

class DeleteFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new annotation_cloud.DeleteFolderRequest("annotationdocs/annotationdocs1", myStorage, true);
		await folderApi.deleteFolder(request);
		console.log("Expected response type is Void: 'annotationdocs/annotationdocs1' folder deleted recursively.");
	}
}
module.exports = DeleteFolder;
