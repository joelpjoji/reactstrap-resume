import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
        <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> Certificates
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>NPTEL</storng>
                    <span>Mar 2020</span>
                  </h6>
                  <p className="pt">
                  Programming in C++  with a score pf 99%                  </p>
                </blockquote>
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>Microsoft Learn Student Ambassadors</storng>
                    <span>Feb 2021</span>
                  </h6>
                  <p className="pt">
                   for Python and Deep Learning in collaboration with SHapaAI
                  </p>
                </blockquote>
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>Coursera</storng>
                    <span>Sep 2019</span>
                  </h6>
                  <p className="pt">
                   Python for Data Science and AI (09/2019) authorized by IBM                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
