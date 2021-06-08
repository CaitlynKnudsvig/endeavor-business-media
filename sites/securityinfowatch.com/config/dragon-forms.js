const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'SIWPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'SIWnewprefcond' })
  .addForm('newsletterSignup', { omedasite: 'SIWnewprefcond', query: { pk: 'ARTWEB' } });
module.exports = config;
