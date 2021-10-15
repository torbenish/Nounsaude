import styled from "styled-components";

export const BotaoStyle = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
  .botaoPrincipal {
    border: 1px solid white;
    border-radius: 20px;
    padding: 15px;
    color: #e5e5e5;
    font-family: "Roboto";
    font-size: 20px;
    width: 333px;
    margin-top: 60px;
    text-align: center;
  }
  @media screen and (max-width: 540px) {
    .botaoPrincipal {
      border: 1px solid transparent;
      border-radius: 30px;
      width: 200px;
	  margin-left: 50px;
	  margin-bottom: 40px;
	  background-color: #00a0e3;
    }
  }
  @media screen and (max-width: 400px) {
    .botaoPrincipal {
	  padding-bottom: 10px;
	  margin-left: 50px;
	  margin-bottom: 120px;
    }
  }
`;