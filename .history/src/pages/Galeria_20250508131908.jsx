import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Galeria() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/galeria-view")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-6">
      <h1 className="text-red-400 text-3xl font-bold">📸 Galería de Imágenes</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} className="w-full rounded-lg shadow-lg" alt="Imagen de galería" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
