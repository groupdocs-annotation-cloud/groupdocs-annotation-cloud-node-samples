"use strict";
class Annotation_Node_Copy_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_annotation_cloud_1.CopyFolderRequest("annotations", "annotations1", myStorage, myStorage);
		folderApi.copyFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'annotations' folder copied as 'annotations1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Copy_Folder;
