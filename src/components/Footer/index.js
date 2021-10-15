import { FooterStyle } from "./style";
import logo from "../../assets/img/logo.png"

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-4">
               <img src={logo} alt="logo noun" height="40px"/>
                <p>Somos um plano de saúde para pessoas trans e não binárias.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mb-md-0 mb-4">
                <h5 className="text-uppercase">Serviços</h5>
                <ul className="list-unstyled">
                    <li><a href="/sign" >Assine já</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/signup">Fale Conosco</a></li>
                </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-4">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="http://">Instagram  <i class="fab fa-instagram"></i></a></li>
                    <li><a href="http://">Whatsapp  <i class="fab fa-whatsapp"></i></a></li>
                    <li><a href="http://">Twitter <i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>
            
        </div>
    </div>

    <div className="footer-copyright text-center py-3">Copyright - 2021 - Grupo9 - Gama Academy All Rights Reserved
    </div>
    </FooterStyle>
  );
};

export default Footer;
