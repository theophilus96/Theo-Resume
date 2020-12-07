export default function footer() {
  return (
    <div id="layoutDefault_footer">
      <footer className="footer pt-10 pb-5 mt-auto bg-dark footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-brand">Theophilus Kwek</div>
              <div className="mb-3">Aspiring Software Developer</div>
              <div className="icon-list-social mb-2">
                <a className="icon-list-social-link" href="javascript:void(0);">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="icon-list-social-link" href="javascript:void(0);">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="icon-list-social-link" href="javascript:void(0);">
                  <i className="fab fa-github"></i>
                </a>
                <a className="icon-list-social-link" href="javascript:void(0);">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Projects
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="https://github.com/theophilus96">Github</a>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Technical
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="javascript:void(0);">Documentation</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Changelog</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Theme Customizer</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">UI Kit</a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Includes
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="javascript:void(0);">Utilities</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Components</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Layouts</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Code Samples</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Products</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Affiliates</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Updates</a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="col-lg-3 col-md-6">
                  <div className="text-uppercase-expanded text-xs mb-4">
                    Legal
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a href="javascript:void(0);">Privacy Policy</a>
                    </li>
                    <li className="mb-2">
                      <a href="javascript:void(0);">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">License</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="row align-items-center">
            <div className="col-md-6 small">
              Copyright &#xA9; Theo's Resume 2020
            </div>
            <div className="col-md-6 text-md-right small">
              <a href="javascript:void(0);">Privacy Policy</a>
              &#xB7;
              <a href="javascript:void(0);">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
