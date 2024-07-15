const AboutUser = () => {
  return (
    <div className="wrap-comic-profile-box">
      <div className="wrap-comic-profile-box-header">
        <img
          className="wrap-comic-profile-box-header-avata"
          src="/images/Comic/img1.png"
        ></img>
        <div className="wrap-comic-profile-box-header-ID">
          <p>User ID: 12345ds234gf</p>
          <p>Join 23/12/2023</p>
        </div>
      </div>
      <img
        className="wrap-comic-profile-box-iconpen"
        src="/images/Comic/img3.png"
      ></img>
      <div className="comic-des">
        <div className="comic-des-1 d-flex">
          <img className="img-icon" src="/images/Comic/img2.png"></img>
          <p>Favorite</p>
        </div>
        <div className="comic-des-1 d-flex">
          <img className="img-icon" src="/images/Comic/feedback.png"></img>
          <p>Feedback</p>
        </div>
        <div className="comic-des-1 d-flex">
          <img className="img-icon" src="/images/Comic/setting.png"></img>
          <p>Setting</p>
        </div>
        <hr></hr>
        <div className="comic-des-1 d-flex comic-des-4">
          <img className="img-icon" src="/images/Comic/logout.png"></img>
          <p>LayOut</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUser;
