import React, { Component } from 'React';
import { Container, Row } from '../components/skeletonhelpers.js'

class Logo extends Component {
  render() {
    return  <div class="one-half column showcenter u-max-full-width">
              <img class="resize_fit_center showcenter" src="https://link2x.us/i/STIFLEWEBP.webp" alt="Nick Simmons Logo"/>
            </div>
  }
}

class Header extends Component {
  render() {
    return  <Row>
              <Logo />
              <div class="one-half column bio pad">
                <h2>
                  Hi, there!
                </h2>
                <p>
                  I am Eden Simmons.<br />
                  I'm a multi-genre song-writer and producer.<br />
                  I've been making music since 2006.<br />
                </p>
              </div>
            </Row>
  }
}

export default Header
