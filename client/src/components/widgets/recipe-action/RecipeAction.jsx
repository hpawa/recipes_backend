import React from 'react';

import './RecipeAction.css'

const RecipeAction = () => {
  return (
    <ul class="action-item">
      <li><button><i class="fas fa-print"></i></button></li>
      <li><button><i class="fas fa-expand-arrows-alt"></i></button></li>
      <li class="action-share-hover"><button><i class="fas fa-share-alt"></i></button>
        <div class="action-share-wrap">
          <a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" title="twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" title="linkedin"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" title="pinterest"><i class="fab fa-pinterest-p"></i></a>
          <a href="#" title="skype"><i class="fab fa-skype"></i></a>
          <a href="#" title="rss"><i class="fas fa-rss"></i></a>
        </div>
      </li>
    </ul>
  )
}

export default RecipeAction
