import styled from "styled-components";

export const Container = styled.div`
.btn-primary-outline {
  background-color: transparent;
  border-color: #ccc;
}

.card {
	background-color:white;
}
.card:hover {
	box-shadow: 5px 10px 20px 1px rgb(255, 255, 255, 0.2) !important;
}

.subject {
	width: 50vw;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	align-items: center;
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
