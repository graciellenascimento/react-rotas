import logo from '../logo.svg'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <Container className="cardContainer">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71+mDoHG4mL.png" />
                <Card.Body>
                    <Card.Title>Tela inicial</Card.Title>
                    <Card.Text>
                        Atividade 03.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;
