import { Button } from "react-bootstrap";
import { Content } from "./styles";

interface Props {
    text: string;
    color: string;
}

const Buttons = ({ text, color }: Props) => {
    return (
        <Content>
            <Button style={{ background: `${color}` }} size="lg">
                {text}
            </Button>
        </Content>
    )
}

export default Buttons;