const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const technologiesTemplate = require('../templates/website-section/technologies');
const globalThoughtLeadersTemplate = require('../templates/website-section/global-thought-leaders');
const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(technologies)', withWebsiteSection({
    template: technologiesTemplate,
    queryFragment,
  }));
  app.get('/:alias(global-thought-leaders)', withWebsiteSection({
    template: globalThoughtLeadersTemplate,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
