const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
      srcset: [
        'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
      srcset: [
        'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/HPN_Online', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/hpnonline', target: '_blank' },
  ],
  identityX: {
    appId: '5e6948a2fa46c4c1a0eb2a13',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-PGBWQKG',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'HPN Online features online exclusive content as well as feature articles and stories from our print publications. Access digital editions and recent issues for our magazine here.',
  },
  contactUs: {
    branding: {
      bgColor: '#000000',
      logo: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
    },
    to: 'krussell@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'krussell@endeavorb2b.com',
    sendFrom: 'HPN Online <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
    bgColor: '#000000',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
