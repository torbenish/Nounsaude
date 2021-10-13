import styled from "styled-components";

export const CardStyle = styled.div`
  .card {
    margin: 0 auto; 
    float: none; 
    margin-bottom: 25px;
    background-image: linear-gradient(to top, #2980b9, #338fc6, #3f9fd2, #4bafde, #59bfea, #76c9f1, #8fd3f8, #a5ddff, #c5e3ff, #dfebff, #f2f4ff, #ffffff);
    border-radius: 20px;
    box-shadow: 0px 1px 10px 1px black;
  }

  .card-body {
    padding: 0.2rem 0 !important;
  }
  .card-body h4 {
    font-size: 2.8rem;
    font-weight: bold;
  }
  
  .card-body p {
    padding: 0 0.4rem;
  }
`;
