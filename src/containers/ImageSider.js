import React from 'react';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

class ImageGalleryComponent extends React.Component {
 
    render() {

        const images = [
        {
          original: 'assets/images/slide_images/img1.jpg',
        },
        {
          original: 'assets/images/slide_images/img2.jpg'
        },
        {
          original: 'assets/images/slide_images/img3.jpg'
        },
        {
          original: 'assets/images/slide_images/img4.jpg'
        },
        {
          original: 'assets/images/slide_images/img5.jpg'
        },
        {
          original: 'assets/images/slide_images/img6.jpg'
        }
      ];
   
      return (
        <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            showNav={false}
            slideDuration={1000}
            slideInterval={3000}
            autoPlay={true}
        />
      );
    }
   
  }

  export default ImageGalleryComponent;