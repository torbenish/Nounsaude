import styled from "styled-components";

export const Container = styled.div`
.btn-primary-outline {
  background-color: transparent;
  border-color: #ccc;
}

h3 {
  color: #0fa8ff;
  margin-top: 10px;
}
.card {
	background-color:white;
}
.card:hover {
	box-shadow: 5px 10px 20px 1px rgb(255, 255, 255, 0.2) !important;
}

.subject button{
	margin: 10px;
  border-radius: 30px;
}

.subject button:hover{
    color: #ffffff;
    background-color: #00a0e3;
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

@media screen and (max-width: 540px) {
  .subject {
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 15px;
  }
}
`;
