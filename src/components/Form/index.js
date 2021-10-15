import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FormStyle } from "./style";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const SignUp = () => {
  const [data, setData] = useState({});

  const history = useHistory();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      api
        .post("/create_sign", data)
        .then((response) => {
          toast.success(
            "Cadastro realizado com sucesso! Você será redirecionado para a página principal",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              onClose: () => history.push("/"),
            }
          );
        })
        .catch((e) => {
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
        <h5>Um plano moldado para você</h5>
        <p>
          Cada cliente nosso tem uma necessidade diferente e nós entendemos isso
          perfeitamente! Para isso criamos uma plataforma de saúde totalmente
          personalizada. Abaixo, preencha os seus dados pessoais, nossa equipe
          entrará em contato contigo para fazer o plano que mais encaixa no seu
          perfil:
        </p>

        <h6>#BeyouBeNoun</h6>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome Documental Completo"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome Social"
            onChange={(e) => setData({ ...data, socialname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cidade onde moro"
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Telefone"
            onChange={(e) => setData({ ...data, telephone: e.target.value })}
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
