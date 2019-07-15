"use strict";
class Annotation_Node_Get_Disc_Usage {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_annotation_cloud_1.GetDiscUsageRequest(myStorage);
		storageApi.getDiscUsage(request)
			.then(function (response) {
				console.log("Expected response type is DiscUsage: " + response.usedSize);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Get_Disc_Usage;