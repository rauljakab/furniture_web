import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import video from './videos/video.mp4';
import ParallaxContainer from './components/ParallaxContainer';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero eros, venenatis quis nisl quis, dignissim dictum tellus. Maecenas blandit efficitur est, tristique dictum purus consequat non. Proin vel ultrices libero. Vivamus lobortis enim vitae sodales sollicitudin. Nam mollis et enim vel aliquam. Sed lobortis nunc ac ex dignissim consectetur."

const CarouselContainer = styled(Carousel)`
    max-width: 67%;
    /* height: 400px; */
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const CarouselItem = styled(Carousel.Item)`
    transition: transform .8s ease-in-out;
    `;

const CarouselImage = styled.img`
    object-fit: cover;
    width: 100%;
    `;

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    align-items: center;
    `;

const ContactPage = () => {

    const windowHeight = window.innerHeight;


    return (
        <Div>
            {/* <ReactPlayer
                url={video}
                playing
                loop
                // muted
                width={"100%"}
                height={windowHeight - 100}
            // style={{ paddingTop: '3em' }}
            /> */}
            <CarouselContainer interval={5000}>
                <CarouselItem>
                    <CarouselImage src={Image1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <CarouselImage src={Image2} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <CarouselImage src={Image3} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </CarouselItem>
            </CarouselContainer>
            <ParallaxContainer
                text={text}
                title={"Title"}
                imgSrc={Image1}
                style={{ paddingTop: '2rem', maxWidth: '60%' }}
            ></ParallaxContainer>
            <ParallaxContainer
                text={text}
                title={"Title"}
                imgSrc={Image1}
                style={{ paddingTop: '2rem', maxWidth: '60%' }}
            ></ParallaxContainer>
            <ParallaxContainer
                text={text}
                title={"Title"}
                imgSrc={Image1}
                style={{ paddingTop: '2rem', maxWidth: '60%' }}
            ></ParallaxContainer>
            <ParallaxContainer
                text={text}
                title={"Title"}
                imgSrc={Image1}
                style={{ paddingTop: '2rem', maxWidth: '60%' }}
            ></ParallaxContainer>

        </Div>
    );
};

export default ContactPage;
