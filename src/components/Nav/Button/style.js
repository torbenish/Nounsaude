import styled from "styled-components";

export const ButtonStyle = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");
  font-family: "MuseoModerno", cursive;
  
.btn {
  padding: 13px 94px; 
  margin-bottom: 16px;
  /* margin: -20px -20px; */
  border-radius: 50px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  background-color: transparent;
}

.btn:hover {
  padding: 13px 94px;
  margin-bottom: 16px;
  transition: all 0.3s ease-out;
  background-color: transparent;
  color: #fff;
  border-radius: 50px;
  transition: all 0.3s ease-out;
  background-color: #00bf6f;
}
`;