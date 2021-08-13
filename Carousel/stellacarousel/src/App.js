import React, { useState } from "react";

import Thumbnailimages from "./components/carousel/Thumbnailimages";
import Fullimageview from "./components/carousel/Fullimageview";

import NatureImages from "./components/Images/Images";
import "./components/carousel/carousel.css";

function App() {
  //  const [slides, setSlides] = useState(NatureImages);
  const [oldIndex, setOldIndex] = useState(1);
  const [imageIndex, setImageIndex] = useState(1);
  const [status, setStatus] = useState(
    new Array(NatureImages.NatureImages.length).fill(false)
  );
  status[0] = true;
  // useEffect(() => {
  //   const copy = [...status];
  //   copy[imageIndex - 1] = true;
  //   setStatus(copy);
  // }, []);

  // Next/previous controls
  function plusSlides(event) {
    let ind = Number(event.target.value);
    let indd = imageIndex;
    setImageIndex((indd += ind));
    console.log("ind", ind, "indd", indd);
    let newind = (indd += ind);
    let imgarrlength = NatureImages.NatureImages.length;

    if (ind < 1) {
      console.log(imgarrlength);
      setImageIndex(imgarrlength);
    } else {
      if (ind > NatureImages.NatureImages.length) {
        setImageIndex(1);
      } else {
        statusUpdate(newind);
      }
    }

    console.log("newind", newind, "imageIndex", imageIndex);
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
    console.log("n", typeof n, "oldIndex", typeof oldIndex);
    if (oldIndex !== n) {
      console.log("before", n, oldIndex);
      copy[oldIndex] = false;
      setStatus(copy);
      console.log("new status", status[oldIndex]);
      setOldIndex(n);
      setImageIndex(n);
      // statusUpdate();
      copy[imageIndex - 1] = true;
      setStatus(copy);
      console.log(status, imageIndex);
    }
    console.log("after", imageIndex, oldIndex);
    //   return (
    //     <Fullimageview
    //       plusSlides={plusSlides}
    //       slideIndex={imageIndex}
    //       slides={NatureImages}
    //       status={status}
    //   />
    // );
  };
  console.log(imageIndex);

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
