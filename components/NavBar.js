import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaChalkboardTeacher, FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { useAuth } from '../context/AuthProvider';
import CreateAccountModal from './AuthComponent/CreateAccountModal';
import SignInModal from './AuthComponent/SignInModal';

const NavBar = () => {
    const auth = useAuth();
    const { logOut } = useAuth();
    const currentUser = auth.currentUser;

    const [showCAModal, setShowCAModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);

    const handleCAModalClose = () => {
        setShowCAModal(false);
    };
    const handleSignInModalClose = () => {
        setShowSignInModal(false);
    };
    const handleLogout = () => {
        try {
            logOut(auth)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    alert(error.message);
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="justify-content-end"
                style={{ backgroundColor: '#524a90' }}
            >
                <Container>
                    <Link href="/">
                        <Navbar.Brand>
                            <Image
                                src="/logo.png"
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="ml-auto d-flex justify-content-around w-100">
                            <div className="d-flex justify-content-around w-100 w-md-75">
                                <Link className="nav-link text-white" href="/">
                                    <div className="text-center">
                                        <AiFillHome size="30px" />
                                        <div>Home</div>
                                    </div>
                                </Link>
                                <Link
                                    className="nav-link text-white"
                                    href="/courses"
                                >
                                    <div className="text-center">
                                        <FaChalkboardTeacher size="30px" />
                                        <div>Course</div>
                                    </div>
                                </Link>
                                <Link
                                    className="nav-link text-white"
                                    href="/about-us"
                                >
                                    <div className="text-center">
                                        <BsFillChatLeftDotsFill size="30px" />
                                        <div>About Us</div>
                                    </div>
                                </Link>
                            </div>
                            <hr className="d-md-none text-white-150"></hr>
                            <div className="d-flex text-white justify-content-center align-items-center md-w-25 w-100">
                                {currentUser ? (
                                    <>
                                        <div
                                            className="text-center me-4"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <FaUserAlt size="30px" />{' '}
                                            <div>{currentUser.displayName}</div>
                                        </div>
                                        <div>
                                            <Button
                                                variant="light"
                                                className="ms-4"
                                                onClick={handleLogout}
                                            >
                                                Log Out
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-center me-4">
                                            <Button
                                                variant="light"
                                                onClick={() =>
                                                    setShowSignInModal(true)
                                                }
                                            >
                                                Sign In
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                variant="light"
                                                onClick={() =>
                                                    setShowCAModal(true)
                                                }
                                            >
                                                Create Account
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showCAModal ? (
                <CreateAccountModal
                    showModal={showCAModal}
                    handleModalClose={handleCAModalClose}
                    setShowModal={setShowCAModal}
                />
            ) : null}
            {showSignInModal ? (
                <SignInModal
                    showModal={showSignInModal}
                    handleModalClose={handleSignInModalClose}
                    setShowModal={setShowSignInModal}
                />
            ) : null}
        </>
    );
};
export default NavBar;
