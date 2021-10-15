import styled from "styled-components";

export const FormStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Work+Sans:wght@400;500;600;700&display=swap');
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  .card {
    display: grid;
    background: #f9f9f9;
    max-width: 800px;
    height: 80vh;
    border-radius: 22px;
    padding: 30px;

    h5 {
      font-family: "MuseoModerno", cursive;
      text-align: center;
      font-weight: bold;
      font-size: 34px;
      color: #00a0e3;
    }
    p {
      font-family: "Work Sans", sans-serif;
      font-size: 18px;
    }

    h6 {
      font-family: "Work Sans", sans-serif;
      font-size: 20px;
      color: #00A0E3;
      font-weight: bold;


    }
    a {
      text-decoration: none;
      text-align: center;
      color: #8c52e5;
      font-family: "Roboto", sans-serif;
    }
    form {
      input {
        width: 100%;
        height: 32px;
        text-align: center;
        border-radius: 22px;
        border: 1px solid #00A0E3;
        margin: 20px 0 0 0;
      }
      input[type="submit"] {
        font-family: 'Roboto', sans-serif;
        font-size: 20px; 
        width: 241px;
        height: 49px;
        margin-top: 30px;
        text-transform: uppercase;
        cursor: pointer;
        border-color: #00a0e3;
        color: #00a0e3;
        background: #ffffff;
        padding: 5px;
        border-radius: 20px;
        transition: 0.6s;
        &:hover {
          background: #00a0e3;
          color: #ffffff;
        }
      }
    }
    .button-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 540px) {
    .card {
      display: grid;
      background: #ffffff;
      max-width: 500px;
      height: 100vh;
      border-radius: 22px;
      padding: 22px;
      h5 {
        font-family: "MuseoModerno", cursive;
        text-align: left;
        font-size: 24px;
        color: #00a0e3;
      }
      p {
        font-family: "Work Sans", sans-serif;
        font-size: 13px;
        padding-top: 15px;
        padding-bottom: 35px;
      }
      a {
        text-decoration: none;
        text-align: center;
        color: #8c52e5;
        font-family: "Roboto", sans-serif;
        margin: 20px 0;
      }
      
    }
  }
`;

// .card {
//   display: grid;
//   background: #f9f9f9;
//   /* background: #ffffff; */
//   max-width: 500px;
//   height: 60vh;
//   border-radius: 22px;
//   padding: 30px;

//   h5 {
//     font-family: "MuseoModerno", cursive;
//     text-align: center;
//     font-size: 34px;
//     color: #00a0e3;
//   }
//   p {
//     font-family: "Work Sans", sans-serif;
//     font-size: 20px;
//   }
//   a {
//     text-decoration: none;
//     text-align: center;
//     color: #8c52e5;
//     font-family: "Roboto", sans-serif;
//   }
//   form {
//     input {
//       width: 100%;
//       height: 32px;
//       text-align: center;

//       border-radius: 22px;
//       border: 1px solid #e2e2e2;
//       margin: 12px 0 0 0;
//     }
//     input[type="submit"] {
//       font-family: Roboto, "Helvetica";
//       width: 241px;
//       height: 49px;
//       margin-top: 30px;
//       text-transform: uppercase;
//       cursor: pointer;
//       border-color: #00a0e3;
//       color: #00a0e3;
//       background: #ffffff;
//       padding: 5px;
//       border-radius: 20px;
//       transition: 0.6s;
//       &:hover {
//         background: #00a0e3;
//         color: #fff;
//       }
//     }
//   }
//   .button-center {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// }
