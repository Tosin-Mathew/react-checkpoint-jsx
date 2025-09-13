import React from 'react';
import { Container, Card, Row, Col, Alert, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ImageComponent from './components/Image';
import './App.css';

// Add your first name here
const firstName = "John"; // Change this to your name or leave empty

function App() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {/* Product Card */}
          <Card className="shadow-lg border-0 product-card">
            <ImageComponent />
            <Card.Body className="p-4">
              <Name />
              <Price />
              <Description />
              <div className="text-center mt-4">
                <button className="btn btn-primary btn-lg px-5">
                  Add to Cart
                </button>
              </div>
            </Card.Body>
          </Card>

          {/* Greeting Message */}
          <Alert variant="info" className="text-center mt-4">
            <Alert.Heading>
              {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
            </Alert.Heading>
            <p className="mb-0">
              {firstName 
                ? "Thank you for checking out our premium headphones!" 
                : "Welcome to our store! Please introduce yourself."
              }
            </p>
          </Alert>

          {/* Display image if firstName is provided */}
          {firstName && (
            <div className="text-center mt-3">
              <Image 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                alt="Welcome"
                roundedCircle
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <p className="text-muted mt-2">Welcome aboard, {firstName}! 🎉</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
