import React from 'react';
import './nicepage.css';
import './Page-1.css';

const ImageCard = (props) => (
  <div className="u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-1">
      <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
          <img src={props.imgUrl} alt="" class="u-expanded-width u-image u-image-default u-image-1" />
          <h5 className="u-text u-text-custom-color-1 u-text-3">{props.month}</h5>
          <p className="u-text u-text-grey-50 u-text-4">{props.desc}</p>
      </div>
  </div>
)

export default ImageCard