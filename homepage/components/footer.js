import React, { Component } from 'React';
import { Container, Row, Column } from '../components/skeletonhelpers.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return  <div class="footer u-full-width pad pad-bottom">
              <Container>
                <Row>
                  <Column width='four'>
                    <p>
                      <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en_US" title="Creative Commons BY-SA">
                        <FontAwesomeIcon icon={ faCreativeCommons } />
                      </a><br />
                      2006-2022
                    </p>
                  </Column>
                  <Column width='four'>
                    <p>
                      Eden Simmons
                    </p>
                  </Column>
                  <Column width='four'>
                    <p>
                      <FontAwesomeIcon icon={ faEnvelope } /><br />
                      Booking: <span id="email">su.x2knil@tmgm</span><br />
                      Others: <span id="email">su.x2knil@nede</span>
                    </p>
                  </Column>
                </Row>
              </Container>
            </div>
  }
}

export default Footer
