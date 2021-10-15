import styled from "styled-components";

export const Container = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@700&family=Raleway:wght@500&display=swap');
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

	padding: 40px 45px;

	width: 100%;
	max-width: 800px;

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
}      
`;
