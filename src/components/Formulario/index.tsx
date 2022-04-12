import { Col, Form, Row } from "react-bootstrap";
import Buttons from "../Buttons";
import { Content } from "./styles";

export function Formulario() {
    return (
        <Content>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Avaliador Principal</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled>Selecione</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Título da Avaliação</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Avaliador Principal</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled>Selecione</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Buttons text="Cancelar" color="#A4A4A4" />
                        <Buttons text="Continuar" color="#22304E" />
                    </Col>
                </Row>
            </Form>
        </Content>
    )
}