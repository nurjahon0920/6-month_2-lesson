import { useState } from "react";
import sec1_bg from "./assets/sec1/sec1-bg.png";
import telefon_icon from "./assets/sec1/telefon-icon.svg";
import sec2_img1 from "./assets/sec2/sec2-img1.png";
import sec2_img2 from "./assets/sec2/sec2-img2.png";
import sec2_img3 from "./assets/sec2/sec2-img3.png";
import sec3_img1 from "./assets/sec3/sec3-img1.png";
import sec3_img2 from "./assets/sec3/sec3-img2.png";
import sec3_img3 from "./assets/sec3/sec3-img3.png";
import sec4_bg from "./assets/sec4/sec4-bg.png";
import sec5_img1 from "./assets/sec5/sec5-img1.png";
import sec5_img2 from "./assets/sec5/sec5-img2.png";
import shakl1 from "./assets/sec5/shakl.svg";
import shakl2 from "./assets/sec7/shakl.png";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  const formSubmit = () => {
    document.forms["myForm"].submit();
  };
  return (
    <>
      {/* <Header /> */}
      <header>
        <div className="container">
          <div className="header-left">
            <img src="LOGO.png" alt="LOGO" />
            <div className="header-links">
              <a href="#">Home</a>
              <a href="#About">About</a>
              <a href="#Services">Services</a>
              <a href="#Articles">Articles</a>
              <a href="#Contact">Contact</a>
            </div>
          </div>
          <div className="header-right">
            <p onClick={() => setCount(count + 1)}>Cart ({count})</p>
            <button className="global_btn">Get a free quote</button>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <section className="sec1">
            <div className="sec1-left">
              <h2>Quality cleaning for your home</h2>
              <p className="sec1-left-p">
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="sec1-bottom">
                <button className="global_btn">Get a free quote</button>
                <div className="call_us_now">
                  <img src={telefon_icon} alt="Phone Icon" />
                  <div className="call_right">
                    <p>Call us now</p>
                    <h4>(414) 567 - 2109</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec1-right">
              <img src={sec1_bg} alt="Background" />
            </div>
          </section>
          <section className="sec2" id="About">
            <h2>About Us</h2>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <div className="cards">
              <div className="card">
                <img src={sec2_img1} alt="Schedule online" />
                <h4>1. Schedule online</h4>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="card">
                <img src={sec2_img2} alt="Pay online easily" />
                <h4>2. Pay online easily</h4>
                <p>
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
              <div className="card">
                <img src={sec2_img3} alt="Get your house cleaned" />
                <h4>3. Get your house cleaned</h4>
                <p>
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
            <button className="global_btn">Get a free quote</button>
            <button className="global_btn2">Explore services</button>
          </section>
          <section className="sec3" id="Services">
            <div className="sec3-top">
              <h2>Our Services</h2>
              <button className="global_btn2">Explore services</button>
            </div>
            <div className="cards">
              <div className="card">
                <img src={sec3_img1} alt="House cleaning" />
                <h5>House cleaning</h5>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="card">
                <img src={sec3_img2} alt="Office cleaning" />
                <h5>Office cleaning</h5>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="card">
                <img src={sec3_img3} alt="Industrial cleaning" />
                <h5>Industrial cleaning</h5>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </section>
          <section className="sec4">
            <img src={sec4_bg} alt="Background" className="sec4_img" />
            <div className="sec4-text">
              <h5>Covid-19 sanitization</h5>
              <h2>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h2>
              <p className="sec4_p">
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="sec1-bottom">
                <button className="global_btn">Get a free quote</button>
                <div className="call_us_now">
                  <img src={telefon_icon} alt="Phone Icon" />
                  <div className="call_right">
                    <p>Call us now</p>
                    <h4>(414) 567 - 2109</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="line"></div>
          <section className="sec5" id="Articles">
            <div className="sec5_top">
              <h2>Articles & resources</h2>
              <div className="sec5_top_right">
                <button className="global_btn">Get a free quote</button>
                <button className="global_btn2">Browse articles</button>
              </div>
            </div>
            <div className="cards">
              <div className="card" id="card1">
                <img
                  src={sec5_img1}
                  alt="Vacuum cleaner"
                  className="card_img"
                />
                <div className="sec5_content sec5_content1">
                  <h3>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="sec5_bottom">
                    <h4>Jan 28, 2022</h4>
                    <img src={shakl1} alt="Icon" />
                  </div>
                </div>
              </div>
              <div className="card" id="card2">
                <img
                  src={sec5_img2}
                  alt="Disinfecting phone"
                  className="card_img"
                />
                <div className="sec5_content sec5_content2">
                  <h3>
                    How to properly disinfect your phone and other electronics
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="sec5_bottom">
                    <h4>Feb 1, 2022</h4>
                    <img src={shakl1} alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec6" id="Contact">
            <div className="sec6_left">
              <h2>Contact Us</h2>
              <p className="sec6_p">
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>
              <div className="call_us_now">
                <img src={telefon_icon} alt="Phone Icon" />
                <div className="call_right">
                  <p>Call us now</p>
                  <h4>(414) 567 - 2109</h4>
                </div>
              </div>
              <div className="line"></div>
              <h3>Not convinced yet?</h3>
              <p className="sec6-bottom-p">
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button className="global_btn2">Browse our packages</button>
            </div>
            <div className="sec6_right">
              <form>
                <div className="fname form_div">
                  <label htmlFor="fname">Full name</label>
                  <input type="text" id="fname" name="fname" className="name" />
                </div>
                <div className="lname form_div">
                  <label htmlFor="lname">Phone number</label>
                  <input type="text" id="lname" name="lname" className="name" />
                </div>
                <div className="Address form_div">
                  <label htmlFor="Address">Address</label>
                  <input
                    type="text"
                    id="Address"
                    name="Address"
                    className="name"
                  />
                </div>
                <div className="Email form_div">
                  <label htmlFor="Email">Email</label>
                  <input type="text" id="Email" name="lname" className="name" />
                </div>
                <div className="service form_div">
                  <label htmlFor="service">Requested service</label>
                  <input
                    type="text"
                    id="service"
                    name="fname"
                    className="name"
                  />
                </div>
                <div className="dservice form_div">
                  <label htmlFor="dservice">Day of service</label>
                  <input
                    type="text"
                    id="dservice"
                    name="lname"
                    className="name"
                  />
                </div>
                <div className="note form_div add_note">
                  <label htmlFor="note">Add a note</label>
                  <input type="text" id="note" name="lname" className="name" />
                </div>
                <input
                  type="button"
                  value="Submit message"
                  className="submit"
                />
              </form>
            </div>
          </section>
          <section className="sec7">
            <div className="sec7_group1">
              <h2>Quality cleaning for your home</h2>
              <p>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <img src={shakl2} alt="shakl" />
            </div>
            <div className="sec7_group2">
              <h3>Contact us</h3>
              <p className="p1">
                1827 Nickel Road, Los Angeles, CA, 90017, United States
              </p>
              <p className="p2">(414) 567 - 2109</p>
              <p className="p2">contact@cleaning.com</p>
            </div>
            <div className="sec7_group3">
              <h3>Hours</h3>
              <h4>Monday to Friday</h4>
              <p>6:00 AM - 9:00 PM</p>
              <h4>Saturday & Sunday</h4>
              <p>8:00 AM - 8:00 PM</p>
            </div>
            <div className="sec7_group4">
              <h3>Get a free estimate</h3>
              <h2>(414) 567 - 2109</h2>
              <p>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <button className="global_btn">Request a free quote</button>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="line"></div>
        <div className="container">
          <img src="LOGO.png" alt="LOGO" />
          <div className="footer_right">
            <p>Copyright © Cleaning X | Designed by</p>
            <a href="#" className="footer_a1">
              BRIX Templates
            </a>
            <a href="#" className="footer_a2">
              Webflow
            </a>
            <a href="#" className="footer_a3">
              Licenses
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
