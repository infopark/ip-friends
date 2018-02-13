import PageObjIcon from 'assets/images/page_obj.svg';
import {
  defaultPageEditingConfigAttributes,
  defaultPageInitialContent,
  defaultPageProperties,
} from '../_defaultPageEditingConfig';

Scrivito.provideEditingConfig('Page', {
  title: 'Page',
  thumbnail: `/${PageObjIcon}`,
  attributes: {
    ...defaultPageEditingConfigAttributes,
  },
  properties: [
    ...defaultPageProperties,
  ],
  propertiesGroups: [],
  initialContent: {
    ...defaultPageInitialContent,
  },
});
