import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <ul
          id="slide-out"
          className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default"
          data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
          <li>
            <div className="logo-wrapper waves-light waves-effect waves-light">
              <a href="!#">
                <img
                  src="http://mdbootstrap.com/img/logo/mdb-transparent.png"
                  alt=""
                  className="img-fluid flex-center"></img>
              </a>
            </div>
          </li>
          <li>
            <ul className="social">
              <li>
                <a href="!#" className="icons-sm fb-ic">
                  <i className="fa fa-facebook"> </i>
                </a>
              </li>
              <li>
                <a href="!#" className="icons-sm pin-ic">
                  <i className="fa fa-pinterest"> </i>
                </a>
              </li>
              <li>
                <a href="!#" className="icons-sm gplus-ic">
                  <i className="fa fa-google-plus"> </i>
                </a>
              </li>
              <li>
                <a href="!#" className="icons-sm tw-ic">
                  <i className="fa fa-twitter"> </i>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <form className="search-form" role="search">
              <div className="form-group waves-light waves-effect waves-light">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </form>
          </li>
          <li>
            <ul className="collapsible collapsible-accordion">
              <li>
                <a
                  href="!#"
                  className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-shopping-bag"></i> Product Page
                  <i className="fa fa-angle-down rotate-icon"></i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="!#" className="waves-effect">
                        Product Page V.1
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Product Page V.2
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Product Page V.3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="active">
                <a
                  href="!#"
                  className="collapsible-header waves-effect arrow-r active">
                  <i className="fa fa-shopping-cart"></i> Cart Pages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with shopping cart
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with contact form
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with contact form V.2
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with sign in form
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with 'terms of use'
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with 'FAQ'
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="!#"
                  className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-dashboard"></i> Homepages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="!#" className="waves-effect">
                        Ecommerce homepage default
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Ecommerce homepage full width
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Ecommerce homepage V.3 Carousel
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Ecommerce homepage V.3 Full Page Carousel
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Ecommerce homepage V.3 Half Page Carousel
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Ecommerce homepage V.4
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="!#"
                  className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-desktop"></i> Post Pages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with column on the right
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with newsletter on the left
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Page with newsletter on the right
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Full width page with logged user
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Full width page with not logged user
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="!#"
                  className="collapsible-header waves-effect arrow-r">
                  <i className="fa fa-diamond"></i> Category Pages
                  <i className="fa fa-angle-down rotate-icon"></i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="!#" className="waves-effect">
                        Category list with left column
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Category list with right column
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Category grid with left column
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Category grid with right column
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="waves-effect">
                        Category grid with left column carousel
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>

          <div className="sidenav-bg mask-strong"></div>

          <div className="ps__scrollbar-x-rail">
            <div className="ps__scrollbar-x" tabIndex="0"></div>
          </div>
          <div className="ps__scrollbar-y-rail">
            <div className="ps__scrollbar-y" tabIndex="0"></div>
          </div>
        </ul>

        <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
          <div className="float-left">
            <a href="!#" data-activates="slide-out" className="button-collapse">
              <i className="fa fa-bars"></i>
            </a>
          </div>

          <div className="breadcrumb-dn mr-auto">
            <ol className="breadcrumb header-breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#">Trang Chủ</a>
              </li>
            </ol>
          </div>

          <ul className="nav navbar-nav nav-flex-icons ml-auto">
            <li className="nav-item dropdown">
              <a
                href="!#"
                className="nav-link dropdown-toggle waves-effect waves-light"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-expanded="false">
                <i className="fa fa-user"></i> Tài Khoản
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenu1">
                <a href="!#" className="dropdown-item waves-effect waves-light">
                  Đăng Ký
                </a>
                <a href="!#" className="dropdown-item waves-effect waves-light">
                  Đăng Nhập
                </a>
                <a href="!#" className="dropdown-item waves-effect waves-light">
                  Đăng Xuất
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
