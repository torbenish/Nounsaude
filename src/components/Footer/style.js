import styled from "styled-components";

export const FooterStyle = styled.footer`
  footer {
    width: 100%;
    min-height: 250px;
    background: white;
    display: flex;
  }

  footer .boxs {
    width: 300px;
    min-height: 100px;
    padding: 20px;
  }

  footer .boxs:nth-child(4) {
    width: 500px;
  }

  .boxs h2 {
    color: #00a0e3;
    margin-bottom: 20px;
  }

  .boxs ul li {
    margin: 10px 0px;
    list-style: none;
  }

  .boxs ul li a {
    color: #00a0e3;
    text-decoration: none;
  }

  .boxs ul li a:hover {
    color: #e50a7f;
  }

  .boxs p {
    color: #e50a7f;
    text-align: justify;
  }

  .footer {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 0px 20px;
    text-align: center;
  }

  .footer .sociais {
    display: flex;
  }

  .sociais .social {
    width: 20px;
    height: 20px;
    background: white;
    line-height: 40px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: color 0.2s linear;
  }

  .sociais .social a {
    color: #00a0e3;
    font-size: 1.5em;
  }

  .sociais .social:hover a {
    color: #e50a7f;
  }

  main {
    color: #00a0e3;
    text-align: center;
  }
`;
