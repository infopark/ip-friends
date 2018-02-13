import homepageObjIcon from 'assets/images/homepage_obj.svg';
import {
  defaultPageEditingConfigAttributes,
  defaultPageProperties,
} from '../_defaultPageEditingConfig';

Scrivito.provideEditingConfig('Homepage', {
  title: 'Homepage',
  thumbnail: `/${homepageObjIcon}`,
  hideInSelectionDialogs: true,
  attributes: {
    ...defaultPageEditingConfigAttributes,
    logoDark: {
      title: 'Dark logo',
      description: 'Used with light backgrounds',
    },
    logoWhite: {
      title: 'Light logo',
      description: 'Used with dark backgrounds',
    },
    dividerLogo: {
      title: 'Divider logo',
      description: 'Used in the divider widget',
    },
    showAsLandingPage: {
      title: 'Display this page as a landing page?',
      description: 'Removes the header navigation and only centers the logo instead. Default: No',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
  },
  properties: [
    ...defaultPageProperties,
    'showAsLandingPage',
  ],
  propertiesGroups: [
    {
      title: 'Site settings',
      properties: [
        'logoDark',
        'logoWhite',
        'dividerLogo',
      ],
    },
  ],
  initialContent: {
    showAsLandingPage: 'no',
  },
});
