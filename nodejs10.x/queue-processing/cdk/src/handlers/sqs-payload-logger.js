/**
 * A Lambda function that logs the payload received from SQS.
 */
exports.sqsPayloadLoggerHandler = async (event, context) => {
    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    event.Records.forEach((record) => {
        console.log(JSON.stringify(record));
    });
};
