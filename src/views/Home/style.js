import styled from "styled-components";

export const Container = styled.div`
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic");
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");
  /* display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  .Back__To__Top {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
  }
  .Back__To__Top h1 {
    font-size: 20px;
    color: #0fa8ff;
  }
  .Back__To__Top p {
    font-size: 20px;
    margin-bottom: 37px;
  }

  .home-container {
    background-color: #0fa8ff;
    padding: 20px 10px;
    margin-top: -22px;
    margin-bottom: 10px;
  }

  .home-container h1{
    color: #ffffff;
    font-size: 20px;
    font-family: "MuseoModerno", cursive;
  }

  .pink{
    color: #E50A7F;
  }

  .home-container p{
    color: #ffffff;
    font-size: 18px;
    font-family: "Work Sans";
  }

  h2 {
    font-family: "MuseoModerno", cursive;
    font-size: 20px;
    font-weight: bold;
    color: #E50A7F;
  }

  .container-carousel {
    display: flex;
    justify-content: center;
  }


  .scrolls {
    color: #fff;
    width: 60px;
    height: 60px;
    line-height: 30px;
    border-radius: 100%;
    font-size: 20px;
    position: fixed;
    right: 37px;
    bottom: 37px;
    cursor: pointer;
    background-color: #07a8ff;
  }
  .scrolls svg {
    width: 47px;
    margin: 6px auto;
    display: block;
    line-height: 27px;
    height: 47px;
  }
  .scrolls:hover {
    background-color: #00bf6f;
  }

  .CardProfile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .Card {
    flex-direction: row;
    margin: 20px;
  }

  @media screen and (max-width: 540px) {
    .CardProfile {
      flex-direction: column;
    }

    .home-container {
    margin-top: 85px;
  }
  }
`;
