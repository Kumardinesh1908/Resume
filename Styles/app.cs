@font-face {
  font-family: "Agustina";
  src: url(/fonts/Agustina.woff);
}

/*
---------------------------
SCROLLBAR
---------------------------
*/

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #bb86fc;
  border-radius: 10px;
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  max-height: 10px;
  -webkit-box-shadow: inset 0 0 6px #bb86fc;
  background: #bb86fc;
  transition: 0.3s;
}

::-webkit-scrollbar-thumb:hover {
  background: #ca9eff;
}

/*CSS variable declaration for light/dark theme*/

html[data-theme="light"] {
  --bg-mybtn: red;
  --bg-nav: black;
  --bg-nav-img: black;
  --bg-footer: #DDE1EC;
  --bg: #ffffff;
  --text: #191919;
  --text-color: #6c757d;
  --col-icon: black;
  --col-bd-radius: rgb(2, 2, 2);
  --col-box-shadow: #000000 2px 2px 4px, #4D4D4D -2px -2px 4px;
  --col-box-shadow-hover: inset #8a7373 2px 2px 4px, inset #4D4D4D -2px -2px 4px;
  --col-bd-icon: transparent;
  --bg-icon: #fff;
  --col-icon-twitter: #1da1f2;
  --col-icon-linkedin: #0e76a8;
  --col-icon-github: #24292e;
  --col-icon-instagram: rgb(201, 94, 174);
  --col-icon-mail: rgb(209, 82, 82);
  --shadow-col: rgba(0, 0, 0, 0.3);
}

html[data-theme="dark"] {
  --bg-mybtn: rgb(230, 109, 129);
  --bg-nav: #6617cb;
  --bg-nav-img: linear-gradient(315deg, #6617cb 0%, #882463 74%);
  --bg-footer: linear-gradient(315deg, #6617cb 0%, #882463 74%);
  --bg: #191919;
  --text: #ffffff;
  --text-color: #fff;
  --bg-txt-img: linear-gradient(315deg, #d5adc8 0%, #ff8489 74%);
  --txt-fill: transparent;
  --col-icon: white;
  --col-bd-radius: black;
  --col-bd-icon: transparent;
  --col-box-shadow: 5px 5px 10px rgba(22, 21, 21, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.1);
  --col-box-shadow-hover: inset rgba(255, 255, 255, 1) 2px 2px 4px, inset rgba(255, 255, 255, 0.5) -2px -2px 4px;
  --col-icon-twitter: #1da1f2;
  --col-icon-linkedin: #0e76a8;
  --col-icon-github: #24292e;
  --col-icon-instagram: rgb(201, 94, 174);
  --col-white: #fff;
}

html {
  background-color: #f6f6f6;
  transition: background-color .3s;
  scroll-behavior: smooth;
}

html[light-mode="dark"] {
  background-color: #141516;
  color: #ced4e2;
}

/* body */
body {
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
  color: var(--text);
  font-family: "Poppins", sans-serif;
  background-color: var(--bg);
}
