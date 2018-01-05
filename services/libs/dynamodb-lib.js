import AWS from 'aws-sdk';

//us-east-1:2be15265-4b74-4772-a146-bc4e32c6464a
AWS.config.update({region:'us-east-1'});

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}