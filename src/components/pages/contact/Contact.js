import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>CONTACT</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              Kochi , IN
            </p>
            <p className="grey-text text-lighten-3 pt">
              Phone: +91 7561017956
              <br />
              Email: 
              <a href="https://www.joelpjoji.tk" target="blank">
              joelpjoji1222@gmail.com
                </a>
              <br />
              Website: 
              <a href="https://www.joelpjoji.tk" target="blank">
                www.joelpjoji.tk
                </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
