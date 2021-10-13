import styled from "styled-components";

export const CardProfileStyle = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

  .Card-Container {
    display: flex;
    flex-direction: row;
  }
  .Card {
    width: 300px;
    height: 480x;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 1px 10px 1px black;
  }

  .upper-container {
    height: 100px;
    background-image: linear-gradient(
      to top,
      #009fff,
      #8d85f3,
      #cc61cc,
      #ec3b90,
      #ec2f4b
    );
  }

  .image-container img {
    background: white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 5px;
    transform: translate(95px, 45px);
  }

  img {
    border: 2px solid #e50a7f;
  }

  .lower-container {
    margin-top: 60px;
    height: 300px;
    background: white;
    text-align: center;
    font-family: Roboto, sans-serif;
  }

  .lower-container h3,
  h3,
  p {
    margin: 10px;
    padding: 5px;
  }

  .lower-container h3 {
    color: #e50a7f;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .lower-container h4 {
    color: #00a0e3;
    font-weight: 800;
    font-size: 1.2rem;
  }

  .lower-container p {
    font-family: sans-serif;
    color: #2d2d2e;
    font-size: 1.1rem;
    text-align: justify;
  }

  @media screen and (max-width: 540px) {
    .Card-Container {
      display: flex;
      flex-direction: column;
    }

    .lower-container p {
      font-size: 18px;
    }
  }
`;
