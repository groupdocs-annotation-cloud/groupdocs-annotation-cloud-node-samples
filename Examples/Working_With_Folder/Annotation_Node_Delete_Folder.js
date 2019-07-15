"use strict";
class Annotation_Node_Delete_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_annotation_cloud_1.DeleteFolderRequest("annotations/annotations1", myStorage, true);
		folderApi.deleteFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'annotations/annotations1' folder deleted recursively.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Delete_Folder;
