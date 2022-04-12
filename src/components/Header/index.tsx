import rvc from '../../assets/Logo_RVC.png'
import email from '../../assets/email.svg'
import bell from '../../assets/bell_1.svg'
import { Content } from './styles'
import { Container, Nav, Navbar } from 'react-bootstrap'

interface Props {
    name: string;
}

export function Header({ name }: Props) {
    return (
        <Content>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="#home"> <img src={rvc} alt="rvc"/></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">  <img src={email} alt="email" width="29px"/></Nav.Link>
                        <Nav.Link href="#features">       <img src={bell} alt="bell"width="24px" /></Nav.Link>
                        <Nav.Link href="#pricing"><p>Olá, <strong>{name}!</strong></p></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Content>
    )
}