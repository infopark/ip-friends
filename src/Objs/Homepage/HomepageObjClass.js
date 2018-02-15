import defaultPageAttributes from '../_defaultPageAttributes';

const Homepage = Scrivito.provideObjClass('Homepage', {
  attributes: {
    ...defaultPageAttributes,
    showAsLandingPage: ['enum', { values: ['yes', 'no'] }],
    childOrder: 'referencelist',
    footer: 'widgetlist',
    logoDark: 'reference',
    logoWhite: 'reference',
    dividerLogo: 'reference',
  },
});

export default Homepage;
