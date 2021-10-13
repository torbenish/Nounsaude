import { FooterStyle } from "./style.css"

const Footer= () => {
    return (
        <FooterStyle>
<footer>
    <img src="img/noun.JPG" alt=" logo noun" height="80px">
    <div class="boxs">
        <h2>Home</h2>
         <ul>
            <li><a href="#">Especialistas</a></li>
            <li><a href="#">Assine Já</a></li>
        </ul>
    </div>
    <div class="boxs">
        <h2>Blog</h2>
        <ul>
          <li><a href="#">Imprensa</a></li>
          <li><a href="#">Formulário</a></li>
        </ul>
    </div>
    <div class="boxs">
        <h2>ContactMe</h2>
        <ul>
            <li><a href="#">Fale Conosco</a></li>
        </ul>
    </div>
    <div class="boxs">
        <h2>Sobre nós</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ad quibusdam dolore cum, officia odio sapiente quod reiciendis sint, similique voluptatem praesentium quam maiores voluptate placeat ex eos sit libero?</p>
    </div>
</footer>
<div class="footer">
    <div class="sociais">
        <div class="social">
            <a href="http://"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="social">
            <a href="http://"><i class="fab fa-whatsapp"></i></a>
        </div>
        <div class="social">
            <a href="http://"><i class="fab fa-twitter"></i></a>
        </div>
    </div>
</div>

<main>
    <p>Copyright - 2021 - Grupo9 - Gama Academy All Rights Reserved</p>
</main>

        </FooterStyle>
    )
}

export default Footer
