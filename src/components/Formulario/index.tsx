import { Col, Form, Row } from "react-bootstrap";
import Buttons from "../Buttons";
import { Input } from "../Input";
import { Select } from "../Select";
import { Content } from "./styles";

export function Formulario() {

    const options = ["One", "Two", "Three"]


    return (
        <Content>
            <Form>
                <Row>
                    <Col>
                        <Select label="Avaliador Principal" option="Selecione" options={options} />
                    </Col>
                    <Col>
                        <Input label="Título da Avaliação" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Select option="Selecionar Projetos" options={options} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Buttons text="Continuar" color="#22304E" />
                        <Buttons text="Cancelar" color="#A4A4A4" />
                    </Col>
                </Row>
            </Form>
        </Content>
    )
}