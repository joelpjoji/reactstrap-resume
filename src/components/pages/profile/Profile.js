import React, { Component } from 'react';
import ImgProfile from "../../images/person1.jpg";

export default class Profile extends Component {
  render() {
    return (
        <div>
        <div className="avatarImg">
            <img className="circle responsive-img"
            src={ImgProfile}
            alt="Joel P Joji"
            />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
            <div className="card-content center social">
                <h2 className="grey-text text-lighten-3">
                <strong>Joel P Joji</strong>
            </h2>
            <h5 className="grey-text text-darken-1">Full Stack Web Developer</h5>
                <a href="https://facebook.com/joelpjoji12" target="blank">
                    <i className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="https://twitter.com/joelpjoji" target="blank">
                    <i className="fab fa-twitter-square fa-2x"></i>
                </a>
                <a href="https://linkedin.com/in/joelpjoji" target="blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/joelpjoji" target="blank">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
            </div>
        </div>
        
      </div>
    )
  }
}
