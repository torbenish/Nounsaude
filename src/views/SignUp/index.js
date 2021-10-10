import Form from "../../components/Form"
import Navbar from "../../components/Nav/Navbar"
import Footer from "../../components/Footer"
import { Container } from "./style";

const index = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <Form/>
    </Container>
    <Footer/>
    </>
  )
}

export default index

