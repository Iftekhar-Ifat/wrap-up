import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <h1 className="not-found-title">404</h1>
                        <p className="not-found-text">Oops! Page not found.</p>
                        <Button variant="primary">
                            <Link
                                href="/"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                Home Page
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .not-found-page {
                    background-color: #f8f9fa;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                }

                .not-found-title {
                    color: #007bff;
                    font-size: 72px;
                    margin-bottom: 20px;
                }

                .not-found-text {
                    color: #343a40;
                    font-size: 24px;
                }
            `}</style>
        </div>
    );
};

export default NotFoundPage;
