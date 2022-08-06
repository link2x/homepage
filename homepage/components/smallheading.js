import React, { Component } from 'React'

class SmallHeading extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return  <div class="row u-full-width bio pad">
              <div class="twelve columns">
                <h5>{this.props.children}</h5>
              </div>
            </div>
  }
}

export default SmallHeading
