import { useState } from "react";
import { ProductImagesTypes, MainImageTypes } from "../types";
import comingSoon from "../../assets/comingSoon.jpg";

const ProductImages = (props: ProductImagesTypes) => {
  const imgs = props.images;

  // main (big) image state
  const [mainImage, setMainImage] = useState<MainImageTypes>(
    imgs[0] || {
      url: { comingSoon },
      filename: "image coming soon",
    }
  );

  return (
    <div>
      {/* main image */}
      <div>
        <img
          src={mainImage.url}
          alt="main"
          className="main"
          width="500px"
          height="250px"
        />
      </div>

      {/* small images */}
      <div className="gallery">
        {imgs.map((img, index) => {
          const { url, filename } = img;
          return (
            <img
              key={index}
              src={url || comingSoon}
              alt={filename || "coming soon"}
              width="100px"
              height="70px"
              className={`${url === mainImage.url ? "active" : null}`}
              onClick={() => {
                setMainImage(imgs[index]);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
