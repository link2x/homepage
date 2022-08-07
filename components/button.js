import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LinkButton extends Component {
  constructor(props) {
    super(props)
  }

  defineWidth = () => {
    return this.props.width + ' columns'
  }

  render() {
    return  <div className={this.defineWidth()}>
                <a className="button button-primary u-full-width" href={this.props.href}>
                    <FontAwesomeIcon icon={this.props.icon} size='2x' style={{paddingTop: 0.25 + 'em'}} />
                    <span style={{marginLeft: 1 + 'em', position: 'relative', top: -0.25 + 'em'}}>
                      {this.props.label ? this.props.label : ''}
                    </span>
                </a>
            </div>
  }
}

export default LinkButton
