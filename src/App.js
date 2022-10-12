// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css"; //important for fontawsome icon

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Ahmed Projects
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#carouselExampleControls">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* the id is important to make it a path for any button in the href for examle the carosel arrow  */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Earthquake Detection And Warining System</h1>
                  <p>
                    <b>Final Year Project</b>
                    <br />
                    2021-2022
                    <br />
                  </p>
                  <p>
                    <a className="btn btn-lg btn btn-ligh" href="#FirstProject">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>National Covid Tracker.</h1>
                  <p>2020-2021</p>
                  <p>
                    <a
                      className="btn btn-lg btn btn-ligh"
                      href="#SecondProject"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Weather Applcation.</h1>
                  <p>Personal Project 2022</p>
                  <p>
                    <a className="btn btn-lg btn btn-ligh" href="#thirdProject">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel" // setting the carsoul to myCarousel id because this is the id of the main div
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="/earthquake (1).png" // even if the logo inside a public folder, no need to put the whole path, react will know.
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              ></img>

              <h2 className="fw-normal">
                Earthquake Detection And
                <br />
                Warining System
                <br />
              </h2>
              <p>
                It's an IoT device that senses earthquake magnitude and notifies
                users via a mobile application.
              </p>
              <p>
                <a className="btn btn-secondary" href="#FirstProject">
                  Learn More &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="/covid-19.png" // even if the logo inside a public folder, no need to put the whole path, react will know.
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              ></img>
              <h2 className="fw-normal">National Covid Tracker</h2>
              <p>
                It's an IoT device that monitors the user's body temperature
                without the need for human interaction.
              </p>
              <p>
                <a className="btn btn-secondary" href="#SecondProject">
                  Learn More &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="/cloudy.png" // even if the logo inside a public folder, no need to put the whole path, react will know.
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              ></img>

              <h2 className="fw-normal">Weather Applcation</h2>
              <p>
                Its weather web interface that allows users to input any city
                name and show the weather results.
              </p>
              <p>
                <a className="btn btn-secondary" href="#thirdProject">
                  Learn More &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div id="FirstProject" className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Earthquake Detection And Warining System.{" "}
                <span className="text-muted">Final Year Project.</span>
              </h2>

              <p>
                <li className="lead">
                  I implemented and designed a system that can notify users in
                  case of an earthquake.
                </li>
                <li className="lead">
                  A mobile application is made to guide and assist users in
                  safer areas during earthquakes.
                </li>
                <li className="lead">
                  A design is made for earthquake detection systems using a PCB
                  board.
                </li>
              </p>
              <ul>
                {" "}
                <b>Sensors:</b> Accelerometer (ADXL345), GPS (NEO-6M){" "}
              </ul>
              <ul>
                <b>Actuators:</b> LCD, Buzzer, and LED
              </ul>
              <ul>
                <b>Programing Languges:</b> C++, Python, Dart
              </ul>
            </div>

            <div className="col-md-5 order-md-1 ">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="./overviewFypSystem.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="./hardware.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="./mobile.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>
                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="./pcb.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div id="SecondProject" className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                National Covid Treacker{" "}
                <span className="text-muted">Capstone Project</span>
              </h2>
              <p>
                <li className="lead">
                  Developing and designing a system based on human temperatures.
                </li>
                <li className="lead">
                  The system can detect all of the temperatures from all of the
                  users who have registered through the phone app that has been
                  created and store their data on the cloud.
                </li>
                <li className="lead">
                  Build a fully functional physical prototype.
                </li>
              </p>
              <ul>
                {" "}
                <b>Sensors:</b> Body Temperature Sensor (MLX90614 ), Ultra sonic
                sensor (HC-SR04), QR Scanner{" "}
              </ul>
              <ul>
                <b>Actuators:</b> Motor, and LED
              </ul>
              <ul>
                <b>Programing Languges:</b> C++, Java
              </ul>
            </div>

            <div className="col-md-5 order-md-1">
              <div
                id="carouselThirdControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="NCT Registration app.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="mobilePhoneScrean.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="overviewSesnsorNCTCapstone.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="overviewAccuaterNCTCapstone.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="Overview.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="HardwareNCT.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="REDHardwareNCT.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      src="GreenHardwareNCT.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselThirdControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon "
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselThirdControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div id="thirdProject" className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Weather Applcation. <span className="text-muted"></span>
              </h2>
              <p>
                <li className="lead">
                  Using React to fitch the openWeather API
                </li>
                <li className="lead">
                  Dealing with JSON format to desplay and get the weather data.
                </li>
                <li className="lead">
                  POST and GET requests are used for the user input.
                </li>
              </p>
              <ul>
                <b>Programing Languges:</b> HTML, CSS, JavaScript.
              </ul>
            </div>
            <div className="col-md-5">
              <div
                id="carouselLastControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      src="weatherHot.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      src="watherCold.png"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselLastControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselLastControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="featurette-divider"></hr>
        </div>

        <footer id="contact" className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>&copy; 2022 Ahmed Projects. </p>
        </footer>
      </main>
    </div>
  );
}
<script
  src="/docs/5.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
  crossorigin="anonymous"
></script>;

export default App;
