import { BotaoStyle } from "./style";

export default function Botao(props) {
  return (
    <BotaoStyle>
      <div className="botaoPrincipal">{props.texto}</div>;
    </BotaoStyle>
  );
}