import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../../assets/Images/Slider/one.jpg'
import two from '../../../assets/Images/Slider/two.jpg'
import three from '../../../assets/Images/Slider/three.jpg'
import four from '../../../assets/Images/Slider/four.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100" src={one} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Wedding Photography</h3>
                        <p>Eat, drink, and be married</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={two} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Food Photography</h3>
                        <p>Is it just me or does this meal look more scrumptious because I'm on a diet?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={three} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Maternity Photoshoot </h3>
                        <p>Say hello to my little friend</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={four} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Model Photography</h3>
                        <p>A model's just an imitation of the real thing</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
export default Banner;