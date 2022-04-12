import { Container } from "react-bootstrap";
import { Formulario } from "../Formulario";
import { Content } from "./styles";

export function Assessment() {
    return (
        <Content>
            <Container>
                <h4>Avaliação</h4>
                <Formulario/>                                  
            </Container>
        </Content>
    )
}