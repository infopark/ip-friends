import defaultPageAttributes from '../_defaultPageAttributes';

const Page = Scrivito.provideObjClass('Page', {
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
  },
});

export default Page;
