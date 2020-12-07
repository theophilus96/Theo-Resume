export default function contact() {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="text-uppercase-expanded small mb-2">Contact</div>
        <hr className="mt-0 mb-5" />
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h3>Theophilus Kwek</h3>
            <p className="lead mb-0">+(65) 9684-4796</p>
            <a href="#!">theo0007@e.ntu.edu.sg</a>
          </div>
          <div className="col-lg-4 text-lg-right">
            <a
              className="btn btn-marketing btn-teal rounded-pill"
              href="/pdf/Theophilus-resume.pdf"
              download
            >
              <i className="fas fa-file-pdf mr-2"></i>Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="svg-border-angled text-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>
    </section>
  );
}
