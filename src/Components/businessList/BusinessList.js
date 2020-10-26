import React, { useState } from "react";
import Card from "../../utils/Card";
import styled from "styled-components";
import { connect } from "react-redux";
import { setType, findBusiness } from "../../Store/Actions";

export const Button = styled.button`
  justify-self: start;

  border-radius: 25px;
  min-height: 40px;
  padding: 0 20px;

  font-weight: 600;

  min-width: 160px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: grid;

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

  grid-template-columns: auto auto;

  justify-content: space-between;
`;

const BusinessList = (props) => {
  return (
    <Wrapper>
      <Head>BUSINESSES</Head>
      <CardWrapper>
        <Button onClick={() => props.loadType("CREATE")}>Create</Button>

        {props.business_list.map((value) => (
          <div>
            <CardRow onClick={() => props.setBusiness(value.id)}>
              <div>{value.name}</div> <div>{value.type}</div>
            </CardRow>
            <hr />
          </div>
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
