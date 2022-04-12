import { Form } from "react-bootstrap";
import { Content } from "./styles";

interface Props {
    label?: string;
}

export function Input({label} : Props) {
    return (
        <Content>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" placeholder="" />
        </Content>
    )
}