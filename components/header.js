import React, { Component } from 'react';
import Image from 'next/image'
import { Container, Row } from '../components/skeletonhelpers.js'

class Logo extends Component {
  render() {
    return  <div className="one-half column showcenter u-max-full-width">
              <Image className="resize_fit_center showcenter" src="https://link2x.us/i/STIFLEWEBP.webp" width='200%' height='100%' layout='responsive' objectFit='contain' alt="Logo" />
            </div>
  }
}

class Header extends Component {
  render() {
    return  <Row>
              <Logo />
              <div className="one-half column bio pad">
                <h2>
                  Hi, there!
                </h2>
                <p>
                  I am Eden Simmons.<br />
                  I&apos;m a multi-genre song-writer and producer.<br />
                  I&apos;ve been making music since 2006.<br />
                </p>
              </div>
            </Row>
  }
}

export default Header
