// Function to remove preload after load
let loader = document.querySelector(".loader-container");

window.addEventListener("load", () => {
    loader.classList.add("disappear");
});
window.addEventListener("load", () => {
    setTimeout(function () {
        $(".no-scroll-preload").css("overflow", "visible");
    }, 1000);
    $(".loader-container").fadeOut(2500);
})

// Navbar
let header = $(`<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
                <a class="navbar-brand" href="index.html">Dinesh Kumar </a>
                <div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">

                    <div id="js-hamburger" class="hamburger">
                        <span class="first"></span>
                        <span class="second"></span>
                        <span class="third"></span>
                    </div>

                </div>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto" id="navbar-content">
                        <li class="nav-item active nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item active nav-item-hover"><a class="nav-link" href="skills.html">Skills</a></li>
                        <li class="nav-item nav-item-hover"><a class="nav-link" href="projects.html">Projects</a></li>
                        <li class="nav-item active nav-item-hover"><a class="nav-link" href="experience.html">Experience</a></li>
                        <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Education</a></li>
                        <li class="nav-item nav-item-hover"><a class="nav-link" href="#contact">Contact</a></li>
                        <li class="nav-item nav-item-hover"><a class="nav-link" href="/Assests/DineshResume.pdf" download="Dinesh Resume">Resume</a></li>
                        <li class="nav-item">
                            <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode"
                                onclick="toggle_light_mode()">
                        </li>
                    </ul>
                </div>
                </nav>
`);

// Footer
let footer = $(`<footer id="contact">
                      <div class="quote-container">
                          <div class="quotes" style="text-align:center;">
                              <!--SVG code for quote-left icon-->
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                  focusable="false" width="1.5em" height="1.5em"
                                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <path
                                      d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8z"
                                      fill="#fff" fill-rule="evenodd" />
                              </svg>
                          </div>
                          <p class="tag">Develop a passion for learning. If you do, you will never cease to grow.</p>
                      </div>

                      <h1 class="section-heading">
                          <span>
                              <i class="far fa-address-card"></i>
                          </span>
                          <span> Contact </span>
                      </h1>

                      <div id="contact-container">
                          <div id="contact-form-container">
                              <form id="contact-form" action="https://formspree.io/f/xleypqpa" method="POST">
                                  <input id="input-name" name="name" type="text" placeholder="Your Name">
                                  <input id="input-email" name="email" type="text" required placeholder="Your Email">
                                  <textarea id="input-message" name="message" rows="2" cols=40 placeholder="Message"></textarea>
                                  <button class="sub-btn" type="submit">
                                      SEND MESSAGE
                                  </button>
                                  <p id="contact-form-status"></p>
                              </form>
                          </div>

                          <div id="my-details-container">

                              <h3> Get In touch </h3>
                              <p>
                                  I look forward to connecting with you and am happy to discuss any inquiries or
                                  opportunities. Feel free to reach out to me through any of the following methods.
                              </p>
                              <h3> My Address </h3>

                              <div id="address">
                                  <div class="my-details-info-container">
                                      <i class="fas fa-map-marker-alt"></i>
                                      <span>#140/26, Gulabi Bagh, Rewari, Haryana, India</span>
                                  </div>
                                  <div class="my-details-info-container">
                                      <i class="fas fa-mobile-alt"></i>
                                      <span>9980802603</span>
                                  </div>
                                  <div class="my-details-info-container">
                                      <i class="far fa-envelope"></i>
                                      <span>kumardinesh1908@gmail.com</span>
                                  </div>
                              </div>

                          </div>
                      </div>

                      <div class="social-icons">
                          <a class="socialicon twitter" href="https://twitter.com/kumardinesh1908" target="_blank" rel="author">

                              <svg class="twitter-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500"
                                  enable-background="new 0 0 500 500" xml:space="preserve">
                                  <path id="body" fill="#5DA8DC"
                                      d="M142.9,364.1c-1.6,1-3,1.7-4,2.3c-3,1.5-7.9,3.8-14.9,6.9c-7,3.1-14.7,5.7-23.1,7.9
                                                          c-8.4,2.2-15.6,3.8-21.8,4.7c-6.2,0.9-12.2,1.5-18.1,1.8s-11.4,0.3-16.7,0c-5.2-0.3-8.5-0.5-9.6-0.6l-1.8-0.2l-0.4-0.1l-0.4-0.1v0.8
                                                          h0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H33l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l3.6,2.2c2.4,1.5,4.5,2.6,6.4,3.6
                                                          s6.6,3.3,14.1,7.1c7.6,3.7,16.6,7.4,27.2,11.1s18.6,6.2,24,7.4c5.4,1.3,12.8,2.6,22.2,3.9s14.9,2.1,16.3,2.2
                                                          c1.5,0.1,3.3,0.3,5.5,0.4l3.3,0.2v0.2h25.6v-0.2l14-1.3c9.3-0.9,17.6-2.1,25-3.3c7.3-1.3,14.9-3.1,22.8-5.5
                                                          c7.9-2.4,15.3-4.9,22.4-7.7c7.1-2.8,13.7-5.7,19.7-9c6.1-3.2,11.3-6,15.6-8.5c4.3-2.5,9.1-5.6,14.2-9.3c5.2-3.7,10-7.5,14.6-11.2
                                                          s7.1-5.9,7.7-6.4c0.6-0.6,4-4,10.2-10.2c6.2-6.3,11.3-11.9,15.4-16.8c4-5,8-10.3,12-15.9c3.9-5.6,8.3-12.5,13-20.6
                                                          s9.2-17.3,13.5-27.5s8-20.7,11-31.5c3-10.7,5.2-20.4,6.7-28.9s2.4-16.5,3-23.8c0.5-7.3,0.8-13.9,0.9-19.7s2.5-10.8,7.4-14.8
                                                          s9.9-8.5,15-13.7c5.1-5.1,7.9-8,8.3-8.7c0.5-0.7,0.9-1.1,1.1-1.2c0.3-0.1,2.1-2.3,5.3-6.7c3.3-4.4,5-6.6,5-6.7l0.1-0.1l0.2-0.4
                                                          l0.2-0.4l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.2-0.1l0.2-0.1V115l-1,0.3l-0.8,0.1
                                                          l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.4,0.2l-0.6,0.2l-1.2,0.4l-10.6,3.6c-6.7,2.2-13.7,4.1-21,5.7l-11,2.4h-1.9l0.1-0.1l0.1-0.1l0.1-0.1
                                                          l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l0.1-0.1l0.1-0.1l0.1-0.1l0.1-0.1l0.4-0.2l0.4-0.2l1.9-1.3
                                                          c1.3-0.9,2.4-1.8,3.3-2.8s2.8-2.7,5.6-5.1c2.8-2.4,6-6,9.5-10.7s6.5-9.4,8.8-14s3.6-7.2,3.7-7.9c0.1-0.6,0.3-1.2,0.4-1.6l0.2-0.6
                                                          l0.2-0.4l0.2-0.4l0.2-0.6l0.2-0.6l0.1-0.6l0.1-0.6l-0.4,0.1l-0.4,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.1,0.1l-0.4,0.2l-0.4,0.2
                                                          l-0.4,0.2l-0.4,0.2l-0.1,0.1c-0.1,0.1-0.8,0.4-1.9,1.2c-1.2,0.7-4.7,2.4-10.5,5s-11.6,5-17.5,7.1s-11.4,3.7-16.5,4.9
                                                          s-8.8,0.5-11.3-1.9c-2.4-2.4-5.2-4.7-8.3-6.9c-3.1-2.2-6.5-4.3-10.4-6.4c-3.8-2.1-7.7-3.9-11.8-5.5c-4-1.6-8.6-2.9-13.5-3.8
                                                          l-7.4-1.5h-20.5v0.1c0,0.1-1.7,0.4-5.1,0.9s-7.6,1.6-12.6,3.3c-5,1.7-10.4,4.2-16.3,7.4c-5.9,3.3-11.1,7-15.7,11.2
                                                          s-8.3,8.3-11.2,12.2c-2.9,3.9-5.2,7.4-7,10.5C221.5,163.3,231.3,307,142.9,364.1z" />
                                  <path id="wing1" fill="#5DA8DC"
                                      d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                                                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                                                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                                                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                                                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                                                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                                                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                                                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                                                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                                                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                                                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                                                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                                                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                                                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
                                  <path id="wing2" fill="#5DA8DC"
                                      d="M233.2,181.5c-5-0.5-12.4-1.7-22.2-3.6c-9.8-1.8-16.8-3.3-20.8-4.5s-11.1-3.7-21.2-7.4
                                                          c-10.1-3.8-19.5-8-28.3-12.8c-8.8-4.7-16.8-9.5-24-14.4s-13.1-9.1-17.5-12.8c-4.5-3.7-7.1-6-7.9-7s-1.5-1.6-1.9-1.8
                                                          c-0.5-0.2-3.2-2.7-8-7.6s-9.1-9.2-12.6-13.2l-5.3-5.9l-0.1-0.1l-0.1-0.1L63.1,90l-0.2-0.4l-0.1-0.1l-0.1-0.1l-0.1-0.1l-0.1-0.1
                                                          l-0.1-0.1L62.3,89l-0.1-0.1l0,0.1l-0.1,0.1L62,89.2l0,0.1l-0.1,0.1L61.7,90l-0.2,0.6L57.9,98c-2.2,5-3.9,9.7-5.1,14.1
                                                          c-1.2,4.5-1.9,8.5-2.4,12c-0.4,3.5-0.5,7.8-0.4,12.8s0.7,10,1.8,15.1c1,5.1,2.6,10.2,4.6,15.2c2.1,5.1,4,9.2,5.8,12.5
                                                          c1.8,3.2,3.9,6.4,6.3,9.2c2.4,2.9,4.7,5.6,7.1,8.3s4.6,4.7,6.7,6.4c2.2,1.6,3.3,2.5,3.4,2.5l0.1,0.1l0.4,0.2l0.4,0.2l0.1,0.1
                                                          l0.1,0.1l0.1,0.1L87,207l0.4,0.2l0.4,0.2l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1l0.1,0.1H85l-1.8-0.2
                                                          c-1.2-0.1-4.8-0.9-10.8-2.2s-11.1-2.9-15.1-4.7l-6.1-2.8l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.2l-0.4-0.1l-0.4-0.1l0.7,8.3
                                                          c0.4,5.5,1.4,11,2.8,16.3c1.5,5.4,3.6,11,6.5,16.9s6.2,11.1,9.8,15.5c3.7,4.5,7,8.1,10.1,11c3.1,2.8,6.3,5.4,9.8,7.8
                                                          c3.4,2.4,8,4.8,13.8,7.3s9.3,3.9,10.6,4.3c1.3,0.4,2.2,0.6,2.8,0.8l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l0.8,0.2l-0.1,0.1l-0.1,0.1
                                                          l-0.1,0.1l-0.1,0.1l-1,0.2l-1,0.2l-0.8,0.2c-0.5,0.1-1.9,0.4-4.3,0.8s-6.6,0.6-12.8,0.8c-6.2,0.1-10.7,0-13.5-0.4l-4.3-0.6L81,288
                                                          l-0.6-0.1l0.1,0.4l0.1,0.4l0.2,0.6l0.2,0.6l3.2,7.2c2.2,4.8,4.4,9,6.7,12.7c2.3,3.7,5.1,7.2,8.3,10.7c3.2,3.5,5.8,6.2,7.9,8
                                                          c2.1,1.9,5.3,4.3,9.9,7.2c4.6,2.9,9.3,5.4,14.1,7.4c4.9,2.1,9.4,3.7,13.5,4.7c4.2,1,7.3,1.6,9.2,1.8c1.9,0.1,4,0.3,6.1,0.4l3.1,0.2
                                                          c117.9-117.9,82.9-167.7,82.9-167.7l-2.8-0.1C241.6,182.3,238.2,181.9,233.2,181.5z" />
                              </svg>
                          </a>

                          <a class="socialicon linkedin" href="https://www.linkedin.com/in/dinesh-kumar-29a310ab/" target="_blank" rel="author">
                              <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24"
                                  fill="#0e76a8" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                                  class="feather feather-linkedin">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                  <rect x="2" y="9" width="4" height="12"></rect>
                                  <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                          </a>

                          <a class="socialicon instagram" href="https://www.instagram.com/dineshrao1908/" target="_blank" rel="author">
                              <svg class="instagram-icon" x="0px" y="0px" viewBox="0 0 202.5 202.5"
                                  style="enable-background:new 0 0 202.5 202.5;">
                                  <circle id="littleCircle" class="st0" cx="101" cy="101.5" r="18.9" />
                                  <circle id="shutter" class="st0" cx="101" cy="101.5" r="8" />
                                  <circle id="lens" class="st0" cx="125.5" cy="78.6" r="2.9" />
                                  <path id="camera" class="st0"
                                      d="M79,60.5h44c10.5,0,19,8.5,19,19v44c0,10.5-8.5,19-19,19H79c-10.5,0-19-8.5-19-19v-44 C60,69,68.5,60.5,79,60.5z" />
                              </svg>
                          </a>

                          <a class="socialicon github" href="https://github.com/Kumardinesh1908/" target="_blank" rel="author">
                              <svg class="github-icon" width="45px" height="45px" viewBox="0 0 300 300">
                                  <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                                                      c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                                                      C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                                                      c-5,4.7-8.1,11.1-8.6,18" />
                                  <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                                                      c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
                              </svg>
                          </a>
                      </div>
                  </footer>
`);

// upArrow Button
let upArrow = $(`<button id="btnScrollToTop" onclick="scrollToTop()">
                <i class="fas fa-2x fa-angle-up"></i>
                </button>
`);

// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
    bodyElement.append(upArrow);
    $("#btnScrollToTop").css("visibility", "hidden");
});

//function to scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

//function for the "Scroll To Top" button to detect the footer
$(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
        $("#btnScrollToTop").css("visibility", "hidden");
    } else {
        $("#btnScrollToTop").css("visibility", "visible");
    }
});

// function to toggle the light Theme
const htmlElement = document.documentElement;
function toggle_light_mode() {
    const dark_toggler = document.getElementById('dark_toggler');
    if (dark_toggler.checked) {
        htmlElement.setAttribute('light-mode', 'dark');
    } else {
        htmlElement.setAttribute('light-mode', 'light');
    }
}

// function for toggling hamburger(X-button) is-active class
$(function () {
    $("#js-hamburger").on("click", function () {
        $(this).toggleClass("is-active");
    });
});

// function to fetch the location href and update the current nav link design
const currentPath = window.location.pathname;
$(function () {
    $("a.nav-link").each(function () {
        const linkHref = $(this).prop("href");
        if (linkHref.endsWith(currentPath) || (linkHref.endsWith("#contact") && currentPath === "")) {
            $(this).addClass("current-link");
        }
    });
});

//function to remove underline of navlink on hover
$(document).ready(function () {
    $("a.nav-link").hover(
        // Hover in: Remove the "current-link" class
        function () {
            $(this).removeClass("current-link");
        },
        // Hover out: Check if the link's href matches the current URL and add the class back if needed
        function () {
            const linkHref = $(this).prop("href");
            if (linkHref.endsWith(currentPath) || (linkHref.endsWith("#contact") && currentPath === "")) {
                $(this).addClass("current-link");
            }
        }
    );
});

// function to set the lightMode in localStorage
window.addEventListener("storage", function () {
    if (localStorage.lightMode == "light") {
        app.setAttribute("light-mode", "light");
    } else {
        app.setAttribute("light-mode", "dark");
    }
});

// Contact-Form.js
$(document).ready(function () {
    var form = document.getElementById("contact-form");
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("contact-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Message sent successfully!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit);
});