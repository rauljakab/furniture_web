import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
import image from './images/11.jpg';
import logo from './images/logo/logoBlack.png';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/up1.jpg';
import Image5 from './images/up2.jpg';

const CardContainer = styled(Card)`
    border: 0;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    min-height: 180px;
    border-radius: 10px;
    `;

const CardBody = styled(Card.Body)`
    text-align: center;
    font-family: 'Roboto';
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: ${props => (props.index % 2 === 1 ? 'rgb(33, 37, 41)' : 'white')};
    color: ${props => (props.index % 2 === 1 ? 'white' : 'black')};
`;

const ourStrenghts = [
    {
        title: `Devis en 2 Semaines`,
        text: `Après validation de votre demande, vous recevez votre devis en 2 semaines.`
    },
    {
        title: `Un architecte d'intérieur vous accompagne`,
        text: `Un architecte d’intérieur dessine votre meuble sur mesure et vous conseille pendant toute la phase de conception.`
    },
    {
        title: 'Notre finition Laquée Mat',
        text: `Le Laquage Mat est notre spécialité. Son avantage ? Offrir une surface résistante, lessivable, doux au toucher et disponible en + de 2000 couleurs.`
    },
    {
        title: `Un design unique`,
        text: `Chaque meuble que nous dessinons est unique. Nos lignes intemporelles offre une touche décorative en harmonie avec votre intérieur.`
    },
    {
        title: `Nos équipes sont passionnés`,
        text: `Nos équipes aiment leur métier et partagent notre goût du travail bien fait. De l’installation au nettoyage final, nous apportons un soin particulier à chaque détail.`
    },
    {
        title: `Un chef de projet supervise votre installation`,
        text: `Un chef de projet dédié vous accompagne pour l’installation. Il répond à vos questions et s’adapte à vos contraintes pendant toute la durée du projet.`
    }
]

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
    }
]

function HomePage() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const logoHeight = isMobile ? '30%' : '45%';



    return (
        <>
            <div style={{ height: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
                <img style={{ opacity: 0.5, height: logoHeight, alignSelf: 'center' }} src={logo} alt='Logo' ></img>
            </div>
            <Container style={{ flexGrow: 1, minHeight: 'calc(100vh - 90px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontFamily: 'Roboto', fontWeight: 700, marginBottom: '2rem' }}>Qui Sommes-Nous ?</h1>
<<<<<<< HEAD
                <p style={{ fontFamily: 'Roboto', textAlign: 'center' }}><b>Masmenuiserie</b> est une entreprise de menuiserie  spécialisée dans la fabrication de meubles sur mesure à dans toute l’Europe</p>
                <h1 style={{ fontFamily: 'Roboto', fontWeight: 700, marginBottom: '1rem', marginTop: '4.5rem' }}>Nos points forts</h1>
=======
                <p style={{ fontFamily: 'Roboto' }}><b>Masmenuiserie</b> est une entreprise de menuiserie  spécialisée dans la fabrication de meubles sur mesure à dans toute l’Europe</p>
                <h1 style={{ fontFamily: 'Roboto', fontWeight: 700, marginBottom: '2rem', marginTop: '4.5rem' }}>Nos points forts</h1>
>>>>>>> 00150f41bb63b7ed75eef90a9aaf67342cb8fb3a
                <Row className="row-cols-1 row-cols-md-3 g-4 m-0">
                    {ourStrenghts.map((card, index) => (
                        <Col>
                            <CardContainer>
                                <CardBody index={index}>
                                    <Card.Title style={{ fontWeight: 'bold' }}>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </CardBody>
                            </CardContainer>
                        </Col>
                    ))}
                </Row>
                <h1 style={{ fontFamily: 'Roboto', fontWeight: 700, marginBottom: '2rem', marginTop: '4.5rem' }}>Nos Meubles Sur-Mesure</h1>
                <Row className="row-cols-1 row-cols-md-3 g-4 m-0">
                    {images.map((image) => (
                        <Col key={image.id}>
                            <Card style={{ border: 0 }}>
                                <Card.Img variant="top" src={image.src} alt={image.alt} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>{image.caption}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
            <Footer />
        </>
    )
}

export default HomePage;