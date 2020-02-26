import React, { Component } from 'react'

export class Features extends Component {
  render() {

    const {prepTime, cookTime, serving, views} = this.props.info;

    return (
      <div class="item-feature">
        <ul>
            <li>
                <div class="feature-wrap">
                    <div class="media">
                        <div class="feature-icon">
                            <i class="far fa-clock"></i>
                        </div>
                        <div class="media-body space-sm">
                            <div class="feature-title">PREP TIME</div>
                            <div class="feature-sub-title">{prepTime} Mins</div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="feature-wrap">
                    <div class="media">
                        <div class="feature-icon">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div class="media-body space-sm">
                            <div class="feature-title">COOK TIME</div>
                            <div class="feature-sub-title">{cookTime} Mins</div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="feature-wrap">
                    <div class="media">
                        <div class="feature-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="media-body space-sm">
                            <div class="feature-title">SERVING</div>
                            <div class="feature-sub-title">{serving} People</div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="feature-wrap">
                    <div class="media">
                        <div class="feature-icon">
                            <i class="far fa-eye"></i>
                        </div>
                        <div class="media-body space-sm">
                            <div class="feature-title">VIEWS</div>
                            <div class="feature-sub-title">{views}</div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    )
  }
}

export default Features
