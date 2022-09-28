import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PaletteModal(props) {
  const colorSample = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    border: "10px solid #DBE8D8",
    borderRadius: ".5rem",
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <h2 style={{ color: "#2cb5c1" }}>Color Description:</h2>
              <h5 style={{ color: "#970C10" }}>RGB Value: {props.rgbString}</h5>
              <h5 style={{ color: "#153250" }}>
                HEX Value: {props.element.hexVal}
              </h5>
            </Col>
            <Col>
              <div
                style={{
                  ...colorSample,
                  backgroundColor: `${props.element.hexVal}`,
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaletteModal;
