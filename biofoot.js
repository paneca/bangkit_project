* {
  box-sizing: border-box;
}

body {
  font-family: “Lato”, sans-serif;
  margin: 0px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.top {
  width: 100%;
  height: 0.5cm;
  float: left;
  padding: 15px;
  background-color: #437070;
}

.headerlogo {
  width: 10%;
  height: 2cm;
  float: left;
  padding-left: 45px;
  background-color: #f2f2f2;
}

.logo {
  width: 85px;
  height: 80px;
}

.navbar {
  float: left;
  width: 80%;
  height: 2cm;
  overflow: hidden;
  background-color: #f2f2f2;
  text-align: center;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: Black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  letter-spacing: 1px;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: Black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #DCDCDC;
}

.dropdown-content {
  width: 250px;
  display: none;
  position: absolute;
  background-color: #f2f2f2;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: Black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #DCDCDC;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.headerstore {
  width: 10%;
  height: 2cm;
  display: block;
  float: left;
  background-color: #f2f2f2;
}

.imgstore {
  padding-top: 15px;
  display: inline-block;
  float: left;
}

.store {
  padding-top: 18px;
  display: inline-block;
  float: left;
  text-decoration: none;
  color: #333333;
}

.store:hover {
  text-decoration: underline;
  color: #000000;
}

.footer1 {
  width: 20%;
  height: 8cm;
  float: left;
  padding-top: 50px;
  background-color: #f2f2f2;
}

.footer2 {
  width: 20%;
  height: 8cm;
  float: left;
  padding-top: 50px;
  background-color: #f2f2f2;
}

.footer3 {
  width: 60%;
  height: 2.5cm;
  float: left;
  padding-top: 50px;
  background-color: #FFF4D2;
}

.footer4-center {
  width: 60%;
  height: 5.5cm;
  float: left;
  padding-top: 5px;
  padding-left: 45px;
  background-color: #f2f2f2;
}

.imgsocial {
  width: 1.5cm;
  height: 1.5cm;
  float: left;
  padding: 15px;
}

.copyrigth {
  font-size: 10px;
  margin: 30px;
}

ul {
  list-style-type: none;
}

li {
  margin: 20px;
}

li.title {
  font-weight: bold;
  margin: 20px;
}

li a {
  text-decoration: none;
  color: #333333;
}

li a:hover {
  text-decoration: underline;
  color: #000000;
}

@media screen and (max-width:800px) {
  .navbar {
    width: 90%;
    height: 1.2cm;
  }

  .navbar a {
    font-size: 10px;
    padding: 2px;
    letter-spacing: 0px;
  }

  .dropdown-content {
    width: 100px;
  }

  .headerlogo {
    /*display:none;*/
    width: 10%;
    height: 1.2cm;
    padding-left: 5px;
  }

  .logo {
    /*display:none;*/
    width: 45px;
    height: 40px;
  }

  .headerstore {
    display:none;
  }

  .store {
    display: none;
  }

  .imgstore {
    display: none;
  }

  li {
    float: left;
    margin: 5px;
    display: inline-block;
    font-size: 10px;
  }

  li.title {
    margin: 5px;
    display: inline-block;
    font-size: 10px;
  }

  .footer1 {
    width: 100%;
    height: 1.3cm;
    padding-top: 0px;
  }

  .footer2 {
    width: 100%;
    height: 1.3cm;
    padding-top: 0px;
  }

  .footer3 {
    width: 22%;
    height: 1.3cm;
    padding-top: 0px;
  }

  .footer4-center {
    width: 78%;
    height: 1.3cm;
    padding-top: 4px;
    padding-left: 0px;
  }

  .copyrigth {
    display: none;
  }

  .imgsocial {
    width: 1.2cm;
    height: 1.2cm;
  }
}
