export default function education() {
  return (
    <section className="bg-light py-10">
      <div className="container">
        <div className="text-uppercase-expanded small mb-2">Education</div>
        <hr className="mt-0 mb-5" />
        <div className="row mb-5">
          <div className="col-lg-8">
            <h4 className="mb-0">Nayange Technological University</h4>
            <p className="lead">Bachelor of Engineering</p>
            <p>Information Engineering and Media</p>
          </div>
          <div className="col-lg-4 text-lg-right">
            <div className="text-gray-400 small">Auguest 2017 - May 2021</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-0">Pioneer Junior College</h4>
            <p className="lead">'A' Level</p>
            <p></p>
          </div>
          <div className="col-lg-4 text-lg-right">
            <div className="text-gray-400 small">January 2013 - December 2014</div>
          </div>
        </div>
      </div>
      <div className="svg-border-angled text-white">
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
