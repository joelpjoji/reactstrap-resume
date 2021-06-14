import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
        <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> Achievements
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>Hash Code</storng>
                    <span>Mar 2021</span>
                  </h6>
                  <p className="pt">
                  <a href="https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/0000000000435809" target="blank">Ranked 4745'th Worldwide in Hash Code 2021   
                </a>
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
