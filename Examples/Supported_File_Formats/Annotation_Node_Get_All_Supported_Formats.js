"use strict";
class Annotation_Node_Get_All_Supported_Formats {
	static Run() {
		// retrieve supported file-formats
		infoApi.getSupportedFileFormats()
			.then(function (response) {
				console.log("Supported file-formats:");
				response.formats.forEach(function (format) {
					console.log(format.fileFormat + "(" + format.extension + ")" + "\n");
				});
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Annotation_Node_Get_All_Supported_Formats;
