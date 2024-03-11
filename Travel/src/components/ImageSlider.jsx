import { useState } from "react";

const ImageSlider = ({ blogs }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % blogs.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + blogs.length) % blogs.length);
    };

    return (
        <div className="slider">
            <button onClick={prevSlide}>Previous</button>
            <div className="slide">
                <h2>{blogs[currentSlide].title}</h2>
                <h3>{blogs[currentSlide].subtitle}</h3>
                <img src={blogs[currentSlide].image} alt={blogs[currentSlide].title} />
                <p>{blogs[currentSlide].content}</p>
            </div>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default ImageSlider