"use strict";
global.groupdocs_annotation_cloud_1 = require("groupdocs-annotation-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-annotation-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Annotation Cloud API Examples
//// ***********************************************************
//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX";
global.appKey = "XXXXXXXXXXXXXXX";
global.myStorage = "XXXXX";

// construct AnnotateApi
global.annotateApi = groupdocs_annotation_cloud_1.AnnotateApi.fromKeys(appSid, appKey);

// construct PreviewApi
global.previewApi = groupdocs_annotation_cloud_1.PreviewApi.fromKeys(appSid, appKey);

// construct InfoApi
global.infoApi = groupdocs_annotation_cloud_1.InfoApi.fromKeys(appSid, appKey);

// construct StorageApi
global.storageApi = groupdocs_annotation_cloud_1.StorageApi.fromKeys(appSid, appKey);

// construct FolderApi
global.folderApi = groupdocs_annotation_cloud_1.FolderApi.fromKeys(appSid, appKey);

// construct FileApi
global.fileApi = groupdocs_annotation_cloud_1.FileApi.fromKeys(appSid, appKey);

//// Uploading sample test files from local to storage under folder 'Annotationdocs'
//console.log("Executing Upload Test Files...");
//require('./Common_Utilities/Utils').Upload_Test_File();

// ******* Execute Examples *******
console.log("*** Executing examples...");
// ******* Execute Examples *******

//// ***********************************************************
//// ***** WORKING WITH STORAGE *****
//// ***********************************************************

// Is Storage Exist
//require('./Working_With_Storage/Annotation_Node_Storage_Exist').Run();

// Get Get Disc Usage
//require('./Working_With_Storage/Annotation_Node_Get_Disc_Usage').Run();

// Get File Versions
//require('./Working_With_Storage/Annotation_Node_Get_File_Versions').Run();

// Is Object Exists
//require('./Working_With_Storage/Annotation_Node_Object_Exists').Run();


//// ***********************************************************
//// ***** WORKING WITH FOLDER *****
//// ***********************************************************

// Create Folder
//require('./Working_With_Folder/Annotation_Node_Create_Folder').Run();

// Copy Folder
//require('./Working_With_Folder/Annotation_Node_Copy_Folder').Run();

// Move Folder
//require('./Working_With_Folder/Annotation_Node_Move_Folder').Run();

// Delete Folder
//require('./Working_With_Folder/Annotation_Node_Delete_Folder').Run();

// Get Files List
//require('./Working_With_Folder/Annotation_Node_Get_Files_List').Run();


//// ***********************************************************
//// ***** WORKING WITH FILES *****
//// ***********************************************************

// Upload File
//require('./Working_With_Files/Annotation_Node_Upload_File').Run();

// Copy File
//require('./Working_With_Files/Annotation_Node_Copy_File').Run();

// Move File
//require('./Working_With_Files/Annotation_Node_Move_File').Run();

// Delete File
//require('./Working_With_Files/Annotation_Node_Delete_File').Run();

// Download_File
//require('./Working_With_Files/Annotation_Node_Download_File').Run();


//// ***********************************************************
//// ***** WORKING WITH SUPPORTED FORMATS *****
//// ***********************************************************

// Get All Supported Formats
require('./Supported_File_Formats/Annotation_Node_Get_All_Supported_Formats').Run();

//// ***********************************************************
//// ***** WORKING WITH DOCUMENT INFORMATION *****
//// ***********************************************************

// Get document information/metadata.
//require('./Document_Information/Annotation_Node_Get_Document_Information').Run();


//// ***********************************************************
//// ***** WORKING WITH ANNOTATIONS *****
//// ***********************************************************

// Post/Add multiple annotations
//require('./Working_With_Annotations/Annotation_Node_Add_Multiple_Annotations').Run();

// Post/Add Area annotations
//require('./Working_With_Annotations/Annotation_Node_Add_Area_Annotation').Run();

// Post/Add Distance annotations
//require('./Working_With_Annotations/Annotation_Node_Add_Distance_Annotation').Run();

// Post/Add Polyline annotations
//require('./Working_With_Annotations/Annotation_Node_Add_Polyline_Annotation').Run();

// Post/Add Watermark annotations
//require('./Working_With_Annotations/Annotation_Node_Add_Watermark_Annotation').Run();

// Post/Add Point annotations
//require('./Working_With_Annotations/Annotation_Node_Add_Point_Annotation').Run();

// Post/Add Text annotations
//require('./Working_With_Annotations/Annotation_Node_Add_Text_Annotation').Run();

// Post/Add Text Field annotations
//require('./Working_With_Annotations/Annotation_Node_Add_TextField_Annotation').Run();

// Post/Add Text Replacement annotations
//require('./Working_With_Annotations/Annotation_Node_Add_TextReplacement_Annotation').Run();

// Post/Add Text Redaction annotations
//require('./Working_With_Annotations/Annotation_Node_Add_TextRedaction_Annotation').Run();

// Post/Add Text Underline annotations
//require('./Working_With_Annotations/Annotation_Node_Add_TextUnderline_Annotation').Run();

// Post/Add Text Underline annotations
//require('./Working_With_Annotations/Annotation_Node_Add_TextUnderline_Annotation').Run();

// Post/Add Text Strikeout annotations
//require('./Working_With_Annotations/Annotation_Node_Add_TextStrikeout_Annotation').Run();

//Get annotations
//require('./Working_With_Annotations/Annotation_Node_Get_Annotation').Run();

//Export annotation with document
//require('./Working_With_Annotations/Annotation_Node_Get_Export_Document').Run();

//Get annotations file with PDF
//require('./Working_With_Annotations/Annotation_Node_Get_PDF').Run();

//Delete annotations
//require('./Working_With_Annotations/Annotation_Node_Delete_Annotation').Run();


//// ***********************************************************
//// ***** WORKING WITH PAGES *****
//// ***********************************************************

//Get pages
//require('./Working_With_Pages/Annotation_Node_Get_Pages').Run();

//Delete pages
//require('./Working_With_Pages/Annotation_Node_Delete_Pages').Run();
