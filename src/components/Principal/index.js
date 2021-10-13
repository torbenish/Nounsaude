import img1 from '../../assets/imagemprincipal.jpg';
import './style.css';
import logo from '../../assets/logo.png';
import Botao from '../Botao';

export default function Principal() {
  return (
    <div className='estiloPrincipal'>
      <img src={img1} />
      <img src={logo} className='logo' />
        <div className='intro'>
          <h1>Viva sua verdadeira vida.</h1>
					<p>Um plano de saúde para afirmação de gênero e terapia hormonal na palma da sua mão.</p>
					<Botao texto='Como Funciona?' />
        </div>
      </div>
      )
  }