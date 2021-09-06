import React, { useState } from "react";

import Thumbnailimages from "./components/carousel/Thumbnailimages";
import Fullimageview from "./components/carousel/Fullimageview";

import NatureImages from "./components/Images/Images";
import "./components/carousel/carousel.css";

function App() {
  const [imageIndex, setImageIndex] = useState(1);
  const [status, setStatus] = useState(
    new Array(NatureImages.NatureImages.length)
      .fill()
      .map((item, idx) => idx === 0)
  );

  // Next/previous controls
  function plusSlides(event) {
    let ind = Number(event.target.value);
    let indd = imageIndex;
    console.log(ind, indd);
    let newind = (indd += ind);

    let imgarrlength = NatureImages.NatureImages.length;

    console.log(newind, imgarrlength);
    let nex = newind;
    if (newind < 1) {
      nex = NatureImages.NatureImages.length;
    }
    if (newind > NatureImages.NatureImages.length) {
      nex = 1;
    }

    setImageIndex(nex);
    statusUpdate(nex);
  }

  // if (n > slides.length) {imageIndex = 1}
  // if (n < 1) {imageIndex = slides.length}

  // Thumbnail image controls
  const currentSlide = (e) => {
    const num = Number(e.target.id);

    console.log("num", num);
    statusUpdate(num);
  };

  // boolean status update
  const statusUpdate = (n) => {
    const copy = [...status];
    copy.fill(false);

    setImageIndex(n);
    copy[n - 1] = !copy[n - 1];
    setStatus(copy);
  };

  return (
    //  <!-- Container for the image gallery -->
    <div className="container">
      <Fullimageview
        plusSlides={plusSlides}
        slideIndex={imageIndex}
        slides={NatureImages}
        status={status}
      />

      <Thumbnailimages
        slides={NatureImages}
        currentSlide={currentSlide}
        status={status}
        slideIndex={imageIndex}
      />
    </div>
  );
}

export default App;
