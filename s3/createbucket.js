// run with >node createbucket.js test2-nodejs

import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../libs/s3Client.js"; // Helper function that creates an Amazon S3 service client module.

const bucketName = process.argv.slice(2);

export const bucketParams = { Bucket: bucketName };
export const addBucket = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand(bucketParams));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};


addBucket();