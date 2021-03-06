import styled from "styled-components";

export const Container = styled.div`
  @import url(https://fonts.googleapis.com/css?family=MuseoModerno:100,200,300,regular,500,600,700,800,900);
  @import url(https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

  font-family: MuseoModerno;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  p {
    font-size: 30px;
    color: #e50a7f;
  }

  h5 {
    color: #e50a7f;
  }

  section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }

  header {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header .logo {
    position: relative;
    max-width: 80px;
  }

  header ul {
    position: relative;
    display: flex;
  }

  header ul li {
    list-style: none;
  }

  header ul li a {
    display: inline-block;
    color: #00a0e3;
    font-weight: 400;
    margin-left: 40px;
    text-decoration: none;
    font-size: 30px;
  }
  header ul li a:hover {
    color: #e50a7f;
  }

  button {
    border: 1px solid #00a0e3;
    border-radius: 20px;
    color: #00a0e3;
    font-size: 30px;
    width: 333px;
    text-align: center;
    margin-left: 40px;
  }

  .content {
    position: relative;
    width: 80%;
    margin: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content .textBox h5 {
    font-size: 30px;
  }

  .content .textBox {
    position: relative;
  }

  .content .textBox h2 {
    color: #00a0e3;
    font-size: 50px;
  }

  .content .textBox h2 span {
    color: #e50a7f;
    font-size: 20px;
  }

  .content .textBox p {
    color: #00a0e3;
    position: relative;
  }

  .content .textBox a {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 70px;
    font-size: 30px;
    background: #00a0e3;
    border-radius: 20px;
    color: #fff;
    border-radius: 30px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
  }

  .content .textBox a:hover {
    color: #00a0e3;
    background-color: #fff;
    border: 1px solid black;
  }

  .content .imgBox {
    width: 600px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    margin-top: 50px;
  }

  .content .imgBox img {
    max-width: 340px;
  }

  .cardtitle {
    color: #fff;
    text-align: center;
  }

  h2 {
    color: #e50a7f;
    font-size: 50px;
    text-align: center;
  }

  .cardtext {
    color: #fff;
    text-align: center;
  }

  .card {
    background-color: #00a0e3;
  }

  .carousel-item .active {
    padding: 0;
    padding-left: 0;
    padding-top: 0;
  }
  @media screen and (max-width: 540px) {
    .content .textBox {
      display: none;
    }

    .card-container{ 
      
    }

    @media screen and (max-width: 600px) {
      .content .textBox {
        flex-direction: column;
      }

      .card .cards {
        flex-direction: column;
      }
    }
  }
`;
