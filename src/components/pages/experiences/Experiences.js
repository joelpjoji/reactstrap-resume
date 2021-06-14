import React, { Component } from 'react'

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i>EXPERIENCE
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>App Developer</storng>
                    <span>Jan 2021 - Aug 2021</span>
                  </h6>
                  <p className="pt">
                  A startup to make learning more conveninet and feasible financially
                  <br></br>Application Development.<br></br> Software Development Lifecycle (SDLC).<br></br> Release Management
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
