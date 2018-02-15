Scrivito.configureContentBrowser({
  filters: {
    _objClass: {
      field: '_objClass',
      operator: 'equals',
      options: {
        All: {
          title: 'All',
          icon: 'folder',
          query: Scrivito.Obj.all(),
          selected: true,
        },
        Authors: {
          title: 'Autoren',
          icon: 'person',
          value: 'Author',
        },
        Images: {
          title: 'Images',
          icon: 'image',
          value: 'Image',
        },
        Pages: {
          title: 'Pages',
          icon: 'sheet',
          value: [
            'Blog',
            'BlogPost',
            'Homepage',
          ],
          options: {
            BlogPost: {
              title: 'Blog posts',
              icon: 'pen',
            },
            Homepage: {
              title: 'Homepage',
              icon: 'inbox',
            },
            Blog: {
              title: 'Blog',
              icon: 'pen',
            },
          },
        },
      },
    },
    _modification: {
      title: 'Changed',
      type: 'checkbox',
      expanded: true,
      field: '_modification',
      options: {
        New: {
          value: 'new',
        },
        Edited: {
          value: 'edited',
        },
      },
    },
  },
});
