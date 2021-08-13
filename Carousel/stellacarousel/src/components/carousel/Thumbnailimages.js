import React from "react";
// import NatureImages from "../Images/Images";
function Thumbnailimages(props) {
  const { slides, currentSlide, status, slideIndex } = props;

  console.log(props);

  return (
    //  <!-- Thumbnail images -->

    <div className="row">
      {slides.NatureImages.map((item, i) => (
        <div key={i} className="column">
          <img
            className={`cursor ${status[slideIndex - 1] ? "active" : "demo"}`}
            src={item.image}
            alt={item.name}
            // slideIndex={index}
            // style={{ width: "100%" }}
            id={item.id}
            onClick={currentSlide}
          />
        </div>
      ))}
    </div>
  );
}

export default Thumbnailimages;
