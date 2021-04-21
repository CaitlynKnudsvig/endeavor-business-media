const webinars = require('@endeavor-business-media/package-shared/templates/published-content/webinars');
const videos = require('@endeavor-business-media/package-shared/templates/published-content/videos');

module.exports = (app) => {
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  app.get('/videos', (_, res) => { res.marko(videos); });
};
