const { exec } = require('child_process');
let commandBase = 'serverless webpack invoke --function ';
let command = '';
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  let splitArg = val.split('=');
  if (splitArg[0] === '--type') {
    switch (splitArg[1]) {
      case 'create':
        command = 'create --path mocks/create-event.json';
        break;
      case 'get':
        command = 'get --path mocks/get-event.json';
        break;
      case 'list':
        command = 'list --path mocks/list-event.json';
        break;
      case 'update':
        command = 'update --path mocks/update-event.json';
        break;
      case 'delete':
        command = 'delete --path mocks/delete-event.json';
        break;
    }
  }
});

exec(commandBase + command, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});