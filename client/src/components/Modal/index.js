import React from "react";
import Modal from "react-responsive-modal";
import { Row, Col } from "../Grid";

function myModal(props) {
    return(
        <Modal open={props.open} onClose={props.closeModal} center>
            <Row classes="m-5 text-center">
                <Col size="md-12">
                    <h1>{props.message}</h1>
                </Col>
            </Row>
            <Row classes="justify-content-center text-center">
                <Col size="md-6">
                    <button className="mx-autho btn btn-primary" onClick={props.closeModal}>Close</button>
                </Col>
            </Row>
        </Modal>
    )
}

export default myModal;
