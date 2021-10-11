import styled from "styled-components";

export const Container = styled.div`
/* margin: 0;
padding: 0;
background-color: red;
  .card{
	height:100%;
	width:100vw;
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
	background-color: blue;
  } */
  /* @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@700&family=Raleway:wght@500&display=swap');
  margin: 0;
	padding: 0;
	box-sizing: border-box;
    .blog {
	min-height: 100vh;

	padding: 7rem 0;
	background-color: #f8f8f8;

	display: flex;
	justify-content: center;
}

.card {
	background-color: #fff;

	border: 2px solid rgb(226, 226, 226);

	padding: 40px 25px;

	width: 100%;
	max-width: 600px;

	border-radius: 10px;

	margin-bottom: 50px;
}

.card .card-body h1{
	font-family: Heebo;
	font-size: 2.6rem;
	margin-bottom: 10px;
}

.line {
	width: 100%;
	height: 2px;

	border: 1px solid rgb(218, 218, 218);
}

.card .card-body h2{
	font-family: Raleway;
	font-size: 1.4rem;

	margin-top: 15px;
}       */

.card {
	background-color:red;
}
.card:hover {
	box-shadow: 5px 10px 20px 1px rgb(255, 255, 255, 0.2) !important;
}

.teste {
	width: 60vh;
}

@media screen and (max-width: 540px) {
  .teste {
	width: 48vh;
	padding: 0.5rem;
  }
  
}
`;
