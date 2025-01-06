import { Container, Navbar } from "react-bootstrap"
import "../style/menu.css"

const CTATool = () => {
    return(
        <Navbar className="x-navbar">
            <Container className="x-navbar">
            <div className="x-cta-group">
                <ul className="x-cta-tool">
                    <li><a href="#footer-menu" className="x-cta-tool-list">Home</a></li>
                    <li><a href="#footer-menu" className="x-cta-tool-list">Whistlist</a></li>
                    <li><a href="#footer-menu" className="x-cta-tool-list">About Us</a></li>
                    <li><a href="#footer-menu" className="x-cta-tool-list">Contact Us</a></li>
                </ul>
            </div>
        </Container>
        </Navbar>
        
    )
}

export default CTATool