import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FormStyle } from "./style";
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
          toast.success("Cadastro realizado com sucesso! Você será redirecionado para a página principal", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => history.push('/'),
          });
        })
        .catch( e => {
          toast.error("Erro no cadastro", {
            autoClose: 3100,
          });
        });
    },
    [data, history]
  );

  return (
    <FormStyle>
      <div className="card">
        <h5>Faça parte</h5>
        <p>Preencha os seus dados pessoais, nossa equipe entrará em contato contigo para fazer o plano que mais encaixa no seu perfil.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu nome completo"
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
          <div className="button-center">
          <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </FormStyle>
  );
};

export default SignUp;