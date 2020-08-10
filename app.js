const { App, ExpressReceiver, LogLevel } = require('@slack/bolt');

const app = new App({
  signingSecret: '',
  clientId: '',
  clientSecret: '',
  stateSecret: "a-very-cool-secret",
  scopes: ["incoming-webhook", "commands"],
  logLevel: LogLevel.DEBUG,
  // installationStore: {
  //   storeInstallation: async (installation) => {
  //     return db.collection("auth").doc(installation.team.id).set(installation);
  //   },
  //   fetchInstallation: async (InstallQuery) => {
  //     return await db.collection("auth").doc(InstallQuery.teamId);
  //   },
  // },
});

(async () => {
  await app.start(process.env.PORT || '3000');
  console.log('⚡️ Bolt app started');
  console.log('Go to http://localhost:3000/slack/install to initiate oauth flow');
})();
