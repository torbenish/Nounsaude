import styled from "styled-components";

export const CardStyle = styled.div`
  .card {
    margin: 0 auto; /* Added */
    float: none; /* Added */
    margin-bottom: 10px; /* Added */
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .card-body {
    padding: 2rem 0 !important;
  }

  .card-body p {
    padding: 0 0.7rem;
  }
`;
