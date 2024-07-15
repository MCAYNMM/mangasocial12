import AboutUser from "../../components/about_user/about-user";
const Page_comic = () => {
  return (
    <div className="wrap-comic">
      <div className="wrap-comic-profile">
        <AboutUser />
        <div className="wrap-comic-profile-container">
          <div className="wrap-comic-profile-container-box">
            <div>
              <h2>ABOUT THE APP</h2>
              <p>Version:</p>
              <p>https://mangasocial</p>
              <p>Email: abcasd@gmail.com</p>
              <p>Copy right</p>
            </div>
            <div>
              <h2>ABOUT US</h2>
              <p>Thinkdiff Company</p>
              <p>Address: </p>
              <p>Hotline: </p>
              <p>Email:</p>
              <p>Business Certificate</p>
            </div>
            <span className="wrap-comic-profile-container-text">
              Terms and conditions of use
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_comic;
