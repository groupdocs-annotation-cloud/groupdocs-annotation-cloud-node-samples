"use strict";
class Annotation_Node_Move_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_annotation_cloud_1.MoveFolderRequest("annotations1", "Annotationdocs/annotations1", myStorage, myStorage);
		folderApi.moveFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'Annotationdocs1' folder moved to 'Annotationdocs/annotations1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Move_Folder;
