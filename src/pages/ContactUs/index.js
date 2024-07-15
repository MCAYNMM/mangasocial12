import React from "react";
import Slider from "react-slick";
import logo_think_diff_us from "../../components/image/logo_think_diff_us.png";
import services_01 from "../../components/image/services-01.jpg";
import services_02 from "../../components/image/services-02.jpg";
import services_03 from "../../components/image/services-03.jpg";
import services_04 from "../../components/image/services-04.jpg";
import w_246_1 from "../../components/image/246x0w (1).jpg";
import w_246_2 from "../../components/image/246x0w (2).jpg";
import w_246_0 from "../../components/image/246x0w.jpg";
import w_434w_0 from "../../components/image/434x0w.jpg";
import w_434w_1 from "../../components/image/434x0w1.jpg";
import img01 from "../../components/image/img01.jpg";
import img02 from "../../components/image/img02.jpg";
import img03 from "../../components/image/img03.jpg";
import img04 from "../../components/image/img04.jpg";
import img05 from "../../components/image/img05.jpg";
import img06 from "../../components/image/img06.jpg";
import img07 from "../../components/image/img07.jpg";
import img08 from "../../components/image/img08.jpg";
import img09 from "../../components/image/img09.jpg";
import img010 from "../../components/image/img010.jpg";
import img011 from "../../components/image/img011.jpg";
import img012 from "../../components/image/img012.jpg";
import img013 from "../../components/image/img013.jpg";
import img014 from "../../components/image/img014.jpg";
import img015 from "../../components/image/img015.jpg";
import img016 from "../../components/image/img016.jpg";
import img017 from "../../components/image/img017.jpg";
import img018 from "../../components/image/img018.jpg";
import img019 from "../../components/image/img019.jpg";
import img020 from "../../components/image/img020.jpg";
import img021 from "../../components/image/img021.jpg";
import img022 from "../../components/image/img022.jpg";
import img023 from "../../components/image/img023.jpg";
import img024 from "../../components/image/img024.jpg";
import img025 from "../../components/image/img025.jpg";
import img026 from "../../components/image/img026.jpg";
import img027 from "../../components/image/img027.jpg";
import img028 from "../../components/image/img028.jpg";
import img029 from "../../components/image/img029.jpg";
import img030 from "../../components/image/img030.jpg";
import img031 from "../../components/image/img031.jpg";
import img032 from "../../components/image/img032.jpg";
import img033 from "../../components/image/img033.jpg";
import img034 from "../../components/image/img034.jpg";
import img035 from "../../components/image/img035.jpg";
import img036 from "../../components/image/img036.jpg";
import img037 from "../../components/image/img037.jpg";
import img038 from "../../components/image/img038.jpg";
import img039 from "../../components/image/img039.jpg";
import img040 from "../../components/image/img040.jpg";
import img041 from "../../components/image/img041.jpg";
import img042 from "../../components/image/img042.jpg";
import img043 from "../../components/image/img043.jpg";
import img044 from "../../components/image/img044.jpg";
import img045 from "../../components/image/img045.jpg";
import img046 from "../../components/image/img046.jpg";
import img047 from "../../components/image/img047.jpg";
import img048 from "../../components/image/img048.jpg";
import img049 from "../../components/image/img049.jpg";
import img050 from "../../components/image/img050.jpg";
import img051 from "../../components/image/img051.jpg";
import img052 from "../../components/image/img052.jpg";
import img053 from "../../components/image/img053.jpg";
import img054 from "../../components/image/img054.jpg";
import img055 from "../../components/image/img055.jpg";
import img056 from "../../components/image/img056.jpg";
import img057 from "../../components/image/img057.jpg";
import img058 from "../../components/image/img058.jpg";
import left_infos from "../../components/image/left-infos.jpg";
import left_infos_1 from "../../components/image/left-infos1.jpg";
import left_infos_2 from "../../components/image/left-infos2.jpg";
import left_infos_3 from "../../components/image/left-infos3.jpg";
import left_infos_4 from "../../components/image/left-infos4.jpg";
import banner_r2 from "../../components/image/banner-r2.png";
import banner_left from "../../components/image/banner-left.png";
import services_left from "../../components/image/services-left.jpg";
import contact_left from "../../components/image/contact-left.jpg";
import infos_bg from "../../components/image/infos-bg.jpg";
import video_bg from "../../components/image/video-bg.jpg";
import cta_bg from "../../components/image/cta-bg.jpg";
import styled from "styled-components";

export default function AboutCompany() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  const imageData1 = [
    {
      src: w_246_1,
      title: "Prank air horn, fart, clipper",
      description: "Clippers prank & funny sounds",
      link: "https://apps.apple.com/us/app/prank-air-horn-fart-clipper/id1623746709",
    },
    {
      src: w_246_2,
      title: "Manga Reader : Top Manga Here",
      description: "Best App for Manga&Novel Read",
      link: "https://apps.apple.com/us/app/manga-reader-top-manga-here/id1635298030",
    },
    {
      src: w_246_0,
      title: "Face Dance: Photo Animator App",
      description: "Lip Sync, Funny Face Animation",
      link: "https://apps.apple.com/us/app/mimic-ai-photo-face-animator/id1590841930",
    },
    {
      src: w_434w_0,
      title: "Celebrity Voice Changer Parody",
      description: "100+ Voices Live & AI Singing",
      link: "https://apps.apple.com/us/app/celebrity-voice-changer-parody/id1111710488",
    },
    {
      src: w_434w_1,
      title: "Dawn AI - Avatar generator",
      description: "Transform your selfies with AI",
      link: "https://apps.apple.com/us/app/dawn-ai-avatar-generator/id1643890882",
    },
  ];

  const imageData2 = [
    {
      src: img01,
      title: "Workplace",
      link: "#",
    },
    {
      src: img02,
      title: "Workplace",
      link: "#",
    },
    {
      src: img03,
      title: "Workplace",
      link: "#",
    },
    {
      src: img04,
      title: "Friendly Membership",
      link: "#",
    },
    {
      src: img05,
      title: "Workplace",
      link: "#",
    },
    {
      src: img06,
      title: "Friendly Membership",
      link: "#",
    },
    {
      src: img07,
      title: "Friendly Membership",
      link: "#",
    },
    {
      src: img08,
      title: "Workplace",
      link: "#",
    },
    {
      src: img09,
      title: "Friendly Membership",
      link: "#",
    },
    {
      src: img010,
      title: "Workplace",
      link: "#",
    },
    {
      src: img011,
      title: "Workplace",
      link: "#",
    },
    {
      src: img012,
      title: "Workplace",
      link: "#",
    },
    {
      src: img013,
      title: "Workplace",
      link: "#",
    },
    {
      src: img014,
      title: "Workplace",
      link: "#",
    },
    {
      src: img015,
      title: "Workplace",
      link: "#",
    },
    {
      src: img029,
      title: "Workplace",
      link: "#",
    },
    {
      src: img030,
      title: "Workplace",
      link: "#",
    },
    {
      src: img031,
      title: "Workplace",
      link: "#",
    },
    {
      src: img032,
      title: "Workplace",
      link: "#",
    },
    {
      src: img033,
      title: "Workplace",
      link: "#",
    },
    {
      src: img034,
      title: "Workplace",
      link: "#",
    },
    {
      src: img035,
      title: "Workplace",
      link: "#",
    },
    {
      src: img036,
      title: "Workplace",
      link: "#",
    },
    {
      src: img037,
      title: "Workplace",
      link: "#",
    },
    {
      src: img038,
      title: "Workplace",
      link: "#",
    },
    {
      src: img039,
      title: "Workplace",
      link: "#",
    },
    {
      src: img040,
      title: "Workplace",
      link: "#",
    },
    {
      src: img041,
      title: "Workplace",
      link: "#",
    },
    {
      src: img042,
      title: "Workplace",
      link: "#",
    },
    {
      src: img043,
      title: "Workplace",
      link: "#",
    },
    {
      src: img044,
      title: "Workplace",
      link: "#",
    },
    {
      src: img045,
      title: "Workplace",
      link: "#",
    },
    {
      src: img046,
      title: "Workplace",
      link: "#",
    },
    {
      src: img047,
      title: "Workplace",
      link: "#",
    },
    {
      src: img048,
      title: "Workplace",
      link: "#",
    },
    {
      src: img049,
      title: "Workplace",
      link: "#",
    },
    {
      src: img050,
      title: "Workplace",
      link: "#",
    },
    {
      src: img051,
      title: "Workplace",
      link: "#",
    },
    {
      src: img052,
      title: "Workplace",
      link: "#",
    },
    {
      src: img053,
      title: "Workplace",
      link: "#",
    },
  ];

  const imageData3 = [
    {
      src: img016,
      title: "2022",
      link: "#",
    },
    {
      src: img017,
      title: "2022",
      link: "#",
    },
    {
      src: img018,
      title: "2022",
      link: "#",
    },
    {
      src: img019,
      title: "2022",
      link: "#",
    },
    {
      src: img020,
      title: "2017",
      link: "#",
    },
    {
      src: img021,
      title: "2017",
      link: "#",
    },
    {
      src: img022,
      title: "2017",
      link: "#",
    },
    {
      src: img023,
      title: "2017",
      link: "#",
    },
    {
      src: img024,
      itle: "2017",
      link: "#",
    },
    {
      src: img025,
      itle: "2017",
      link: "#",
    },
    {
      src: img026,
      itle: "2017",
      link: "#",
    },
    {
      src: img027,
      itle: "2017",
      link: "#",
    },
    {
      src: img028,
      title: "2017",
      link: "#",
    },
    {
      src: img054,
      title: "2021",
      link: "#",
    },
    {
      src: img055,
      title: "2021",
      link: "#",
    },
    {
      src: img056,
      title: "2021",
      link: "#",
    },
    {
      src: img057,
      title: "2021",
      link: "#",
    },
    {
      src: img058,
      title: "2021",
      link: "#",
    },
  ];

  return (
    <Container className="overflow-x-hidden">
      <div className="about-container w-full">
        {/* <div className="pre-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-9">
                <div className="left-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>0582.296.888
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i>hr@thinkdiff.us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker"></i>Số 30 Đường Louis 7,
                        Louis city, Hà Nội, Vietnam
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-3">
                <div className="social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <a href="/about-company" className="logo">
                    <h1 className="scroll-to-section">
                      <img src={logo_think_diff_us} alt={"logo"} />
                    </h1>
                  </a>

                  <ul className="nav">
                    <li className="scroll-to-section">
                      <a href="#top" className="active">
                        Home
                      </a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#services">Services</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#projects">Workplace</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#about">About Us</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#infos">Infos</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header> */}

        <div className="main-banner" id="top">
          <div className="container mx-60">
            <div className="row">
              <div className="col-lg-7">
                <div className="caption header-text">
                  <h6>ThinkDiff AI - a Software Products Company</h6>
                  <div className="line-dec"></div>

                  <h4>
                    Specializing in <em>artificial intelligence</em>
                    applications
                  </h4>
                  <h6> The Power Of Creativity</h6>
                  <p>
                    We develop a large number of small, fast products for short
                    jobs, such as automatic facial makeup without wasting time,
                    automatically compose interviews, automatically find cheap
                    airline tickets, automatically find sale off orders,
                    automatically find customers who need to rent a house,
                    automatically find customers to sell houses, automatically
                    look up, automatically find and sell houses. customer
                    inquiries. Our company has 200 employees in 3 different
                    locations, the headquarters in Louis city is the place where
                    training and human resource development is combined, the
                    sales department is located at 69 Vạn Phúc. Congratulations
                    for your interest in our company and for taking the time to
                    read this article. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services section" id="services">
          <div className="container mx-auto">
            <div className="flex ">
              <div className="row-lg-6 offset-lg-6">
                <div className="flex gap-3">
                  <div className="row-lg-12">
                    <div className="section-heading">
                      <h2>
                        We Provide <em>Different Services</em> &amp;
                        <span>Features</span> For Your Agency
                        <em>The Power Of Creativity</em>
                      </h2>
                      <div className="line-dec"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 max-w-[200px]">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src={services_01}
                          alt="discover SEO"
                          className="templatemo-feature"
                        />
                      </div>
                      <h4>Discover more about the latest world trends</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 max-w-[200px]">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src={services_02}
                          alt="data analysis"
                          className="templatemo-feature"
                        />
                      </div>
                      <h4>Analyze large requirements completely by customer</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 max-w-[200px] ">
                    <div className="service-item h-[90%]">
                      <div className="icon">
                        <img
                          src={services_03}
                          alt="precise data"
                          className="templatemo-feature"
                        />
                      </div>
                      <h4>Precise Data Analysis &amp; Prediction</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 max-w-[200px]  ">
                    <div className="service-item h-[90%]">
                      <div className="icon">
                        <img
                          src={services_04}
                          alt="SEO marketing"
                          className="templatemo-feature"
                        />
                      </div>
                      <h4>35000+ Client</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects section " id="projects">
          <div className="container mx-auto">
            <div className="row">
              <div className="">
                <div className="section-heading">
                  <h2>
                    Discover Our <em>projects</em> &amp; <span>products</span>
                  </h2>
                  <div className="line-dec"></div>
                  <p>
                    The important thing is that the customer is the customer,
                    the customer will follow the customer, but so are the
                    workers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-[150px] ">
            <div className="row ">
              <div className="col-lg-6">
                <Slider {...settings} className=" sliderr">
                  {imageData1.map((item, index) => (
                    <div className="item" key={index}>
                      <img src={item.src} alt={item.title} />
                      <div className="down-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <a href={item.link}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-download scale-75 opacity-[0.5]"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="projects section" id="projects">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  <h2>
                    Discover Our <em>Workplace</em> &amp; <span>Member</span>
                  </h2>
                  <div className="line-dec"></div>
                  <p>
                    The important thing is that the customer is the customer,
                    the customer will follow the customer, but so are the
                    workers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-[150px]">
            <div className="row rounded-[30px]">
              <div className="col-lg-12">
                <Slider {...settings} className="sliderr">
                  {imageData2.map((item, index) => (
                    <div className="item" key={index}>
                      <img src={item.src} alt={item.title} />
                      <div className="down-content">
                        <h4>{item.title}</h4>
                        <a href={item.link}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-heart opacity-75 scale-50"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="projects section" id="projects">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  <h2>
                    Discover Our <em>extracurricular activities</em> &amp;{" "}
                    <span>development process</span>{" "}
                  </h2>
                  <div className="line-dec"></div>
                  <p>
                    The important thing is that the customer is the customer,
                    the customer will follow the customer, but so are the
                    workers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-[150px]">
            <div className="row">
              <div className="col-lg-12">
                <Slider {...settings}>
                  {imageData3.map((item, index) => (
                    <div className="item" key={index}>
                      <img src={item.src} alt={item.title} />
                      <div className="down-content">
                        <h4>{item.title}</h4>
                        <a href={item.link}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-heart opacity-75 scale-50"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="infos section" id="infos">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-content">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left-image">
                        <img src={left_infos} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="section-heading">
                        <h2>
                          More <em>About Us</em> &amp; What{" "}
                          <span>We Offer</span>
                        </h2>
                        <div className="line-dec"></div>
                        <p>
                          We always bring quality, true value, customers always
                          trust and choose us
                        </p>
                      </div>
                      <div className="skills">
                        <div className="skill-slide marketing">
                          <div className="fill"></div>
                          <h6>IOS</h6>
                          <span>90%</span>
                        </div>
                        <div className="skill-slide digital">
                          <div className="fill"></div>
                          <h6>WEB</h6>
                          <span>80%</span>
                        </div>
                        <div className="skill-slide media">
                          <div className="fill"></div>
                          <h6>ANDROID</h6>
                          <span>90%</span>
                        </div>

                        <div className="skill-slide media">
                          <div className="fill"></div>
                          <h6>PYTHON</h6>
                          <span>90%</span>
                        </div>

                        <div className="skill-slide media">
                          <div className="fill"></div>
                          <h6>PHP</h6>
                          <span>90%</span>
                        </div>
                      </div>
                      <p className="more-info">
                        Pain itself is important, education is followed, but the
                        doer falls at a time when labor and pain, pain is
                        important, education is followed, but so is the doer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-us section" id="about">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-us-content">
                  <div className="row">
                    {/* <div className="col-lg-4">
                      <div id="map" className="flex">
                        <img src={left_infos_2} alt="" />
                        <img src={left_infos_3} alt="" />
                        <img src={left_infos_4} alt="" />
                      </div>
                    </div> */}
                    <div className="col-lg-8">
                      <form id="contact-form" action="" method="post">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-heading">
                              <img src={left_infos_1} alt="" />
                              <h2 className="flex flex-col ">
                                <em>
                                  Thinkdiff AI Company tuyển dụng intern design
                                  cho các ứng dụng và web ứng dụng trí tuệ nhân
                                  tạo
                                </em>{" "}
                                Ưu tiên ứng viên đã có kiến thức nền tảng Chấp
                                nhận sinh viên từ năm 2 trở lên
                                <span>CV gửi về hr@thinkdiff.us</span>
                              </h2>
                            </div>
                          </div>
                          <div className="more-info1">
                            <div className="row">
                              <ul className="flex justify-evenly">
                                <li>
                                  <h4>Design</h4>
                                </li>
                                <li>
                                  <h4>Python AI trí tuệ nhân tạo</h4>
                                </li>
                                <li>
                                  <h4>Android developer</h4>
                                </li>
                                <li>
                                  <h4>Ios developer</h4>
                                </li>
                                <li>
                                  <h4>Fontend developer</h4>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-us section" id="contact">
          <div className="container gap-4 mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-us-content">
                  <div className="row flex flex-col items-center">
                    <div className="col-lg-4">
                      <div id="map">
                        <iframe
                          title=""
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14900.866002411432!2d105.7578536!3d20.9839569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134535faf4a3b4b%3A0x583f82c08ae6f1b2!2zQ8O0bmcgdHkgdHLDrSB0deG7hyBuaMOibiB04bqhbyBUaGlua0RpZmY!5e0!3m2!1svi!2s!4v1678721887795!5m2!1svi!2s"
                          width="1150"
                          height="650"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          style={{ border: "0", borderRadius: "23px" }}
                        ></iframe>
                      </div>
                    </div>
                    <div className="col-lg-8 mt-[30px]">
                      <form id="contact-form" action="" method="post">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-heading">
                              <h2>
                                <em>Contact Us</em> &amp; Get In{" "}
                                <span>Touch</span>
                              </h2>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Your Name..."
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="surname"
                                name="surname"
                                id="surname"
                                placeholder="Your Surname..."
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                pattern="[^ @]*@[^ @]*"
                                placeholder="Your E-mail..."
                                required=""
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="subject"
                                name="subject"
                                id="subject"
                                placeholder="Subject..."
                                autoComplete="on"
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Your Message"
                              ></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="orange-button"
                              >
                                Send Message Now
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                      <br />

                      <div className="more-info">
                        <div className="row">
                          <h4>
                            <a href="#">
                              Why thinkdiff Continuously recruits and maintains
                              a staff of up to 200 people: If anyone has ever
                              done machine learning, you must know that machine
                              learning takes a lot of manpower to weigh, train
                              machine learning, analyze data, A typical machine
                              learning application needs at least 10-20 people,
                              our company is working on 20 machine learning
                              products at the same time. Because of the large
                              number of people, our company is recruiting a
                              large number of developers, business analysts,
                              testers, python developers, we are thriving and
                              proud to be the leading company in Vietnam in
                              machine learning products, Come to thinkdiff AI
                              company to experience a creative working
                              environment, free spirit to create global
                              products, we have the goal of creating the best
                              products that attract 100 million users worldwide
                              world, congratulations for reading all the
                              information about our company
                            </a>
                          </h4>
                        </div>
                      </div>

                      <br />

                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-phone"></i>
                              <h4>
                                <a href="#">0582.296.888</a>
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-envelope"></i>
                              <h4>
                                <a href="#"> hr@thinkdiff.us</a>
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-map-marker"></i>
                              <h4>
                                <a href="#">
                                  Số 30 Đường Louis 7 Khu đô thị louis city đại
                                  mỗ, phường đại mỗ, Quận Nam Từ Liêm, Thành phố
                                  Hà Nội, 10000 Việt Nam
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                      {/* 
                      <div className="more-info">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fab fa-android"></i>
                              <h4>
                                <a href="https://cdn.fbsbx.com/v/t59.2708-21/337013142_1627741731004268_2904682436095363799_n.apk/interview-Question.apk?_nc_cat=101&ccb=1-7&_nc_sid=0cab14&_nc_ohc=uJ5ogA7EogYAX-GL6K8&_nc_ht=cdn.fbsbx.com&oh=03_AdQu4VuN2o7Adyc-c5TJyxMm3Adl1S4fFV47CJGOm0ZGfg&oe=645A50EE&dl=1">
                                  interview question
                                </a>
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fab fa-apple"></i>
                              <h4>
                                <a href="https://apps.apple.com/us/app/devsenior-thinkdiff-interview/id6445922046">
                                  interview question
                                </a>
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fas fa-arrow-left"></i>
                              <h4>
                                <a href="#">interview question</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container mx-auto">
            <div className="col-lg-12">
              <p>
                Copyright © 2023 <a href="#"> ThinkDiff</a>. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .container {
    max-width: 1280px !important;
  }
  .sliderr {
    border-radius: 30px;
  }
  .about-container {
    font-family: "Open Sans", sans-serif !important;
  }

  .slick-slide img {
    border-top-left-radius: 23px;
    border-top-right-radius: 23px;
  }

  .slick-initialized .slick-slide {
    width: 365px !important;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 700;
  }

  ul {
    margin-bottom: 0;
  }

  p {
    font-size: 15px;
    line-height: 30px;
    color: #6c6868f2;
  }

  img {
    width: 100%;
    overflow: hidden;
  }

  /*
  ---------------------------------------------
  Global Styles
  ---------------------------------------------
  */

  html,
  body {
    font-family: "Open Sans", sans-serif;
  }

  ::selection,
  ::-moz-selection {
    background: #5b03e4;
    color: #fff;
  }

  .templatemo-feature {
    max-width: 66px;
    border-radius: 50%;
  }

  .main-button a {
    font-size: 14px;
    color: #fff;
    background-color: #5b03e4;
    padding: 12px 30px;
    display: inline-block;
    border-radius: 25px;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #5b03e4;
      color: #fff;
      opacity: 0.8;
    }
  }

  .second-button a {
    font-size: 14px;
    color: #fff;
    background-color: #c03afe;
    padding: 12px 30px;
    display: inline-block;
    border-radius: 25px;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #c03afe;
      color: #fff;
      opacity: 0.8;
    }
  }

  .section {
    padding-top: 30px;
    margin-top: 90px;
  }

  .section-heading {
    margin-bottom: 30px;

    .line-dec {
      width: 60px;
      height: 2px;
      margin-bottom: 20px;
      background: rgb(85, 0, 227);
      background: linear-gradient(
        90deg,
        rgba(85, 0, 227, 1) 0%,
        rgba(198, 61, 255, 1) 100%
      );
    }

    h2 {
      color: #2a2a2a;
      font-size: 30px;
      text-transform: capitalize;
      text-decoration: none;
      margin-bottom: 30px;
      line-height: 44px;

      em {
        color: #5b03e4;
        font-style: normal;
      }

      span {
        color: #c03afe;
      }
    }
  }

  /*
  ---------------------------------------------
  Pre-loader Style
  ---------------------------------------------
  */

  .js-preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.99);
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    visibility: visible;
    z-index: 9999;
    -webkit-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;

    &.loaded {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

  @-webkit-keyframes dot {
    50% {
      -webkit-transform: translateX(96px);
      transform: translateX(96px);
    }
  }

  @keyframes dot {
    50% {
      -webkit-transform: translateX(96px);
      transform: translateX(96px);
    }
  }

  @-webkit-keyframes dots {
    50% {
      -webkit-transform: translateX(-31px);
      transform: translateX(-31px);
    }
  }

  @keyframes dots {
    50% {
      -webkit-transform: translateX(-31px);
      transform: translateX(-31px);
    }
  }

  .preloader-inner {
    position: relative;
    width: 142px;
    height: 40px;
    background: transparent;

    .dot {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 12px;
      left: 15px;
      background: #5b03e4;
      border-radius: 50%;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-animation: dot 2.8s infinite;
      animation: dot 2.8s infinite;
    }

    .dots {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      margin-top: 12px;
      margin-left: 31px;
      -webkit-animation: dots 2.8s infinite;
      animation: dots 2.8s infinite;

      span {
        display: block;
        float: left;
        width: 16px;
        height: 16px;
        margin-left: 16px;
        background: #5b03e4;
        border-radius: 50%;
      }
    }
  }

  /*
  ---------------------------------------------
  Header Style
  ---------------------------------------------
  */

  .background-header {
    background-color: #fff;
    height: 80px !important;
    position: fixed !important;
    top: 0 !important;
    left: 0;
    right: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15) !important;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
  }

  .header-area {
    position: absolute;
    background: rgb(85, 0, 227);
    background: linear-gradient(
      90deg,
      rgba(85, 0, 227, 1) 0%,
      rgba(198, 61, 255, 1) 100%
    );
    height: 110px;
    left: 0;
    right: 0;
    z-index: 100;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;

    .main-nav {
      min-height: 80px;
      background: transparent;
      display: flex;

      .logo {
        margin-top: 0;
        flex-basis: 20%;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        color: #fff;
      }
    }
  }

  .background-header .main-nav .logo {
    margin-top: 10px;
  }

  .header-area .main-nav .nav {
    flex-basis: 80%;
    height: 110px;
    margin-top: 0;
    margin-right: 0;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: relative;
    z-index: 999;
  }

  .nav {
    justify-content: right;
  }

  .header-area .main-nav .nav li {
    &:first-child {
      padding-left: 60px;
    }

    &:last-child {
      padding-right: 0;
    }

    padding-left: 30px;
    padding-right: 30px;

    &:nth-child(4) {
      padding-right: 45px !important;
    }

    a {
      display: block;
      font-weight: 400;
      font-size: 14px;
      text-transform: uppercase;
      color: #fff;
      -webkit-transition: all 0.4s ease 0s;
      -moz-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
      height: 110px;
      line-height: 110px;
      border: transparent;
      letter-spacing: 1px;
    }
  }

  .background-header .main-nav .nav li a {
    height: 80px;
    line-height: 80px;
  }

  .header-area .main-nav {
    .border-button {
      flex-basis: 20%;
      margin-top: 13px;
      text-align: right;
    }

    .nav li.has-sub ul.sub-menu li:last-child a:hover {
      padding-left: 25px !important;
    }
  }

  .background-header
    .main-nav
    .nav
    li.has-sub
    ul.sub-menu
    li:last-child
    a:hover {
    padding-left: 25px !important;
  }

  .header-area .main-nav .nav li {
    &:hover a,
    a.active {
      color: #fff;
      opacity: 0.8;
    }
  }

  .background-header .main-nav .nav li {
    &:hover a,
    a.active {
      color: #fff;
      opacity: 0.8;
    }
  }

  .header-area .main-nav .nav li.has-sub {
    position: relative;
    padding-right: 15px;

    &:after {
      font-family: FontAwesome;
      content: "\\f107";
      font-size: 12px;
      color: #fff;
      position: absolute;
      right: 30px;
      top: 45px;
    }
  }

  .background-header .main-nav .nav li.has-sub:after {
    top: 32px;
  }

  .header-area .main-nav .nav li.has-sub ul.sub-menu {
    position: absolute;
    width: 160px;
    border-radius: 0 0 5px 5px;
    background-color: #eee;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
    top: 110px;
    opacity: 0;
    transition: all 0.3s;
    transform: translateY(+2em);
    visibility: hidden;
    z-index: -1;
  }

  .background-header .main-nav .nav li.has-sub ul.sub-menu {
    top: 80px;
  }

  .header-area .main-nav {
    .nav li.has-sub {
      ul {
        &.sub-menu li {
          margin-left: 0;
          padding-left: 0;
          padding-right: 0;

          a {
            opacity: 1;
            display: block;
            background: #eee;
            color: #2a2a2a !important;
            padding-left: 20px;
            height: 40px;
            line-height: 40px;
            -webkit-transition: all 0.3s ease 0s;
            -moz-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
            position: relative;
            font-size: 13px;
            font-weight: 400;
            border-bottom: 1px solid #eee;
          }

          &:last-child a {
            border-bottom: none;
          }
        }

        li a:hover {
          background: #fff;
          color: #5b03e4 !important;
          padding-left: 25px;

          &:before {
            width: 3px;
          }
        }
      }

      &:hover ul.sub-menu {
        visibility: visible;
        opacity: 1;
        z-index: 1;
        transform: translateY(0%);
        transition-delay: 0s, 0s, 0.3s;
      }
    }

    .menu-trigger {
      cursor: pointer;
      position: absolute;
      top: 33px;
      width: 32px;
      height: 40px;
      text-indent: -9999em;
      z-index: 99;
      right: 20px;
      display: none;
    }
  }

  .background-header .main-nav .menu-trigger {
    top: 17px;
  }

  .header-area .main-nav .menu-trigger {
    span {
      -moz-transition: all 0.4s;
      -o-transition: all 0.4s;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      background-color: #fff;
      display: block;
      position: absolute;
      width: 30px;
      height: 2px;
      left: 0;

      &:before,
      &:after {
        -moz-transition: all 0.4s;
        -o-transition: all 0.4s;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
        background-color: #fff;
        display: block;
        position: absolute;
        width: 30px;
        height: 2px;
        left: 0;
      }

      &:before,
      &:after {
        -moz-transition: all 0.4s;
        -o-transition: all 0.4s;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
        background-color: #fff;
        display: block;
        position: absolute;
        width: 30px;
        height: 2px;
        left: 0;
        width: 75%;
      }

      &:before,
      &:after {
        content: "";
      }

      top: 16px;

      &:before {
        -moz-transform-origin: 33% 100%;
        -ms-transform-origin: 33% 100%;
        -webkit-transform-origin: 33% 100%;
        transform-origin: 33% 100%;
        top: -10px;
        z-index: 10;
      }

      &:after {
        -moz-transform-origin: 33% 0;
        -ms-transform-origin: 33% 0;
        -webkit-transform-origin: 33% 0;
        transform-origin: 33% 0;
        top: 10px;
      }
    }

    &.active span {
      background-color: transparent;
      width: 100%;

      &:before,
      &:after {
        background-color: transparent;
        width: 100%;
      }

      &:before {
        -moz-transform: translateY(6px) translateX(1px) rotate(45deg);
        -ms-transform: translateY(6px) translateX(1px) rotate(45deg);
        -webkit-transform: translateY(6px) translateX(1px) rotate(45deg);
        transform: translateY(6px) translateX(1px) rotate(45deg);
        background-color: #fff;
      }
    }
  }

  .background-header .main-nav .menu-trigger.active span:before {
    background-color: #fff;
  }

  .header-area .main-nav .menu-trigger.active span:after {
    -moz-transform: translateY(-6px) translateX(1px) rotate(-45deg);
    -ms-transform: translateY(-6px) translateX(1px) rotate(-45deg);
    -webkit-transform: translateY(-6px) translateX(1px) rotate(-45deg);
    transform: translateY(-6px) translateX(1px) rotate(-45deg);
    background-color: #fff;
  }

  .background-header .main-nav .menu-trigger.active span:after {
    background-color: #fff;
  }

  .header-area.header-sticky .nav li a.active {
    color: #fff;
  }

  @media (max-width: 1200px) {
    .header-area .main-nav {
      .nav li {
        padding-left: 10px;
        padding-right: 10px;
      }

      &:before {
        display: none;
      }
    }
  }

  @media (max-width: 767px) {
    .header-area .main-nav {
      .nav {
        height: auto;
        flex-basis: 100%;
      }

      .logo {
        position: absolute;
        left: 30px;
        top: 0;
      }
    }

    .background-header .main-nav {
      .logo {
        top: 0;
      }

      .border-button {
        top: 0 !important;
      }
    }

    .header-area {
      .main-nav .border-button {
        position: absolute;
        top: 15px;
        right: 70px;
      }

      &.header-sticky .nav li {
        a {
          &:hover,
          &.active {
            color: #5b03e4 !important;
            opacity: 1;
          }
        }

        &.search-icon a {
          width: 100%;
        }
      }

      background-color: #f7f7f7;
      padding: 0 15px;
      height: 100px;
      box-shadow: none;
      text-align: center;

      .container {
        padding: 0;
      }

      .logo {
        margin-left: 0;
      }

      .menu-trigger {
        display: block !important;
      }

      .main-nav {
        overflow: hidden;

        .nav {
          float: none;
          width: 100%;
          display: none;
          -webkit-transition: all 0s ease 0s;
          -moz-transition: all 0s ease 0s;
          -o-transition: all 0s ease 0s;
          transition: all 0s ease 0s;
          margin-left: 0;

          li:first-child {
            border-top: 1px solid #eee;
          }
        }
      }

      &.header-sticky .nav {
        margin-top: 100px !important;
      }
    }

    .background-header.header-sticky .nav {
      margin-top: 80px !important;
    }

    .header-area .main-nav .nav li {
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #eee;
      padding-left: 0 !important;
      padding-right: 0 !important;

      a {
        height: 50px !important;
        line-height: 50px !important;
        padding: 0 !important;
        border: none !important;
        background: #f7f7f7 !important;
        color: #191a20 !important;

        &:hover {
          background: #eee !important;
          color: #5b03e4 !important;
        }
      }

      &.has-sub ul.sub-menu {
        position: relative;
        visibility: inherit;
        opacity: 1;
        z-index: 1;
        transform: translateY(0%);
        top: 0;
        width: 100%;
        box-shadow: none;
        height: 0;
        transition: all 0s;
      }

      &.submenu ul li a {
        font-size: 12px;
        font-weight: 400;

        &:hover:before {
          width: 0;
        }
      }

      &.has-sub {
        ul.sub-menu {
          height: auto;
        }

        &:after {
          color: #3b566e;
          right: 30px;
          font-size: 14px;
          top: 15px;
        }
      }

      &.submenu {
        &:hover ul,
        &:focus ul {
          height: 0;
        }
      }
    }
  }

  .pre-header {
    background-color: #fff;
    padding: 15px 0;

    ul li {
      display: inline-block;
    }

    .left-info ul li {
      &:last-child {
        margin-right: 0;
        padding-right: 0;
        border-right: none;
      }

      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #dfb6ff;

      a {
        font-size: 14px;

        i {
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }

    ul li a {
      color: #a586bc;
      transition: all 0.4s;
    }

    .social-icons {
      text-align: right;

      ul li {
        margin-left: 10px;

        a {
          font-size: 18px;
        }
      }
    }

    ul li a:hover {
      color: #c03afe;
    }
  }

  /*
  ---------------------------------------------
  Banner Style
  ---------------------------------------------
  */

  .logo h1 img {
    width: 230px;
  }

  .main-banner {
    position: relative;
    padding: 250px 0 185px 0;

    &:after {
      content: "";
      background-image: url(${banner_r2});
      top: -1px;
      right: 0;
      position: absolute;
      width: 861px;
      height: 1000px;
      z-index: -1;
    }

    &::before {
      content: "";
      background-image: url(${banner_left});
      top: -1px;
      left: 0;
      position: absolute;
      width: 194px;
      height: 655px;
      z-index: -1;
    }

    h6,
    h5 {
      font-size: 20px;
      color: #5b03e4;
      text-transform: uppercase;
      font-weight: 700;
    }

    .line-dec {
      margin: 30px 0 20px 0;
      width: 210px;
      height: 2px;
      background-color: #decdfa;
    }

    h4 {
      font-size: 52px;
      color: #2a2a2a;
      font-weight: 700;
      line-height: 70px;
      margin-bottom: 20px;

      em {
        font-style: normal;
        color: #5b03e4;
      }

      span {
        color: #c03afe;
      }
    }

    p {
      padding-right: 25%;
      margin-bottom: 30px;
    }

    .main-button {
      display: inline-block;
    }

    span {
      display: inline-block;
      margin: 0 10px 0 10px;
      color: #7a7a7a;
    }

    .second-button {
      display: inline-block;
    }
  }

  /*
  ---------------------------------------------
  Services Style
  ---------------------------------------------
  */

  .services {
    position: relative;
    overflow: hidden;

    .section-heading h2 {
      padding-right: 30px;
    }

    &::before {
      content: "";
      background-image: url(${services_left});
      top: 120px;
      left: 0;
      position: absolute;
      width: 844px;
      height: 714px;
      z-index: -1;
    }

    &::after {
      content: "";
      background-image: url(${contact_left});
      bottom: -150px;
      right: 0;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      position: absolute;
      width: 103px;
      height: 464px;
      z-index: -1;
    }

    .service-item {
      border: 1px solid #f3d7ff;
      border-radius: 23px;
      padding: 30px;
      background-color: #fff;
      margin-bottom: 30px;
      transition: all 0.4s;
      width: 100%;

      h4 {
        font-size: 20px;
        color: #2a2a2a;
        margin-top: 20px;
        line-height: 30px;
        transition: all 0.4s;
      }

      &:hover {
        border-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

        h4 {
          color: #5b03e4;
        }
      }
    }
  }

  /*
  ---------------------------------------------
  Projects Style
  ---------------------------------------------
  */

  .projects {
    .section-heading {
      margin-bottom: 80px;
    }

    .container-fluid {
      padding-left: 0;
      padding-right: 0;
    }

    .item {
      border-radius: 23px;
      padding: 0 15px;
      overflow: hidden;

      .down-content {
        background-color: #fff;
        border: 1px solid #f3d7ff;
        border-radius: 0 0 23px 23px;
        padding: 30px;
        position: relative;

        h4 {
          font-size: 20px;
          color: #2a2a2a;
          line-height: 30px;
          width: 75%;
        }

        a {
          width: 46px;
          height: 46px;
          display: inline-block;
          line-height: 46px;
          text-align: center;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          border-radius: 50%;
          position: absolute;
          right: 30px;
          top: 50%;
          color: #5b03e4;
          transform: translateY(-23px);
        }
      }
    }

    .owl-nav {
      position: absolute;
      max-width: 1320px;
      top: -126px;
      right: 16%;
      text-align: right;

      .owl-prev span {
        width: 46px;
        height: 46px;
        line-height: 42px;
        font-size: 24px;
        display: inline-block;
        color: #fff;
        background-color: #5b03e4;
        border-radius: 50%;
        opacity: 0.5;
        transition: all 0.3s;
      }

      .owl-next span {
        width: 46px;
        height: 46px;
        line-height: 42px;
        font-size: 24px;
        display: inline-block;
        color: #fff;
        background-color: #5b03e4;
        border-radius: 50%;
        opacity: 0.5;
        transition: all 0.3s;
        margin-left: 15px;
      }

      .owl-prev span:hover,
      .owl-next span:hover {
        opacity: 1;
      }
    }
  }

  /*
  ---------------------------------------------
  Infos Style
  ---------------------------------------------
  */

  .infos {
    background-image: url(${infos_bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 120px 0;
    margin-top: 120px;

    .main-content {
      overflow: hidden;
      background-color: #fff;
      border-radius: 23px;

      .left-image {
        background-image: url(${left_infos});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;

        img {
          display: none;
        }
      }

      .section-heading {
        padding: 60px 60px 30px 60px;
      }

      .skills {
        padding: 0 60px;
      }

      .skill-slide {
        position: relative;
        width: 100%;
        background-color: #f9ebff;
        height: 10px;
        border-radius: 5px;
        margin-bottom: 60px;

        .fill {
          height: 10px;
          background-color: #5b03e4;
          border-radius: 5px;
        }

        h6 {
          position: absolute;
          color: #5b03e4;
          font-size: 15px;
          left: 0;
          top: -25px;
        }

        span {
          position: absolute;
          color: #5b03e4;
          font-size: 15px;
          font-weight: 700;
          top: -25px;
        }
      }

      .marketing .fill {
        width: 90%;
      }

      .digital .fill {
        width: 80%;
      }

      .media .fill {
        width: 95%;
      }

      .marketing span {
        right: 10%;
      }

      .digital span {
        right: 20%;
      }

      .media span {
        right: 5%;
      }

      p.more-info {
        margin-top: -15px;
        padding: 0 60px 60px 60px;
      }
    }
  }

  /*
  ---------------------------------------------
  Contact Style
  ---------------------------------------------
  */

  .contact-us {
    position: relative;

    &::before {
      content: "";
      background-image: url(${contact_left});
      top: -60px;
      left: 0;
      position: absolute;
      width: 103px;
      height: 464px;
      z-index: -1;
    }

    &::after {
      content: "";
      background-image: url(${contact_left});
      bottom: -90px;
      right: 0;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      position: absolute;
      width: 103px;
      height: 464px;
      z-index: -1;
    }

    .contact-us-content {
      border-radius: 23px;
      padding: 60px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      #contact-form {
        padding: 60px;
        border-radius: 23px;
        border: 1px solid #c059ed;
      }
    }
  }

  #contact-form {
    .section-heading {
      text-align: center;
    }

    input {
      width: 100%;
      height: 46px;
      border-radius: 23px;
      background-color: #f9ebff;
      border: none;
      outline: none;
      padding: 0 15px;
      font-size: 14px;
      color: #2a2a2a;
      font-weight: 600;
      margin-bottom: 15px;

      &::placeholder {
        color: #2a2a2a;
      }
    }

    textarea {
      width: 100%;
      height: 120px;
      border-radius: 23px;
      background-color: #f9ebff;
      border: none;
      outline: none;
      padding: 15px;
      font-size: 14px;
      color: #2a2a2a;
      font-weight: 600;
      margin-bottom: 15px;

      &::placeholder {
        color: #2a2a2a;
      }
    }

    button {
      border: none;
      height: 46px;
      background-color: #5b03e4;
      width: 100%;
      border-radius: 23px;
      color: #fff;
      transition: all 0.4s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .contact-us-content {
    .more-info {
      text-align: center;
      background: rgb(85, 0, 227);
      background: linear-gradient(
        90deg,
        rgba(85, 0, 227, 1) 0%,
        rgba(198, 61, 255, 1) 100%
      );
      border-radius: 23px;
      padding: 45px 30px 15px 30px;
      color: #e0e0e0;
    }

    .more-info1 {
      text-align: left;
      background: rgb(85, 0, 227);
      background: linear-gradient(
        90deg,
        rgba(85, 0, 227, 1) 0%,
        rgba(198, 61, 255, 1) 100%
      );
      border-radius: 23px;
      padding: 15px 30px 15px 30px;
      color: #ffffff;
    }
    .more-info1 h4 {
      color: #fff;
    }

    .more-info {
      .info-item {
        text-align: center;
        margin-bottom: 30px;
      }

      i {
        font-size: 32px;
        color: #fff;
        margin-bottom: 15px;
      }

      h4 a {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  /*
  ---------------------------------------------
  Footer Style
  ---------------------------------------------
  */

  footer p {
    text-align: center;
    padding: 30px 0;
    color: #2a2a2a;
    font-weight: 500;

    a {
      color: #2a2a2a;
      transition: all 0.3s;

      &:hover {
        color: #5b03e4;
      }
    }
  }

  /*
  ---------------------------------------------
  Page Heading Style
  ---------------------------------------------
  */

  .page-heading {
    padding: 120px 0;
    margin-top: 110px;

    &::before {
      content: "";
      background-image: url(${banner_left});
      top: -1px;
      left: 0;
      position: absolute;
      width: 194px;
      height: 655px;
      z-index: -1;
    }

    h6 {
      font-size: 20px;
      color: #5b03e4;
      text-transform: uppercase;
      font-weight: 700;
    }

    .line-dec {
      margin: 30px 0 20px 0;
      width: 210px;
      height: 2px;
      background-color: #decdfa;
    }

    h4 {
      font-size: 52px;
      color: #2a2a2a;
      font-weight: 700;
      line-height: 70px;
      margin-bottom: 20px;

      em {
        font-style: normal;
        color: #5b03e4;
      }

      span {
        color: #c03afe;
      }
    }

    p {
      padding-right: 25%;
      margin-bottom: 30px;
    }

    .main-button {
      display: inline-block;
    }

    span {
      display: inline-block;
      margin: 0 10px 0 10px;
      color: #7a7a7a;
    }

    .second-button {
      display: inline-block;
    }
  }

  /*
  ---------------------------------------------
  Infos Style
  ---------------------------------------------
  */

  .video-info {
    content: "";
    background-image: url(${video_bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-bottom: 60px;

    .video-thumb {
      position: relative;
      border-radius: 23px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 10px;

      a {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-23px, -23px);
        background-color: #fff;
        border-radius: 50%;
        color: #5b03e4;
        display: inline-block;
        text-align: center;
        width: 46px;
        height: 46px;
        line-height: 46px;
      }
    }

    .section-heading {
      padding: 60px 15px 30px 15px;

      h2 {
        color: #fff;
        padding-right: 30px;
      }

      .line-dec {
        background: #fff;
      }

      p {
        color: #fff;
      }
    }

    .skills {
      padding: 0 15px;
    }

    .skill-slide {
      position: relative;
      width: 100%;
      background-color: rgba(249, 235, 255, 0.1);
      height: 10px;
      border-radius: 5px;
      margin-bottom: 60px;

      .fill {
        height: 10px;
        background-color: #5b03e4;
        border-radius: 5px;
      }

      h6 {
        position: absolute;
        color: #fff;
        font-size: 15px;
        left: 0;
        top: -25px;
      }

      span {
        position: absolute;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        top: -25px;
      }
    }

    .marketing .fill {
      width: 90%;
    }

    .digital .fill {
      width: 80%;
    }

    .media .fill {
      width: 95%;
    }

    .marketing span {
      right: 10%;
    }

    .digital span {
      right: 20%;
    }

    .media span {
      right: 5%;
    }
  }

  /*
  ---------------------------------------------
  Happy Clients Style
  ---------------------------------------------
  */

  .happy-clients {
    position: relative;

    &::before {
      content: "";
      background-image: url(${contact_left});
      top: -60px;
      left: 0;
      position: absolute;
      width: 103px;
      height: 464px;
      z-index: -1;
    }

    &::after {
      content: "";
      background-image: url(${contact_left});
      bottom: -90px;
      right: 0;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      position: absolute;
      width: 103px;
      height: 464px;
      z-index: -1;
    }

    .section-heading {
      text-align: center;
      margin-bottom: 80px;

      .line-dec {
        margin: 0 auto 20px auto;
      }
    }

    .naccs {
      position: relative;
      overflow: hidden;

      .menu {
        border: 1px solid #e0e0e0;
        background-color: #fff;
        padding: 25px 0;
        border-radius: 23px;
        margin-bottom: 60px;

        div {
          border-right: 1px solid #e0e0e0;
          width: 24.6%;
          display: inline-block;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          color: #2a2a2a;
          cursor: pointer;
          transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);

          &.last-item {
            border-right: none;
          }

          &.active {
            color: #5b03e4;
          }
        }
      }
    }

    ul.nacc {
      position: relative;
      min-height: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);

      li {
        overflow: hidden;
        opacity: 0;
        transform: translateX(50px);
        position: absolute;
        list-style: none;
        transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);

        img {
          padding-left: 45px;
        }

        h4 {
          font-size: 30px;
          color: #2a2a2a;
          margin-bottom: 25px;
        }

        .line-dec {
          background-color: #5b03e4;
          width: 60px;
          height: 2px;
          margin-bottom: 25px;
        }

        .info {
          margin-top: 30px;

          span {
            display: inline-block;
            background-color: #5b03e4;
            border-radius: 20px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            padding: 0 20px;
            margin-right: 20px;
            margin-bottom: 30px;

            &.last-span {
              margin-right: 0;
            }
          }
        }

        &.active {
          position: relative;
          transition-delay: 0.3s;
          z-index: 2;
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }

  /*
  ---------------------------------------------
  CTA Style
  ---------------------------------------------
  */

  .cta {
    content: "";
    background-image: url(${cta_bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 80px 0;
    position: relative;
    z-index: 15;
    margin-top: 120px;

    h4 {
      font-size: 30px;
      color: #fff;
      line-height: 44px;
    }

    .main-button {
      text-align: right;

      a {
        background-color: #fff;
        color: #5b03e4;
        margin-top: 30px;
      }
    }
  }

  /*
  ---------------------------------------------
  Happy Steps Style
  ---------------------------------------------
  */

  .happy-steps {
    content: "";
    background-image: url(${video_bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    padding: 80px 0;

    h2 {
      font-size: 30px;
      color: #fff;
      text-align: center;
      margin-bottom: 60px;
    }

    .steps {
      background-color: rgba(250, 250, 250, 0.2);
      padding: 30px;
      border-radius: 23px;

      .item {
        text-align: center;
        border-right: 1px solid rgba(250, 250, 250, 0.2);
        margin-right: -15px;
      }

      .last-item {
        border-right: none;
        margin-right: 0;
      }

      .item h4 {
        font-size: 20px;
        color: #fff;
        margin-top: 15px;
      }
    }
  }

  /*
  ---------------------------------------------
  Most Asked Style
  ---------------------------------------------
  */

  .most-asked {
    position: relative;

    &::before {
      content: "";
      background-image: url(${contact_left});
      top: -60px;
      left: 0;
      position: absolute;
      width: 103px;
      height: 464px;
      z-index: -1;
    }

    &::after {
      content: "";
      background-image: url(${contact_left});
      bottom: -90px;
      right: 0;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      position: absolute;
      width: 103px;
      height: 464px;
      z-index: -1;
    }

    .section-heading {
      margin-bottom: 80px;
    }

    .accordions {
      .accordion {
        border-bottom: 1px solid #eee;
      }

      .last-accordion {
        border-bottom: none;
      }
    }

    .accordion-head {
      padding: 35px 0 !important;
      font-size: 22px;
      font-weight: 700;
      color: #2a2a2a;
      cursor: pointer;
      transition: color 200ms ease-in-out;

      .icon {
        float: right;
        transition: transform 200ms ease-in-out;
      }

      &.is-open {
        color: #5b03e4;
        border-bottom: none;

        .icon {
          transform: rotate(45deg);
        }
      }
    }

    .accordion-body {
      padding: 0;
      overflow: hidden;
      height: 0;
      transition: height 300ms ease-in-out;
      border-bottom: 1px solid #fff;

      > .content p {
        padding: 0 0 30px 0;
        padding-top: 0;
      }
    }

    #free-quote {
      border-radius: 23px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 60px;
      margin-left: 45px;
      background-color: #fff;
    }
  }

  @media screen and (min-width: 768px) {
    .most-asked .accordion-head {
      padding: 1rem;
      font-size: 1.2rem;
    }
  }

  #free-quote {
    .section-heading {
      margin-bottom: 40px;
    }

    input {
      width: 100%;
      height: 46px;
      border-radius: 23px;
      background-color: #f9ebff;
      border: none;
      outline: none;
      padding: 0 15px;
      font-size: 14px;
      color: #2a2a2a;
      font-weight: 600;
      margin-bottom: 15px;

      &::placeholder {
        color: #2a2a2a;
      }
    }

    button {
      border: none;
      height: 46px;
      background-color: #5b03e4;
      width: 100%;
      border-radius: 23px;
      color: #fff;
      transition: all 0.4s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  /*
  ---------------------------------------------
  Responsive Style
  ---------------------------------------------
  */

  body {
    overflow-x: hidden;
  }

  @media (max-width: 767px) {
    .pre-header {
      display: none;
    }

    .header-area {
      top: 0;
    }

    .main-banner {
      margin-top: 100px;
    }

    .header-area .main-nav .nav li {
      &:nth-child(4) {
        padding-right: 0 !important;
      }

      background: #f7f7f7;

      &.has-sub ul.sub-menu {
        display: none;
      }
    }

    .main-banner {
      padding: 185px 0;

      h4 {
        font-size: 36px;
        line-height: 44px;
      }

      span {
        margin: 0 3px 0 3px;
      }

      .main-button a,
      .second-button a {
        padding: 12px 20px;
      }
    }

    .projects .item .down-content {
      padding: 25px 15px 15px 15px;

      h4 {
        text-align: center;
        width: 100%;
        font-size: 18px;
      }

      a {
        top: 0;
        right: auto;
        left: 50%;
        transform: translate(-23px, -23px);
      }
    }
  }

  @media (max-width: 992px) {
    .pre-header .left-info ul li {
      padding-right: 10px;
      margin-right: 10px;

      a {
        font-size: 13px;
      }
    }

    .main-banner {
      .caption {
        padding: 30px !important;
        text-align: center;
      }

      p {
        padding-right: 0%;
      }

      .line-dec {
        margin: 30px auto 20px auto;
      }
    }

    .projects {
      .owl-nav {
        text-align: center;
        right: auto;
        top: -70px;
        left: 50%;
        transform: translateX(-50%);
      }

      .section-heading {
        text-align: center;

        .line-dec {
          margin: 0 auto 20px auto;
        }
      }
    }

    .infos .main-content .left-image img {
      display: inline-block;
    }

    .contact-us {
      .contact-us-content {
        padding: 30px;

        #contact-form {
          padding: 30px;
        }
      }

      #map {
        margin-bottom: 30px;
      }
    }

    .contact-us-content .more-info .info-item {
      margin-bottom: 45px;
    }

    .page-heading img {
      margin-top: 45px;
    }

    .video-info {
      .section-heading {
        padding: 60px 0 30px 0;
      }

      .skills {
        padding: 0;
      }
    }

    .happy-clients {
      .naccs .menu {
        div {
          width: 100% !important;
          margin: 15px 0;
        }

        padding: 15px;
      }

      ul.nacc li img {
        padding-left: 0;
        margin-top: 45px;
      }
    }

    .cta {
      h4,
      .main-button {
        text-align: center;
      }
    }

    .happy-steps .steps {
      .item {
        margin-right: 0;
        border-right: none;
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(250, 250, 250, 0.2);
      }

      .last-item {
        border-bottom: none;
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }

    .most-asked #free-quote {
      margin-left: 0;
      margin-top: 45px;
      padding: 30px;
    }
  }

  @media (max-width: 1000px) {
    .happy-clients .naccs .menu div {
      width: 24.5%;
      font-size: 15px;
      border-right: none;
    }
  }

  @media (max-width: 1200px) {
    .services::before {
      top: 60%;
      transform: translateY(-50%);
    }
  }

  @media (max-width: 1400px) {
    .main-banner .caption {
      background-color: rgba(250, 250, 250, 0.75);
      padding: 60px;
      border-radius: 23px;
    }
  }
`;
