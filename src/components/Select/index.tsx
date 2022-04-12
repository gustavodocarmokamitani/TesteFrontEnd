import { Form } from "react-bootstrap";
import { Content } from "./styles";

interface Props {
    label?: string;
    option?: string;
    options?: string[];
}

export function Select({ label, option, options }: Props) {

    return (
        <Content>
            <Form.Label>{label}</Form.Label>
            <Form.Select aria-label="Default select example">
                <option disabled selected>{option}</option>
                {options && options.map((option) => (<option> {option} </option>))}
            </Form.Select>
        </Content >
    )
}