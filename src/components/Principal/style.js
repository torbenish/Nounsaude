import styled from "styled-components";

export const PrincipalStyle = styled.div`
  @import url(https://fonts.googleapis.com/css?family=MuseoModerno:100,200,300,regular,500,600,700,800,900);
  @import url(https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

  .estiloPrincipal {
    width: 1440px;
    height: 830px;
    position: relative;
    font-family: "MuseoModerno";
    box-sizing: border-box;
  }

  .estiloPrincipal img {
    width: 1440px;
    position: absolute;
  }

  .estiloPrincipal .logo {
    width: 156px;
    top: 20px;
    left: 20px;
  }

  .estiloPrincipal .intro {
    position: absolute;
    bottom: 60px;
    left: 20px;
    color: aliceblue;
  }

  .estiloPrincipal h1 {
    width: 350px;
    font-size: 32px;
    color: white;
    font-weight: bold;
  }

  .estiloPrincipal p {
    width: 600px;
    font-size: 16px;
    font-family: "Work Sans";
    padding-top: 15px;
  }

  @media screen and (max-width: 540px) {

    .estiloPrincipal img {
      width: 120vw;
      height: 100vh;
      position: relative;
    }
    .estiloPrincipal .logo {
      display: none;
    }
    .estiloPrincipal h1 {
      width: 350px;
      font-size: 28px;
    }
    .estiloPrincipal p {
      width: 350px;
      font-size: 18px;
    }

    @media screen and (max-width: 400px) {
      .estiloPrincipal h1 {
        width: 320px;
        font-size: 25px;
      }
      .estiloPrincipal p {
        width: 300px;
        font-size: 18px;
      }
    }
  }
`;
