// run with >node createbucket.js test2-nodejs

import { PutObjectCommand  } from "@aws-sdk/client-s3";
import { s3Client } from "../libs/s3Client.js"; // Helper function that creates an Amazon S3 service client module.

export const bucketParams = {
  Bucket: "test2-nodejs",
  // Specify the name of the new object. For example, 'index.html'.
  // To create a directory for the object, use '/'. For example, 'myApp/package.json'.
  Key: "folder1/google.html",
  // Content of the new object.
  Body: "<a href='www.google.com'>google.com</a>",
};

export const addFileToBucket = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(
      "Successfully uploaded object: " +
        bucketParams.Bucket +
        "/" +
        bucketParams.Key
    );
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};


addFileToBucket();