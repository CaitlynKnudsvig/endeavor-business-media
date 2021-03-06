const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/4000114/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RDHmag', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/RDHMagazine', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5ZXPSXX',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'RDH is published monthly for dental hygienists committed to ongoing professional growth. Reporting on topics such as hygiene practice management, evidence-based periodontics, infection control, oral pathology, new product evaluations and continuing education, RDH covers crucial issues that affect hygienists every day.',
  },
  contactUs: {
    branding: {
      bgColor: '#8956a7',
      logo: 'https://base.imgix.net/files/base/pennwell/rdh/logo.png?h=60',
    },
    to: 'zacharyk@pennwell.com',
  },
};
