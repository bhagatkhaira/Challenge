import styled from "styled-components";


const Card = styled.div`
background-color:white;
  display: grid;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.14);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: 30px 0;
  padding: 30px;

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export default Card;
