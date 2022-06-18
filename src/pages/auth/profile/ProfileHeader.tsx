import "./Profile.css"

function ProfileHeader() {
  return (
    <div className="relative">
    <div className="h-96 overflow-hidden z-1">
      <img src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg" alt="Banner image" />
    </div>
    <div className="absolute left-14 bottom-0 right-0 h-44 z-2">
      <div className="w-44 h-44 border-r-4 mt-7 overflow-hidden shadow">
        <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" />
      </div>
      <div className="absolute top-32 left-52 text-xl font-bold text-blue-50">Peter DOe"</div>
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