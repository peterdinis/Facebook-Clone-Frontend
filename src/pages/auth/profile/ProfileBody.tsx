import "./Profile.css";

function ProfileBody() {
  return (
    <>
    <div id="main-content">
    <div className="tb">
      <div className="td" id="l-col">
        <div className="l-cnt">
          <div className="cnt-label">
            <i className="l-i" id="l-i-i"></i>
            <span>Intro</span>
            <div className="lb-action"><i className="material-icons">edit</i></div>
          </div>
          <div id="i-box">
            <div id="intro-line">Front-end Engineer</div>
            <div id="u-occ">I love making applications with React Typescript.</div>
            <div id="u-loc"><i className="material-icons">location_on</i><a href="#">Bengaluru</a>, <a href="#">India</a></div>
          </div>
        </div>
        <div className="l-cnt l-mrg">
          <div className="cnt-label">
            <i className="l-i" id="l-i-p"></i>
            <span>Photos</span>
            <div className="lb-action" id="b-i"><i className="material-icons">keyboard_arrow_down</i></div>
          </div>
          <div id="photos">
            <div className="tb">
              <div className="tr">
                <div className="td"></div>
                <div className="td"></div>
                <div className="td"></div>
              </div>
              <div className="tr">
                <div className="td"></div>
                <div className="td"></div>
                <div className="td"></div>
              </div>
              <div className="tr">
                <div className="td"></div>
                <div className="td"></div>
                <div className="td"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-cnt l-mrg">
          <div className="cnt-label">
            <i className="l-i" id="l-i-k"></i>
            <span>Did You Know<i id="k-nm">1</i></span>
          </div>
          <div>
            <div className="q-ad-c">
              <a href="#" className="q-ad">
                <img src="https://imagizer.imageshack.com/img923/1849/4TnLy1.png" />
                <span>My favorite superhero is...</span>
              </a>
            </div>
            <div className="q-ad-c">
              <a href="#" className="q-ad" id="add_q">
                <i className="material-icons">add</i>
                <span>Add Answer</span>
              </a>
            </div>
          </div>
        </div>
        <div id="t-box">
          <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Advertising</a> <a href="#">Ad Choices</a> <a href="#">Cookies</a> <span id="t-more">More<i className="material-icons">arrow_drop_down</i></span>
          <div id="cpy-nt">Facebook &copy; <span id="curr-year"></span></div>
        </div>
      </div>
      <div className="td" id="m-col">
        <div className="m-mrg" id="p-tabs">
          <div className="tb">
            <div className="td">
              <div className="tb" id="p-tabs-m">
                <div className="td active"><i className="material-icons">av_timer</i><span>TIMELINE</span></div>
                <div className="td"><i className="material-icons">people</i><span>FRIENDS</span></div>
                <div className="td"><i className="material-icons">photo</i><span>PHOTOS</span></div>
                <div className="td"><i className="material-icons">explore</i><span>ABOUT</span></div>
                <div className="td"><i className="material-icons">archive</i><span>ARCHIVE</span></div>
              </div>
            </div>
            <div className="td" id="p-tab-m"><i className="material-icons">keyboard_arrow_down</i></div>
          </div>
        </div>
        <div className="m-mrg" id="composer">
          <div id="c-tabs-cvr">
            <div className="tb" id="c-tabs">
              <div className="td active"><i className="material-icons">subject</i><span>Make Post</span></div>
              <div className="td"><i className="material-icons">camera_enhance</i><span>Photo/Video</span></div>
              <div className="td"><i className="material-icons">videocam</i><span>Live Video</span></div>
              <div className="td"><i className="material-icons">event</i><span>Life Event</span></div>
            </div>
          </div>
          <div id="c-c-main">
            <div className="tb">
              <div className="td" id="p-c-i"><img src="https://picsum.photos/200/300" alt="Profile pic" /></div>
              <div className="td" id="c-inp">
                <input type="text" placeholder="What's on your mind?" />
              </div>
            </div>
            <div id="insert_emoji"><i className="material-icons">insert_emoticon</i></div>
          </div>
        </div>
        <div>
          <div className="post">
            <div className="tb">
              <a href="#" className="td p-p-pic"><img src="https://picsum.photos/200/300" alt="Rajeev's profile pic" /></a>
              <div className="td p-r-hdr">
                <div className="p-u-info">
                  <a href="#">John Doe</a> <a href="#">Lorem Ipsum</a>
                </div>
                <div className="p-dt">
                  <i className="material-icons">calendar_today</i>
                  <span>January 28, 2015</span>
                </div>
              </div>
              <div className="td p-opt"><i className="material-icons">keyboard_arrow_down</i></div>
            </div>
            <a href="#" className="p-cnt-v">
              <img src="https://picsum.photos/200/300" />
            </a>
            <div>
              <div className="p-acts">
                <div className="p-act like"><i className="material-icons">thumb_up_alt</i><span>25</span></div>
                <div className="p-act comment"><i className="material-icons">comment</i><span>1</span></div>
                <div className="p-act share"><i className="material-icons">reply</i></div>
              </div>
            </div>
          </div>
        </div>
        <div id="loading"><i className="material-icons">autorenew</i></div>
      </div>
      <div className="td" id="r-col">
        <div id="chat-bar">
          <div id="chat-lb"><i className="material-icons">contacts</i><span>Contacts</span></div>
          <div id="cts">
            <div className="on-ct active">
              <a href="#"><img src="https://picsum.photos/200/300" /></a>
            </div>
            <div className="on-ct active">
              <a href="#"><img src="https://picsum.photos/200/300" /></a>
            </div>
            <div className="on-ct">
              <a href="#"><img src="https://picsum.photos/200/300" /></a>
            </div>
            <div className="on-ct active">
              <a href="#"><img src="https://picsum.photos/200/300" /></a>
            </div>
            <div className="on-ct active">
              <a href="#"><img src="https://picsum.photos/200/300" /></a>
            </div>
            <div className="on-ct">
              <a href="#"><img src="https://picsum.photos/200/300" /></a>
            </div>
            <div className="on-ct">
              <a href="#"><img src="https://picsum.photos/200/300" /></a>
            </div>
            <div className="on-ct" id="ct-sett"><i className="material-icons">settings</i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default ProfileBody