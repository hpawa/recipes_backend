import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class notFound404 extends Component {
  render() {
    return (
      <section class="error-page-wrap padding-top-80 padding-bottom-80">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="error-content-box">
                <div class="error-figure-wrap">
                  <img src="img/figure/404.png" alt="404" class="img-fluid"/>
                  <div class="error-center-figure">
                    <img src="img/figure/404-middle.png" alt="404" class="img-fluid"/>
                  </div>
                </div>
                <h2 class="item-title">Sorry! Page Was Not Found</h2>
                <p class="item-details">The page you are looking is not available or has been removed.
                        Try going to Home Page by using the button below.</p>
                <Link to='/' class="item-btn">GO TO HOME PAGE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default 404
