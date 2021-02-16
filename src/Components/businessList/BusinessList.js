import React from "react";
import Card from "../../utils/Card";
import styled from "styled-components";
import { connect } from "react-redux";
import { setType, findBusiness, deleteItem } from "../../Store/Actions";

export const Button = styled.button`
justify-self: start;

  border-radius: 25px;
  min-height: 40px;
  padding: 0 20px;

  font-weight: 600;

  min-width: 160px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
justify-self: center;
height: 20px;
margin-top: 20px;
font-weight: 600;

width: 80px;
border-radius: 25px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: grid;
  margin:5%;

  grid-template-columns: 20px auto 20px;
  grid-template-rows: auto auto;
  grid-gap: 10px;
`;
const Head = styled.h1`
  grid-column: 1/-1;
  justify-self: start;
  grid-row: 1/2;
`;
const CardWrapper = styled(Card)`
  grid-column: 2/3;
  grid-row: 2/-1;
`;
const CardRow = styled.div`
  display: grid;
  margin-top: 10px;
  grid-column-gap: 5px;
 
  

  
`;
const Row = styled.div`
 
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const NewCard = styled(Card)`
width:160px;
border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
`;
const Hr = styled.hr`
width:100%;


border-top: 1px dotted blue;
`;
const RowItemLeft = styled.h3`
font-size:medium;
font-weight: 600;

`;
const RowItemRight = styled.div`
justify-self: center;
overflow: hidden;
white-space: nowrap;

text-overflow: ellipsis

`;
const BusinessList = (props) => {

  return (
    <Wrapper>
      <Head>BOOKS</Head>
      <CardWrapper>
        <Button onClick={() => props.loadType("CREATE")}>ADD A BOOK</Button>

        <Row>

          {props.business_list && props.business_list.map((value) => (

            <NewCard onClick={() => props.setBusiness(value.id)}>
            
              <CardRow><RowItemLeft>BOOK NAME</RowItemLeft><RowItemRight>{value.name}</RowItemRight>  </CardRow>
              <Hr />
             
              <CardRow><RowItemLeft>PRICE</RowItemLeft><RowItemRight>{value.price}</RowItemRight></CardRow>
              <Hr />
            
              <CardRow><RowItemLeft>CATEGORY</RowItemLeft><RowItemRight>{value.category}</RowItemRight></CardRow>
              <Hr />

              <DeleteButton onClick={(e) => {

                e.stopPropagation();
                e.preventDefault();
                props.deleteType(value.id)
              }}>Delete</DeleteButton>

            </NewCard>


          ))}
        </Row>

      </CardWrapper>
    </Wrapper>
  );
}
  ;

const mapStateToProps = (state) => {

  return {
    business_list: state.BusinessList,
    type: state.type,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadType: (changedType) => {
      dispatch(setType(changedType));
    },
    setBusiness: (id) => {
      dispatch(findBusiness(id));
    },
    deleteType: (id) => {
      dispatch(deleteItem(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
