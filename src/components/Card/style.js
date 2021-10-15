import styled from "styled-components";

export const CardStyle = styled.div`
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");

  .card {
    margin: 0 auto; 
    float: none; 
    margin-bottom: 25px;
    background-image:  #f8f8ff;
    box-shadow: 0px 1px 10px 1px black;
  }

  .card img {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .card-body {
    padding: 0.2rem 0 !important;
  }

  .card-body h2 {
    font-size: 1.6rem;   
    font-weight: bold;
    font-family: "MuseoModerno", cursive;

  }

  .card-body h5 {
    font-size: 16px;  

  }
  
  .card-body p {
    padding: 0 0.4rem;
    font-size: 19px;
    color: black;
    font-family: "Roboto", sans-serif;
  }

  Button {
    color: #ffffff;
    background-color:#00a0e3;

  }

  @media screen and (max-width: 540px) {
    .card img {
    width: 250px;
    height: 150px;
  }
}
`;
