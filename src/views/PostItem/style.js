import styled from "styled-components";

export const Container = styled.div`

@import url("https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic");
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");
  margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Roboto, sans-serif;
    .blog {
	min-height: 100vh;

	padding: 7rem 0;
	background-color: #ffffff;

	display: flex;
	justify-content: center;
}

.card {
	background-color: #fff;

	border: 2px solid rgb(226, 226, 226);

	padding: 40px 45px;

	width: 100%;
	max-width: 1500px;

	border-radius: 10px;

	margin-bottom: 50px;
}

.card .card-body h1{
	font-family: MuseoModerno;
	color: #07a8ff;
	font-weight: bold;
	font-size: 2.4rem;
	margin-bottom: 10px;
	
}

.line {
	width: 100%;
	height: 4px;
	margin-bottom: 16px;
	border: 1px solid black;
}

.card .card-body h2{	
	font-size: 1.4rem;
	margin-top: 20px;
	color: #e50a7f;
}   
.card .card-body p{
	color: black;
	font-size: 1.2rem;	
	
}   
.card .card-body h3{	
	font-size: 1.1rem;
	font-weight: bold;
	font-style: italic;
	color: #e50a7f;
}   
.card .card-body img {
	margin-left: 150px;
	margin-bottom: 20px;
} 

.Back__To__Top{
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
}
.Back__To__Top h1{
  font-size: 57px;
    color: #0fa8ff;
}
.Back__To__Top p{
  font-size: 37px;
  margin-bottom: 37px;
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

`;
