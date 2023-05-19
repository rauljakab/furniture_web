// import { useEffect } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';

const ParallaxCard = styled(animated(Card))`
  will-change: transform;
  border: 0;
`;

const ParallaxContainer = (props) => {
    const [showCards, setShowCards] = React.useState(false);
    const ref = useRef(null);

    const trail = useTrail(1, {
        config: { mass: 1, tension: 140, friction: 40 },
        opacity: showCards ? 1 : 0,
        transform: showCards ? 'translateX(0px)' : 'translateX(30%)',
    });

    const trail2 = useTrail(1, {
        config: { mass: 1, tension: 140, friction: 40 },
        opacity: showCards ? 1 : 0,
        transform: showCards ? 'translateX(0px)' : 'translateX(-30%)',
    });

    const handleScroll = () => {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom > 0) {
            setShowCards(true);
        }
        else {
            setShowCards(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Container style={props.style}>
            <Row style={{ alignItems: 'center' }}>
                <Col md={6} className="mb-4">
                    <ParallaxCard style={trail[0]} ref={ref}>
                        <Card.Body style={{ border: 0 }}>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Card.Body>
                    </ParallaxCard>
                </Col>
                <Col md={6} className="mb-4">
                    <ParallaxCard style={trail2[0]} ref={ref}>
                        <Card.Img src={props.imgSrc} alt="card" />
                    </ParallaxCard>
                </Col>
            </Row>
        </Container>
    );
};

export default ParallaxContainer;
