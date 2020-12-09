"use strict";

global.annotation_cloud = require("groupdocs-annotation-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-annotation-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Annotation Cloud API Examples
//// ***********************************************************

//TODO: Get your ClientId and ClientSecret at https://dashboard.groupdocs.cloud (free registration is required).

global.clientId = "XXXX-XXXX-XXXX-XXXX";
global.clientSecret = "XXXXXXXXXXXXXXXX";

global.myStorage = "First Storage";

const config = new annotation_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct AnnotateApi
global.annotateApi = annotation_cloud.AnnotateApi.fromConfig(config);

// construct PreviewApi
global.previewApi = annotation_cloud.PreviewApi.fromConfig(config);

// construct InfoApi
global.infoApi = annotation_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = annotation_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = annotation_cloud.StorageApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Basic usage Examples

    await require('./BasicUsage/GetSupportedFormats').Run();    
    await require('./BasicUsage/GetDocumentInformation').Run();

    // Advanced usage Examples
    await require('./AdvancedUsage/AddAnnotation/AddAreaAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddDistanceAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddMultipleAnnotations').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddPointAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddPolylineAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddTextFieldAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddTextRedactionAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddTextReplacementAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddTextStrikeoutAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddTextUnderlineAnnotation').Run();
    //await require('./AdvancedUsage/AddAnnotation/AddWatermarkAnnotation').Run();
    await require('./AdvancedUsage/GetAnnotations/GetAnnotations').Run();
    await require('./AdvancedUsage/ExportDocumentWithAnnotations/ExportDocumentWithAnnotations').Run();
    await require('./AdvancedUsage/DeleteAnnotations/DeleteAnnotations').Run();
    await require('./AdvancedUsage/DocumentPreview/GetPages').Run();
    await require('./AdvancedUsage/DocumentPreview/DeletePages').Run();

}

examples();
