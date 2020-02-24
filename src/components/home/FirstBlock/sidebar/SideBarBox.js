import React, { Component } from 'react'
import SubscribeBox from './SubscribeBox'

export class SideBarBox extends Component {
  render() {
    return (
      <div class="col-lg-4 sidebar-widget-area sidebar-break-md">
        <SubscribeBox/>
      </div>
    )
  }
}

export default SideBarBox
