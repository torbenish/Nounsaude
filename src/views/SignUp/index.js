import { useState, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container } from "./style";
import { api } from "../../services/api"
import { toast } from "react-toastify"

const SignUp = () => {
  const [ data, setData ] = useState({})

  const history = useHistory();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      api
        .post('/create_sign', data)
        .then( response => {
          toast.success("Cadastro realizado com sucesso! Você está sendo redirecionado para a página de login", {
            hideProgressBar: false,
            onClose: () => history.push('/blog'),
          });
        })
        .catch( e => {
          toast.error("Oops, algo deu errado");
        });
    },
    [data, history]
  );

  return (
    <Container>
      <div className="card">
        <h5>Cadastre-se</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu nome"
            onChange={e => setData({ ...data, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informe sua cidade"
            onChange={e => setData({ ...data, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informe seu email"
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <input
            type="telefone"
            placeholder="Informe seu telefone"
            onChange={e => setData({ ...data, telephone: e.target.value })}
          />
          <input type="submit" value="Cadastrar" />
        </form>
        <Link to="/blog"> 
        Clique aqui para ir no blog.
        </Link>
      </div>
    </Container>
  );
};

export default SignUp;
