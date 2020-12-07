export default function nav() {
  return (
    <nav className="navbar navbar-marketing navbar-expand-lg bg-white navbar-light">
      <div className="container">
        <a className="navbar-brand text-dark" href="index.html">
          SB UI Kit Pro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i data-feather="menu"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-lg-5">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home{" "}
              </a>
            </li>
            <li className="nav-item dropdown dropdown-xl no-caret">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownDemos"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Landings<i className="fas fa-chevron-right dropdown-arrow"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right animated--fade-in-up mr-lg-n15"
                aria-labelledby="navbarDropdownDemos"
              >
                <div className="row no-gutters">
                  <div
                    className="col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block"
                    style="
                            background-image: url('https://source.unsplash.com/mqO0Rf-PUMs/500x350');
                          "
                  >
                    <div className="d-flex h-100 w-100 align-items-center justify-content-center">
                      <div className="text-white text-center z-1">
                        <div className="mb-3">
                          Multipurpose landing pages for a variety of projects.
                        </div>
                        <a
                          className="btn btn-white btn-sm text-primary rounded-pill"
                          href="index.html"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 p-lg-5">
                    <div className="row">
                      <div className="col-lg-6">
                        <h6 className="dropdown-header text-primary">
                          Applications
                        </h6>
                        <a className="dropdown-item" href="landing-app-mobile.html">
                          Mobile App
                        </a>
                        <a
                          className="dropdown-item"
                          href="landing-app-desktop.html"
                        >
                          Desktop App
                        </a>
                        <div className="dropdown-divider border-0"></div>
                        <h6 className="dropdown-header text-primary">Business</h6>
                        <a
                          className="dropdown-item"
                          href="landing-multipurpose.html"
                        >
                          Multipurpose
                        </a>
                        <a className="dropdown-item" href="landing-agency.html">
                          Agency
                        </a>
                        <a className="dropdown-item" href="landing-press.html">
                          Press
                        </a>
                        <a className="dropdown-item" href="landing-directory.html">
                          Directory
                        </a>
                        <a className="dropdown-item" href="landing-rental.html">
                          Rental
                        </a>
                        <a
                          className="dropdown-item"
                          href="landing-real-estate.html"
                        >
                          Real Estate
                        </a>
                        <a
                          className="dropdown-item"
                          href="landing-classNameifieds.html"
                        >
                          classNameifieds
                        </a>
                        <div className="dropdown-divider border-0"></div>
                        <h6 className="dropdown-header text-primary">
                          Lead Generation
                        </h6>
                        <a
                          className="dropdown-item"
                          href="landing-lead-capture.html"
                        >
                          Lead Capture
                        </a>
                        <div className="dropdown-divider border-0 d-lg-none"></div>
                      </div>
                      <div className="col-lg-6">
                        <h6 className="dropdown-header text-primary">Personal</h6>
                        <a className="dropdown-item" href="landing-resume.html">
                          Resume
                        </a>
                        <a className="dropdown-item" href="landing-portfolio.html">
                          Portfolio
                        </a>
                        <div className="dropdown-divider border-0"></div>
                        <h6 className="dropdown-header text-primary">
                          Header Styles
                        </h6>
                        <a className="dropdown-item" href="header-basic.html">
                          Basic
                        </a>
                        <a
                          className="dropdown-item"
                          href="header-basic-signup.html"
                        >
                          Basic (Signup)
                        </a>
                        <a className="dropdown-item" href="header-graphic.html">
                          Graphic
                        </a>
                        <a
                          className="dropdown-item"
                          href="header-graphic-signup.html"
                        >
                          Graphic (Signup)
                        </a>
                        <a className="dropdown-item" href="header-inner-page.html">
                          Inner Page
                        </a>
                        <a className="dropdown-item" href="header-nav-only.html">
                          Nav Only
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-lg no-caret">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownPages"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages<i className="fas fa-chevron-right dropdown-arrow"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                aria-labelledby="navbarDropdownPages"
              >
                <div className="row no-gutters">
                  <div className="col-lg-6 p-lg-5">
                    <h6 className="dropdown-header text-primary">Company</h6>
                    <a className="dropdown-item" href="page-basic.html">
                      Basic Page
                    </a>
                    <a className="dropdown-item" href="page-company-about.html">
                      About
                    </a>
                    <a className="dropdown-item" href="page-company-pricing.html">
                      Pricing
                    </a>
                    <a className="dropdown-item" href="page-company-contact.html">
                      Contact
                    </a>
                    <a className="dropdown-item" href="page-company-terms.html">
                      Terms
                    </a>
                    <div className="dropdown-divider border-0"></div>
                    <h6 className="dropdown-header text-primary">Support</h6>
                    <a className="dropdown-item" href="page-help-center.html">
                      Help Center
                    </a>
                    <a
                      className="dropdown-item"
                      href="page-help-knowledgebase.html"
                    >
                      Knowledgebase
                    </a>
                    <a
                      className="dropdown-item"
                      href="page-help-message-center.html"
                    >
                      Message Center
                    </a>
                    <a
                      className="dropdown-item"
                      href="page-help-support-ticket.html"
                    >
                      Support Ticket
                    </a>
                    <div className="dropdown-divider border-0 d-lg-none"></div>
                  </div>
                  <div className="col-lg-6 p-lg-5">
                    <h6 className="dropdown-header text-primary">Careers</h6>
                    <a className="dropdown-item" href="page-careers-overview.html">
                      Careers List
                    </a>
                    <a className="dropdown-item" href="page-careers-listing.html">
                      Position Details
                    </a>
                    <div className="dropdown-divider border-0"></div>
                    <h6 className="dropdown-header text-primary">Blog</h6>
                    <a className="dropdown-item" href="page-blog-overview.html">
                      Overview
                    </a>
                    <a className="dropdown-item" href="page-blog-post.html">
                      Post
                    </a>
                    <a className="dropdown-item" href="page-blog-archive.html">
                      Archive
                    </a>
                    <div className="dropdown-divider border-0"></div>
                    <h6 className="dropdown-header text-primary">Portfolio</h6>
                    <a className="dropdown-item" href="page-portfolio-grid.html">
                      Grid
                    </a>
                    <a
                      className="dropdown-item"
                      href="page-portfolio-large-grid.html"
                    >
                      Large Grid
                    </a>
                    <a className="dropdown-item" href="page-portfolio-masonry.html">
                      Masonry
                    </a>
                    <a
                      className="dropdown-item"
                      href="page-portfolio-case-study.html"
                    >
                      Case Study
                    </a>
                    <a className="dropdown-item" href="page-portfolio-project.html">
                      Project
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown no-caret">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownDocs"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Documentation<i className="fas fa-chevron-right dropdown-arrow"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                aria-labelledby="navbarDropdownDocs"
              >
                <a
                  className="dropdown-item py-3"
                  href="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart"
                  target="_blank"
                >
                  <div className="icon-stack bg-primary-soft text-primary mr-4">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <div>
                    <div className="small text-gray-500">Documentation</div>
                    Usage instructions and reference
                  </div>
                </a>
                <div className="dropdown-divider m-0"></div>
                <a
                  className="dropdown-item py-3"
                  href="https://docs.startbootstrap.com/sb-ui-kit-pro/components"
                  target="_blank"
                >
                  <div className="icon-stack bg-primary-soft text-primary mr-4">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <div className="small text-gray-500">Components</div>
                    Code snippets and reference
                  </div>
                </a>
                <div className="dropdown-divider m-0"></div>
                <a
                  className="dropdown-item py-3"
                  href="https://docs.startbootstrap.com/sb-ui-kit-pro/changelog"
                  target="_blank"
                >
                  <div className="icon-stack bg-primary-soft text-primary mr-4">
                    <i className="fas fa-file"></i>
                  </div>
                  <div>
                    <div className="small text-gray-500">Changelog</div>
                    Updates and changes
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <a
            className="btn-teal btn rounded-pill px-4 ml-lg-4"
            href="https://shop.startbootstrap.com/sb-ui-kit-pro"
          >
            Buy Now<i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
