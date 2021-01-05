import React from 'react';
import $ from "jquery";

import JumpStart from "../../../assets/img/img/logos/jumpstart.svg";

import IconMenu from "../../../assets/img/img/icons/interface/icon-menu.svg";

import Iconx from "../../../assets/img/img/icons/interface/icon-x.svg";

import Mobileapp1 from "../../../assets/img/img/mobile-app/mobile-app-1.png";

import Kyan from "../../../assets/img/img/logos/brand/kyan.svg";

import Goldline from "../../../assets/img/img/logos/brand/goldline.svg";

import Aven from "../../../assets/img/img/logos/brand/aven.svg";

import Hero2 from "../../../assets/img/img/heros/hero-2.jpg";

import Mediaplay from "../../../assets/img/img/icons/interface/icon-media-play.svg";

import Iconcheck from "../../../assets/img/img/icons/interface/icon-check.svg";

import Bookmark from "../../../assets/img/img/icons/theme/general/bookmark.svg";

import Select from "../../../assets/img/img/icons/theme/design/select.svg";

import Mobileapp3 from "../../../assets/img/img/mobile-app/mobile-app-3.png";


import Female4 from "../../../assets/img/img/avatars/female-4.jpg";
import Female3 from "../../../assets/img/img/avatars/female-3.jpg";

import Male2 from "../../../assets/img/img/avatars/male-2.jpg";

import Mobileapp4 from "../../../assets/img/img/mobile-app/mobile-app-4.png";

import Layers from "../../../assets/img/img/icons/theme/design/layers.svg";

import Display1 from "../../../assets/img/img/icons/theme/devices/display-1.svg";

import folder from "../../../assets/img/img/icons/theme/devices/android.svg";

import Mobileapp2 from "../../../assets/img/img/mobile-app/mobile-app-2.png";

import Onepaylogo from "../../../assets/logo.png";

import Img4 from "../../../assets/img4.jpeg";

import Spemai from "../../../assets/spemai.png"

import SpemaiLogo from "../../../assets/spemaiLogo1.png"

import firstImage from "../../../assets/img/img/mobile-app/firstImage.png";

import secondImage from "../../../assets/img/img/mobile-app/secondImage.png";

import thirdImage from "../../../assets/img/img/mobile-app/thirdImage.png";

import fourthImage from "../../../assets/img/img/mobile-app/fourthImage.png";

import fifthImage from "../../../assets/img/img/mobile-app/fifthImage.png";

import sixthImage from "../../../assets/img/img/mobile-app/sixthImage.png";

import CEO from "../../../assets/evnt1.jpg";

import productivity from "../../../assets/productivity.png";

import organize from "../../../assets/organize.png";

class HomePage extends React.Component {

    constructor(props){
        super(props);
    }

    render() { 

            
        
        return(

            <div >







{/* <div className="loader">
      <div className="loading-animation"></div>
    </div> */}
   
    <div className="navbar-container bg-light">
      <nav className="navbar navbar-expand-lg navbar-light" data-sticky="top">
        <div className="container">
          <a className="navbar-brand navbar-brand-dynamic-color fade-page" href="index.html">
            <img alt="Jumpstart" src={Onepaylogo} height="100px" width="200px" alt="JumpStart"></img>
          </a>
          <div className="d-flex align-items-center order-lg-3">
            <a href="#/register" className="btn1 btn-primary1 ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3">Register As Merchant</a>
            <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target=".navbar-collapse" data-toggle="collapse" type="button">
              <img alt="Navbar Toggler Open Icon" className="navbar-toggler-open icon icon-sm" src={IconMenu}></img>
              <img alt="Navbar Toggler Close Icon" className="navbar-toggler-close icon icon-sm" src={Iconx}></img>
            </button>
          </div>
          <div className="collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end" id="navigation-menu">
            <ul className="navbar-nav my-3 my-lg-0">
              <li className="nav-item">
                <div className="dropdown">
                  <a aria-expanded="false" href="/#/register" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" role="button">Register</a>
                  {/* <div className="row dropdown-menu">
                    <div className="col-auto" data-dropdown-content>
                      <div className="dropdown-grid-menu"><a href="index.html" className="dropdown-item fade-page">Overview</a><a href="landing-1.html" className="dropdown-item fade-page">Landing 1</a><a href="landing-2.html" className="dropdown-item fade-page">Landing 2</a><a href="landing-3.html"
                        className="dropdown-item fade-page">Landing 3</a><a href="landing-4.html" className="dropdown-item fade-page">Landing 4</a><a href="landing-5.html" className="dropdown-item fade-page">Landing 5</a><a href="landing-6.html" className="dropdown-item fade-page">Landing 6</a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </li>

                      <li className="nav-item">
                <div className="dropdown">
                  <a aria-expanded="false" href="http://merchant-uat.onepay.lk.s3-website-ap-southeast-1.amazonaws.com/#/login" target="_blank" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" role="button">Login</a>
                  {/* <div className="row dropdown-menu">
                    <div className="col-auto" data-dropdown-content>
                      <div className="dropdown-grid-menu"><a href="index.html" className="dropdown-item fade-page">Overview</a><a href="landing-1.html" className="dropdown-item fade-page">Landing 1</a><a href="landing-2.html" className="dropdown-item fade-page">Landing 2</a><a href="landing-3.html"
                        className="dropdown-item fade-page">Landing 3</a><a href="landing-4.html" className="dropdown-item fade-page">Landing 4</a><a href="landing-5.html" className="dropdown-item fade-page">Landing 5</a><a href="landing-6.html" className="dropdown-item fade-page">Landing 6</a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </li>

              {/* <li className="nav-item">
                <div className="dropdown">
                  <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" href="/#/scan" role="button">Scan QR</a>
         
                </div>
              </li> */}
              {/* <li className="nav-item">
                <div className="dropdown">
                  <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" href="#" role="button">Features</a>
                  <div className="row dropdown-menu">
                    <div className="col-auto" data-dropdown-content>
                      <div className="dropdown-grid-menu"><a href="style-guide.html" className="dropdown-item fade-page">Style Guide</a><a href="plugins.html" className="dropdown-item fade-page">Plugins</a><a href="navigation-bars.html" className="dropdown-item fade-page">Navigation Bars</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" href="#" role="button">Support</a>
                  <div className="row dropdown-menu">
                    <div className="col-auto" data-dropdown-content>
                      <div className="dropdown-grid-menu"><a href="documentation/index.html" className="dropdown-item" target="_blank">Documentation</a><a href="documentation/changelog.html" className="dropdown-item" target="_blank">Changelog</a><a href="https://mediumrare.ticksy.com/" className="dropdown-item"
                        target="_blank">Get Help</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <section className="bg-light o-hidden pt-5 pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 d-flex flex-column text-center text-lg-left mb-5 mb-lg-0" data-aos="fade-right">
            <div className="pr-xl-5">
              <h3 className="display-33">Register with us and, <mark className="mark1" data-aos="highlight-text" data-aos-delay="250"> view menu in style.</mark></h3>
              <p className="lead">Register with alacartes as a merchant and enjoy the innovation of a digital menu. The modern way to view menu.
              </p>
              {/* <div className="mt-4 mt-lg-5">
                <form data-form-email novalidate action="/forms/mailchimp.php">
                  <div className="d-flex flex-column flex-sm-row form-group">
                    <input className="form-control form-control-lg mr-sm-2 mb-2 mb-sm-0 h-100" name="email" placeholder="Email Address" type="email" required></input>
                    <button className="btn1 btn1-lg btn-primary1 flex-shrink-0 btn-loading" type="submit" data-loading-text="Sending">
                     
                   
                      <span>Notify Me</span>
                    </button>
                  </div>
                  <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE" data-size="invisible" data-badge="bottomleft"></div>
                  <div className="d-none alert alert-success w-100" role="alert" data-success-message>
                    Thanks, a member of our team will be in touch shortly.
                  </div>
                  <div className="d-none alert alert-danger w-100" role="alert" data-error-message>
                    Please fill all fields correctly.
                  </div>
                </form>
            
              </div> */}
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center" data-jarallax-element="-50">
              <div className="col-10 col-sm-8 col-md-7 col-lg-9 col-xl-7" data-aos="zoom-in" data-aos-delay="250">
                <img className="img2 img-fluid" src={firstImage} alt="Screenshot"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-50 h-50 bottom right position-absolute" data-aos="zoom-in" data-aos-delay="500">
        <div className="blob h-100 w-100 bottom right bg-warning opacity-90"></div>
      </div>
      <div className="divider divider-bottom bg-primary-3 mt-5"></div>
    </section>








    <section className="bg-primary-3 text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-lg-0">
            <img src={Spemai} alt="Kyan company logo" className="img1 my-4" ></img>
            <div className="px-xl-4">
              &ldquo;A polished product from a solid performer in the brutal and ever-changing fintech industry.&rdquo;
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <img src={Onepaylogo} height="70px" width="200px" alt="Goldline company logo" className=" opacity-50 my-4" ></img>
            <div className="px-xl-4">
              &ldquo;It's clear that the team spemai have been listening to their customers to provide the best solution.&rdquo;
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <img src={SpemaiLogo} style={{width:"20%"}} alt="Aven company logo" className="img1 my-4"></img>
            <div className="px-xl-4">
              &ldquo;The future is looking bright for this punky young startup. .&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="o-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 mb-5 mb-xl-0" data-aos="fade-right">
            <div className="text-center text-xl-left mb-lg-5">
              <h3 className="h1">
                        Great <mark className="mark1" data-aos="highlight-text" data-aos-delay="250"> features</mark> of alacartes
                    </h3>
            </div>
            <ul className="nav nav-pills justify-content-center flex-xl-column pr-xl-5" role="tablist">
              <li className="nav-item">
                <a className="btn1 btn1-lg btn-primary1 active w-100" id="tab-1" data-toggle="tab" href="#home-6" role="tab" aria-controls="tab-1" aria-selected="true">
                  <div className="d-flex align-items-center">
                    <img src={Layers} alt="Icon" className="icon " ></img>
                    <span>Adaptable Design</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="btn1 btn1-lg btn-primary1 w-100" id="tab-2" data-toggle="tab" href="#profile-6" role="tab" aria-controls="tab-2" aria-selected="false">
                  <div className="d-flex align-items-center">
                    <img src={Display1} alt="Icon" className="icon " ></img>
                    <span>Convinient</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="btn1 btn1-lg btn-primary1 w-100" id="tab-3" data-toggle="tab" href="#contact-6" role="tab" aria-controls="tab-3" aria-selected="false">
                  <div className="d-flex align-items-center">
                    <img src={folder} alt="Icon" className="icon " ></img>
                    <span>Well Organized</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col" data-aos="fade-left" data-aos-delay="250">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home-6" role="tabpanel" aria-labelledby="tab-1">
                <div className="row justify-content-around align-items-center">
                  <div className="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src={secondImage}   alt="Screenshot" className="img2 img-fluid"></img>
                  </div>
                  <div className="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Suits your style</h5>
                    <p>
                      Provide the best possible design to conviniently view the catergories and menu items from your mobile phone and web.
                    </p>
                    <div className="mt-4">
                      <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src={Img4} alt="Ashley Mance avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"></img>
                        <div className="text-dark mb-0">&ldquo;Alacartes is a dream for your company.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile-6" role="tabpanel" aria-labelledby="tab-2">
                <div className="row justify-content-around align-items-center">
                  <div className="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src={thirdImage} alt="Screenshot" style={{height:"300px"}} className="img-fluid"></img>
                  </div>



                  <div className="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Convinient Approach</h5>
                    <p>
                     Alacartes provides convinience for you and your clients to view menu in style. you've just got to do is register as a merchant with us.
                    </p>
                    <div className="mt-4">
                      <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src={productivity} alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"></img>
                        <div className="text-dark mb-0">&ldquo;Alacartes increases productivity.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="contact-6" role="tabpanel" aria-labelledby="tab-3">
                <div className="row justify-content-around align-items-center">
                  <div className="col-8 col-sm-4 col-lg-4 col-xl-5">
                    <img src={fourthImage} alt="Screenshot" className="img-fluid"></img>
                  </div>
                  <div className="col-sm col-md-6 mt-4 mt-sm-0">
                    <h5>Everything you would want</h5>
                    <p>
                     Alacartes is well organized and it simply has everything what you want. Feedbacks from your client, menu info and also with a cart system.
                    </p>
                    <div className="mt-4">
                      <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left bg-secondary">
                        <img src={organize} alt="Mary Goddard avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"></img>
                        <div className="text-dark mb-0">&ldquo;Top notch support on-call? Yes please.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>






    
    <section className="p-0 bg-primary1 row no-gutters o-hidden">
      <div className="col-lg-5 col-xl-6 d-flex align-items-center justify-content-center">
        <a data-fancybox href="https://www.youtube.com/watch?v=t2WPHi1dneY#t=0.26s" className="btn1 btn1-lg btn-light rounded-circle position-absolute" data-aos="zoom-in" data-aos-delay="400">
          <img src={Mediaplay} alt="Media Play Icon"></img>
        </a>
        <img src={fifthImage} alt="Image" className="w-100 h-100"></img>
        <div className="divider divider-side bg-primary1 d-none d-lg-block"></div>
      </div>
      <div className="col-lg-7 col-xl-6">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-md-10 col-xl-9">
                <div className="text-white text-center text-lg-left">
                  <h3 className="h1">You can scan QR to load menu</h3>
                  <p className="lead">
                   Clients can simply scan the QR code which is placed at your company, restaurant or hotel to load menu.
                  </p>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start mt-4 mt-md-5">
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src={Iconcheck} alt="Binoculars icon" className="m-2 icon icon-xs bg-success"></img>
                      </div>
                      <h6 className="mb-0 ml-3" style={{color:"black"}}>Fully Responsive digital menu</h6>
                    </div>
                  </div>
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src={Iconcheck} alt="Layouts icon" className="m-2 icon icon-xs bg-success" ></img>
                      </div>
                      <h6 className="mb-0 ml-3" style={{color:"black"}}>Feedback Facility</h6>
                    </div>
                  </div>
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src={Iconcheck} alt="Box icon" className="m-2 icon icon-xs bg-success" ></img>
                      </div>
                      <h6 className="mb-0 ml-3" style={{color:"black"}}>Item Info</h6>
                    </div>
                  </div>
                  <div className="mx-2 ml-sm-0 ml-sm-0 mb-2 bg-white rounded p-2 pr-3 p-md-3 pr-md-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <img src={Iconcheck} alt="Lightning icon" className="m-2 icon icon-xs bg-success" ></img>
                      </div>
                      <h6 className="mb-0 ml-3" style={{color:"black"}}>Cart System</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    
    <section className="o-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-around flex-lg-row-reverse">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pl-lg-5 pl-xl-0">
            <div data-aos="fade-in" data-aos-offset="250">
              <h2 className="h1 text-center text-lg-left">Here's how we do things differently</h2>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <div className="my-4" data-aos="fade-left" data-aos-delay="100">
                  <div className="d-flex">
                    <div className="mr-3 mr-md-4">
                      <img src={Bookmark} alt="Bookmark icon" className="icon " ></img>
                    </div>
                    <div>
                      <h5>Well Structured</h5>
                      <div>
                       Alacartes is well structured to cater the needs of a didgital menu along with a possible way of tracking customer satisfactions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4" data-aos="fade-left" data-aos-delay="200">
                  <div className="d-flex">
                    <div className="mr-3 mr-md-4">
                      <img src={Select} alt="Selection interface icon" className="icon "></img>
                    </div>
                    <div>
                      <h5>Highly Customizable</h5>
                      <div>
                   Alacartes is highly customizable; simply you have the ability of managing a personalized digital menu for your own company, hotel or restaurant.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg col-xl-7">
            <div className="row justify-content-center" data-jarallax-element="-50">
              <div className="col-10 col-sm-8 col-md-6 col-lg-8 col-xl-6" data-aos="zoom-in" data-aos-delay="250">
                <img className="img-fluid position-relative" style={{height:"300px",width:"600px"}} src={sixthImage} alt="Screenshot"></img>
                <div className="h-75 w-75 position-absolute bottom right d-none d-lg-block" data-jarallax-element="-50">
                  <div className="blob blob-4 w-100 h-100 bg-success opacity-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-light pb-0">
      <div className="container">
        <div className="row section-title justify-content-center text-center">
          <div className="col-md-9 col-lg-8 col-xl-7">
            <h3 className="display-4">People are diggin’ it</h3>
            {/* <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div> */}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {/* <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src={Female4} alt="Shelley McNabb avatar image" className="avatar avatar-lg mb-3 mb-md-4"></img>
            <blockquote className="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;<mark data-aos="highlight-text" className="mark1" data-aos-delay="200">We cut our build times in half</mark> compared to our previous process. Love it.&rdquo;
                </blockquote>
            <div className="d-flex flex-column align-items-center">
              <h6 className="mb-1">Shelley McNabb</h6>
              <span>Software Engineer</span>
            </div>
          </div> */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src={CEO} alt="Mary Goddard avatar image" className="avatar avatar-lg mb-3 mb-md-4"></img>
            <blockquote className="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;We're one strong and highly enthusiastic team working to make lives easier.&rdquo;
                </blockquote>
            <div className="d-flex flex-column align-items-center">
              <h6 className="mb-1">Mr. Amila Fernando</h6>
              <span>Chief Executive Officer</span>
            </div>
          </div>
          {/* <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src={Male2} alt="Bradley Singleton avatar image" className="avatar avatar-lg mb-3 mb-md-4"></img>
            <blockquote className="blockquote p-0 border-0 text-body pr-xl-4">
                    &ldquo;Reliability is what Jumpstart is known for, and <mark className="mark1" data-aos='highlight-text' data-aos-delay='200'>they've totally delivered</mark> this time.&rdquo;
                </blockquote>
            <div className="d-flex flex-column align-items-center">
              <h6 className="mb-1">Bradley Singleton</h6>
              <span>Keeper of Tunes</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="divider divider-bottom bg-white"></div>
    </section>




    
    <section className="o-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-around text-center text-lg-left">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pr-lg-5 pr-xl-0 order-lg-2">
            <div>
              <h2 className="display-4">You can grab it right now</h2>
              <p className="lead">Do not wait! Come join with us an enjoy the innovative experience.</p>
              <div className="d-flex flex-column flex-sm-row mt-4 mt-md-5 justify-content-center justify-content-lg-start">
            
              </div>
            </div>
          </div>
          <div className="col-lg order-lg-1">
            <div className="row justify-content-center" data-jarallax-element="-50">
              <div className="col-10 col-sm-8 col-md-6 col-lg-8 col-xl-6">
                <img className="img2 img-fluid position-relative" src={firstImage} alt="Screenshot"></img>
                <div className="h-50 w-50 position-absolute bottom left d-none d-lg-block" data-jarallax-element="-50">
                  <div className="blob blob-2 w-100 h-100 bg-primary-2 opacity-90 top right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-primary-3 text-white links-white pb-4 footer-1">
      <div className="container">
        <div className="row">
          {/* <div className="col-xl-auto mr-xl-5 col-md-3 mb-4 mb-md-0">
            <h5>Demos</h5>
            <ul className="nav flex-row flex-md-column">
              <li className="nav-item mr-3 mr-md-0">
                <a href="landing-1.html" className="nav-link fade-page px-0 py-2">Landing 1</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="landing-2.html" className="nav-link fade-page px-0 py-2">Landing 2</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="landing-3.html" className="nav-link fade-page px-0 py-2">Landing 3</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="landing-4.html" className="nav-link fade-page px-0 py-2">Landing 4</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="landing-5.html" className="nav-link fade-page px-0 py-2">Landing 5</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="landing-6.html" className="nav-link fade-page px-0 py-2">Landing 6</a>
              </li>
            </ul>
          </div> */}
          <div className="col-xl-auto mr-xl-5 col-md-3">
            <h5>Pages</h5>
            <ul className="nav flex-row flex-md-column">
              <li className="nav-item mr-3 mr-md-0">
                <a href="https://spemai.com/" className="nav-link fade-page px-0 py-2">Company</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="https://www.onepay.lk/" className="nav-link fade-page px-0 py-2">Other products</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="https://spemai.com/contact.html" className="nav-link fade-page px-0 py-2">Contact us</a>
              </li>
              {/* <li className="nav-item mr-3 mr-md-0">
                <a href="careers-1.html" className="nav-link fade-page px-0 py-2">Careers</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="case-studies.html" className="nav-link fade-page px-0 py-2">Case Studies</a>
              </li>
              <li className="nav-item mr-3 mr-md-0">
                <a href="pricing-plans.html" className="nav-link fade-page px-0 py-2">Pricing</a>
              </li> */}
            </ul>
          </div>
          <div className="col mt-4 mt-md-0 mt-lg-5 mt-xl-0 order-lg-4 order-xl-3">
            <h5>Vision</h5>
            <ul className="list-unstyled d-flex flex-wrap">
              {/* <li className="col-12 col-lg-6 col-xl-12 px-0">
                <div className="row my-2 my-md-3">
                  <a className="col-5" href="#">
                    <img className="rounded img-fluid hover-fade-out" src={secondImage} alt="blog.1.image"></img>
                  </a>
                  <div className="col">
                    <a className="h6" href="#">Unveiling our new vision for Jumpstart</a>
                    <div className="text-small text-muted mt-2">October 10th</div>
                  </div>
                </div>
              </li> */}
              <li className="col-12 col-lg-6 col-xl-12 px-0">
                <div className="row my-2 my-md-3">
                  <a className="col-5" href="#">
                    <img className="rounded img-fluid hover-fade-out" src={sixthImage} alt="blog.2.image"></img>
                  </a>
                  <div className="col">
                    <a className="h6" href="#">A name you can trust</a>
                    <div className="text-small text-muted mt-2">We provide high quality customer service experience</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="col-lg mt-2 mt-md-5 mt-lg-0 order-lg-3 order-xl-4">
            <h5>Newsletter</h5>
            <div className="card card-body bg-white">
              <p>Get a bi-weekly digest of great articles</p>
              <form data-form-email novalidate action="/forms/mailchimp.php">
                <div className="d-flex flex-column flex-sm-row form-group">
                  <input className="form-control mr-sm-2 mb-2 mb-sm-0 w-auto flex-grow-1" name="email" placeholder="Email Address" type="email" required></input>
                  <button type="submit" className="btn btn-primary btn-loading" data-loading-text="Sending">
               
                    <span>Go</span>
                  </button>
                </div>
                <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE" data-size="invisible" data-badge="bottomleft"></div>
                <div className="d-none alert alert-success w-100" role="alert" data-success-message>
                  Thanks, a member of our team will be in touch shortly.
                </div>
                <div className="d-none alert alert-danger w-100" role="alert" data-error-message>
                  Please fill all fields correctly.
                </div>
                <div className="text-small text-muted">We'll never share your email address</div>
              </form>
            </div>
          </div> */}
          	  <div class="col-lg mt-2 mt-md-5 mt-lg-0 order-lg-3 order-xl-4">
			<div class="f-widget">
			  <h3 class="f-widget-title">Contact Info</h3>
			  <ul class="f-contact-list">
				<li><span>Office:</span> 410/22, Galle Road, Colombo 03</li>
				<li><span>Call Us:</span> +94 11 7 021 540</li>
				<li><span>Email Us:</span> info@spemai.com</li>
			  </ul>

	
			</div>
		  </div>
        </div>
        <div className="row">
          <div className="col">
            <hr></hr>
          </div>
        </div>

      </div>
    </footer>
    {/* <a href="#top" className="btn btn-primary rounded-circle btn-back-to-top" data-smooth-scroll data-aos="fade-up" data-aos-offset="2000" data-aos-mirror="true" data-aos-once="false">
      <img src="assets/img/icons/interface/icon-arrow-up.svg" alt="Icon" className="icon bg-white" data-inject-svg></img>
    </a> */}












            </div>
        );
    }


}
export default HomePage;