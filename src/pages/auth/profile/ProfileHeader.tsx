import "./Profile.css"

function ProfileHeader() {
  return (
    <div id="profile-upper">
    <div id="profile-banner-image">
      <img src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg" alt="Banner image" />
    </div>
    <div id="profile-d">
      <div id="profile-pic">
        <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" />
      </div>
      <div id="u-name">Himalaya Singh</div>
      <div className="tb" id="m-btns">
        <div className="td">
          <div className="m-btn"><i className="material-icons">format_list_bulleted</i><span>Activity log</span></div>
        </div>
        <div className="td">
          <div className="m-btn"><i className="material-icons">lock</i><span>Privacy</span></div>
        </div>
      </div>
      <div id="edit-profile"><i className="material-icons">camera_alt</i></div>
    </div>
    <div id="black-grd"></div>
  </div>
  )
}

export default ProfileHeader