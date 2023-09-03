import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';


const Footer = () => {
return (
    <footer className='site-footer' >
        <Container>
            <Row>
                <Col xs='6' sm='3' className='text-left'>
                    <h5>Deep Connections</h5>
                        <p>Dedicated to healing hearts</p>
                        
                </Col>
            </Row>
        </Container>
    </footer>
)
}

export default Footer;