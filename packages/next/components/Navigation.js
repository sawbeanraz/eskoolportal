import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="active">
            <Link href="/">
              <a>
                <i className="fa fa-th-large"></i>{' '}
                <span className="nav-label">Dashboards</span>{' '}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;