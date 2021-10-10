import styled from "styled-components";

export const ButtonStyle = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");
  font-family: "MuseoModerno", cursive;
  

  .btn {
      padding: 8px 20px;
      border-radius: 4px;
      outline: none;
      border: none;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      background-color: #1888ff;
  }

  .btn:hover {
      padding: 6px 18px;
      transition: all 0.3s ease-out;
      background-color: transparent;
      color: #fff;
      border-radius: 4px;

  }
`;