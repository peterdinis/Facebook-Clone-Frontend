import React from 'react'

function ProfileBody() {
  return (
    <div className="tb">
      <div className="td" id="l-col">
        <div className="l-cnt">
          <div className="cnt-label">
          <i className="l-i" id="l-i-i"></i>
            <span>Intro</span>
            <div className="lb-action"><i className="material-icons">edit</i></div>
          </div>
          <div id="i-box">
            <div id="intro-line">
            Front-end Engineer
            </div>
            <div id="u-occ">I love making applications with Angular.</div>
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
      </div>
    </div>
  )
}

export default ProfileBody