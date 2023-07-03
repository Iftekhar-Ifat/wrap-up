import React from 'react';
import { Badge, Modal } from 'react-bootstrap';
import { BsArrowRightShort } from 'react-icons/bs';

const StatusInfoModal = ({ showModal, setShowModal }) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Status Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-start align-items-center m-2">
                    <div className="w-25">
                        <Badge bg="secondary">Enrolled</Badge>
                        <BsArrowRightShort size="25px" />
                    </div>
                    <div>
                        You are just Enrolled not purchased the course yet
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-center m-2">
                    <div className="w-25">
                        <Badge bg="warning" text="dark">
                            In Progress
                        </Badge>
                        <BsArrowRightShort size="25px" />
                    </div>
                    <div>
                        Payment is complete, waiting for admin&apos;s approval.
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-center m-2">
                    <div className="w-25">
                        <Badge bg="info">On going</Badge>
                        <BsArrowRightShort size="25px" />
                    </div>
                    <div>
                        Payment is approved by admin and course is on going
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-center m-2">
                    <div className="w-25">
                        <Badge bg="success">Completed</Badge>
                        <BsArrowRightShort size="25px" />
                    </div>
                    <div>The course is completed</div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default StatusInfoModal;
