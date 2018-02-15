import Homepage from '../Objs/Homepage/HomepageObjClass';

class Navigation extends React.Component {
  static fetchPages() {
    const homePage = Scrivito.Obj.where('_objClass', 'equals', 'Homepage').take(1);
    const blogPage = Scrivito.Obj.where('_objClass', 'equals', 'Blog').take(1);
    const postPage = Scrivito.Obj.where('_objClass', 'equals', 'BlogPost').take(5);
    return [].concat(homePage).concat(blogPage).concat(postPage);
  }

  static navLinks() {
    const pages = Navigation.fetchPages();
    if (!pages) {
      return;
    }
    const links = [];
    for (let p = 0, pl = pages.length; p < pl; p += 1) {
      const page = pages[p];
      let title = page.get('pageTitle');
      if (page instanceof Homepage) {
        title = 'Home';
      }
      if (!title || title.length <= 0) {
        title = 'Ohne Titel';
      }
      links.push(<li key={ page.id() }>
        <Scrivito.LinkTag to={ page }>{ title }</Scrivito.LinkTag>
      </li>);
    }
    return links;
  }

  render() {
    return (<div>
      <ul className='nav navbar-nav'>{ Navigation.navLinks() }</ul>
    </div>);
  }
}

export default Scrivito.connect(Navigation);
