const {spawn} = require('child_process');
const cypress = require('cypress');

let webServer = null;
let mockGqlServer = null;

function startServer() {
  webServer = spawn('npm start', {shell: true});
  mockGqlServer = spawn('npm run start:mocks', {shell: true});
  // eslint-disable-next-line no-console
  console.log(`started web server, pid=${webServer.pid}`);
  // eslint-disable-next-line no-console
  console.log(`started mock server, pid=${mockGqlServer.pid}`);
}

function stopServer() {
  if (webServer) {
    webServer.kill('SIGINT');
    mockGqlServer.kill('SIGINT');
  }
}

async function run() {
  let allTestsPassed = true;

  try {
    startServer();
    const result = await cypress.run();
    if (result.failures !== 0) {
      allTestsPassed = false;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    allTestsPassed = false;
  } finally {
    stopServer();
  }

  process.exit(allTestsPassed ? 0 : 1);
}

run();
