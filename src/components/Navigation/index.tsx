import { Container, Nav, Navbar } from 'react-bootstrap';
import { Content } from './styles';
import adm from '../../assets/adm.svg';
import cadastro from '../../assets/cadastro.svg';
import financeiro from '../../assets/financeiro.svg';
import links_externos from '../../assets/links_externos.svg';
import rh from '../../assets/rh.svg';
import ti from '../../assets/ti.svg';
import treinamentos from '../../assets/treinamentos.svg';
import IconAdministrativo from '../iconsComponents/Administrativo/IconAdministrativo';
import IconCadastro from '../iconsComponents/Cadastro/IconCadastro';
import IconFinanceiro from '../iconsComponents/Financeiro/IconFinanceiro';
import IconLinksExternos from '../iconsComponents/LinkExternos/IconLinksExternos';
import IconRH from '../iconsComponents/RH/IconRH';
import IconTI from '../iconsComponents/TI/IconTI';
import IconTreinamentos from '../iconsComponents/Treinamentos/IconTreinamentos';


export function Navigation() {
    return (
        <Content>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#administrativo"><IconAdministrativo /> Administrativo</Nav.Link>
                        <Nav.Link href="#cadastros-gerais"><IconCadastro/> Cadastros Gerais</Nav.Link>
                        <Nav.Link href="#financeiro"><IconFinanceiro/>Financeiro</Nav.Link>
                        <Nav.Link href="#links-externos"><IconLinksExternos/> Externos</Nav.Link>
                        <Nav.Link href="#rh"><IconRH/>RH</Nav.Link>
                        <Nav.Link href="#ti "><IconTI/>TI</Nav.Link>
                        <Nav.Link href="#treinamentos "><IconTreinamentos/>Treinamentos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Content>
    )
}