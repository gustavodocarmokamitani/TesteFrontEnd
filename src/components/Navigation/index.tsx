import { Container, Nav, Navbar } from 'react-bootstrap';
import { Content } from './styles';

import { ReactComponent as Adm } from '../../assets/adm.svg';
import { ReactComponent as Cadastro } from '../../assets/cadastro.svg';
import { ReactComponent as Financeiro } from '../../assets/financeiro.svg';
import { ReactComponent as LinksExternos } from '../../assets/links_externos.svg';
import { ReactComponent as RH } from '../../assets/rh.svg';
import { ReactComponent as TI } from '../../assets/ti.svg';
import { ReactComponent as Treinamentos } from '../../assets/treinamentos.svg';

export function Navigation() {
    return (
        <Content>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#administrativo"><Adm /> Administrativo</Nav.Link>
                        <Nav.Link href="#cadastros-gerais"><Cadastro /> Cadastros Gerais</Nav.Link>
                        <Nav.Link href="#financeiro"><Financeiro />Financeiro</Nav.Link>
                        <Nav.Link href="#links-externos"><LinksExternos />Links Externos</Nav.Link>
                        <Nav.Link href="#rh"><RH />RH</Nav.Link>
                        <Nav.Link href="#ti "><TI />TI</Nav.Link>
                        <Nav.Link href="#treinamentos "><Treinamentos />Treinamentos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Content>
    )
}