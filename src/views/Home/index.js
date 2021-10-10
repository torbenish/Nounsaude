import Navbar from "../../components/Nav/Navbar"
import Footer from "../../components/Footer"

import { Container } from "./style"

const Home = () => {
    return (
        <>
        <Navbar/>
        <Container>
        <div>
            <h1>Home</h1>
        </div>
        </Container>
        <Footer/>
        </>
    )
}

export default Home

