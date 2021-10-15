import styled from "styled-components";

export const FooterStyle = styled.footer`
  @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");

  .container-fluid  {
    padding-top: 10px;
  }
  .text-uppercase {
    color: #00a0e3;
    font-family: MuseoModerno;
    font-size: 24px;
  }
  img {
    margin-bottom: 10px;
  }
  p {
    color: #e50a7f;
    font-family: Work Sans;
  }
  li {
    margin: 6px;
  }
  li a{
    font-size: 18px;
    color: #e50a7f;
    text-decoration: none;
    font-family: Work Sans;
  }

  li a:hover{
  color: #00a0e3;
  }

  .footer-copyright {
    color: #00a0e3;
    font-family: MuseoModerno;
  }

  @media (max-width: 850px) {
    footer {
      flex-direction: column;
    }
    footer .boxs {
      width: 100%;
      text-align: center;
    }
    footer .boxs:nth-child(4) {
      width: 100%;
    }
  }
`;

// color: #00a0e3;
// color: #e50a7f;
// font-family: MuseoModerno;
// font-family: Work Sans;
