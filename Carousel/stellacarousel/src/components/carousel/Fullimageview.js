import React from "react";
import Buttons from "./Buttons";
import Caption from "./Caption";

const Fullimageview = (props) => {
  // const hideImage = {
  //   display: "none",
  // };
  // const showImage = {
  //   display: "block",
  // };
  const { status, slides, slideIndex, plusSlides } = props;

  console.log(props);
  // console.log(props);
  return (
    <>
      {slides.NatureImages.map((item, index) => (
        <div
          className="mySlides"
          style={status[index] ? { display: "block" } : { display: "none" }}
          key={index}

          // style={hideImage}

          // style={`sts ? ${showImage} : ${hideImage}`}
        >
          {/* <!-- Full-width images with number text --> */}
          <div className="numbertext">
            {slideIndex} /{slides.NatureImages.length}
          </div>

          <img src={item.image} alt={item.name} />
        </div>
      ))}
      <Buttons plusSlides={plusSlides} />
      <Caption slides={slides} slideIndex={slideIndex} />
    </>
  );
};

export default Fullimageview;
