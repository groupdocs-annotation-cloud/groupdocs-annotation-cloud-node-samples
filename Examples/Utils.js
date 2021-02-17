"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new annotation_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			let file = fs.readFileSync(resourcesFolder + filePath);
			let uploadRequest = new annotation_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("annotationdocs/input.docx");
		await this.UploadTestFile("annotationdocs/one-page.docx");
		await this.UploadTestFile("annotationdocs/one-page-password.docx");
		await this.UploadTestFile("annotationdocs/ten-pages.docx");
		await this.UploadTestFile("annotationdocs/ten-pages.pdf");
		await this.UploadTestFile("annotationdocs/JohnSmith.png");
	}	
}

module.exports = Utils;
