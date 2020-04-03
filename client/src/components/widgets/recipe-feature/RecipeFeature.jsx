import React from 'react';

import './RecipeFeature.css';

const RecipeFeature = ({preptime, cooktime, serving, views}) => {
  return (
    <div>
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
                    <div class="feature-sub-title">{preptime} Mins</div>
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
                  <div class="feature-sub-title">{cooktime} Mins</div>
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
    </div>
  )
}

export default RecipeFeature
