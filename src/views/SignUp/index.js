import Form from "../../components/Form"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Container } from "./style";
import bannerform from "../../assets/img/bannerform.JPG"

const SignUp = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <div className="formimage">
      <img src={bannerform} width="100%" alt="Banner do form"/>
      </div>
    <Form/>
    </Container>
    <Footer/>
    </>
  )
}

export default SignUp

