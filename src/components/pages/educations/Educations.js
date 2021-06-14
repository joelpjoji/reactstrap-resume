import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
      <div>
      <div className="card z-depth-0">
        <div className="card-content">
          <h6>
            <strong><i class="fas fa-graduation-cap"></i>EDUCATION</strong>
          </h6>
          <hr />
          <div className="row mt">
            <div className="col s12">
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong>Bachelor in Computer Science Engineering</strong>
                  <span>2018 - 2022</span>
                </h6>
                <p className="pt">
                 Albertian Institute of Science & Technology under <br></br>APJ Abdul Kalam Technological University
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
