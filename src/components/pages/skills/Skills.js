import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">HTML</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '70%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">CSS</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '50%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">c++</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '60%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Java</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '80%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Python</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '80%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Javascript</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '90%'}}></div>
                </div>
              </div>
              <h6 className="white-text">
              <strong>SOFT SKILLS</strong>
              <hr />
            </h6>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Communication</p>
                
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Problem solving</p>
                
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Teamwork</p>
                
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Leadership</p>
                
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Proactive</p>
                
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Networking</p>
                
              </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    )
  }
}
