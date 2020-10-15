"use strict";

class MoveFolder {
	static async Run() {
		// retrieve supported file-formats
		let request = new annotation_cloud.MoveFolderRequest("annotationdocs1", "annotationdocs/annotationdocs1", myStorage, myStorage);
		await folderApi.moveFolder(request);
		console.log("Expected response type is Void: 'annotationdocs1' folder moved to 'annotationdocs/annotationdocs1'.");
	}
}
module.exports = MoveFolder;
