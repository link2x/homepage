import React, { Component } from 'React';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LinkButton extends Component {
  constructor(props) {
    super(props)
  }

  defineWidth = () => {
    return this.props.width + ' columns'
  }

  render() {
    return  <div class={this.defineWidth()}>
                <a class="button button-primary u-full-width" style={{paddingTop: 0.25 + 'em'}} href={this.props.href}>
                    <FontAwesomeIcon icon={this.props.icon} size="2x" />
                </a>
            </div>
  }
}

export default LinkButton
