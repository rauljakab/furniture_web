import React, { useState } from 'react';
import { Card, Row, Col, Container, Carousel, Modal } from 'react-bootstrap';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/up1.jpg';
import Image5 from './images/up2.jpg';

const ImageGallery = () => {
    const images = [
        {
            id: 1,
            src: Image1,
            alt: 'Image 1',
            caption: 'Description for Image 1',
        },
        {
            id: 2,
            src: Image2,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 3,
            src: Image2,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 4,
            src: Image1,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 5,
            src: Image3,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 6,
            src: Image1,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 7,
            src: Image3,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 8,
            src: Image1,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 9,
            src: Image3,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 10,
            src: Image4,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 11,
            src: Image5,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 12,
            src: Image4,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 13,
            src: Image1,
            alt: 'Image 1',
            caption: 'Description for Image 1',
        },
        {
            id: 14,
            src: Image2,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 15,
            src: Image2,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 16,
            src: Image1,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 17,
            src: Image3,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 18,
            src: Image1,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 19,
            src: Image3,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 20,
            src: Image1,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        },
        {
            id: 21,
            src: Image3,
            alt: 'Image 2',
            caption: 'Description for Image 2',
        }
        // Add more images here
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setActiveIndex(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCarouselSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div>
            {/* <h1>Image Gallery</h1> */}
            <Row className="row-cols-1 row-cols-md-3 g-4 m-0" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                {images.map((image, index) => (
                    <Col key={image.id} onClick={() => handleImageClick(image, index)}>
                        <Card style={{ cursor: 'pointer' }}>
                            <Card.Img variant="top" src={image.src} alt={image.alt} />
                            <Card.Body>
                                <Card.Title className='fs-4'>{image.caption}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Carousel
                        interval={null}
                        activeIndex={activeIndex}
                        onSelect={handleCarouselSelect}
                    >
                        {images.map((image) => (
                            <Carousel.Item key={image.id}>
                                <img
                                    className="d-block w-100"
                                    src={image.src}
                                    alt={image.alt}
                                />
                                <Carousel.Caption>
                                    <h3>{image.caption}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ImageGallery;
