"use strict";
class Annotation_Node_Storage_Exist {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_annotation_cloud_1.StorageExistsRequest(myStorage);
		storageApi.storageExists(request)
			.then(function (response) {
				console.log("Expected response type is StorageExist: " + response.exists);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Storage_Exist;
