const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ils/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000113', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ILS_for_Mfg', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/industriallasersolutions', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-P8Q22J8',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Lasers for Manufacturing Industrial Laser Solutions has one focus, industrial laser materials processing. We are devoted exclusively to global coverage of industrial laser applications, technology, and the people and companies who participate in this, the largest commercial portion of the global laser market. Our uniquely qualified international editorial staff has accumulated experience in this technology field exceeding 100 years.',
  },
};