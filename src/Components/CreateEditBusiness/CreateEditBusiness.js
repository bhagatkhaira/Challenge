import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../../utils/Card";
import styled from "styled-components";
import { setType, addToList, updateItemInList } from "../../Store/Actions";
import { Formik } from "formik";

export const Button = styled.button`

grid-column: 2/-1;
  
  width:500px;
  height:40px;
  margin: auto;  
  border-radius: 20px;  
  background: white;  
`;
const Container = styled.div`

padding: 2.5em 1.5em 1.5em 1.5em;
background-color:white;
  display: grid;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  
  margin: 30px;
  

  @media (max-width: 767px) {
    padding: 15px;
  }
 




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
const CardWrapper = styled.div`

  grid-column: 2/3;
  grid-row: 2/-1;
`;
const Form = styled.form`



  display: grid;
  justify-self:center;
  grid-template-columns: 20px auto;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
`;
const Row = styled.div`
  grid-column: 2/-1;

`;
const BackButton = styled.button`
justify-self: start;
height: 20px;
font-weight: 600;

width: 80px;
border-radius: 25px;
  cursor: pointer;
`;
const PageWrapper = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.9);
`;
export const Input = styled.input`

  width:  500px ;
  height:  ${props => props.description ? "70px" : "35px"};
  border: 1px solid #ccc;
  background-color: #fff;
`;
const CreateEditBusines = (props) => {

  return (
    <PageWrapper>
    <Container >
      <BackButton onClick={() => props.loadType("list")}>BACK</BackButton>
      <Wrapper>
        <Head>{props.type} A BOOK</Head>
        <CardWrapper>
          <Card>
            <Formik
              initialValues={{
                name: props.businessToEdit ? props.businessToEdit.name : "",
                price: props.businessToEdit ? props.businessToEdit.price : "",
                category: props.businessToEdit ? props.businessToEdit.category : "",
                description:props.businessToEdit ? props.businessToEdit.description : "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                if (!values.price) {
                  errors.price = "Required";
                }
                if (!values.category) {
                  errors.category = "Required";
                }
                if (!values.description) {
                  errors.description = "Required";
                }
                return errors;
              }}
              onSubmit={(values) => {
               
                props.type == "CREATE"
                  ? props.addValue({ name: values.name, price: values.price,category:values.category,description:values.description })
                  : props.updateValue({
                      id: props.businessToEdit.id,
                      name: values.name,
                      price: values.price,
                      category:values.category,
                      description:values.description
                    });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Book Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                  </Row>

                  <Row>
                    <Input
                      id="price"
                      type="number"
                      name="price"
                      placeholder="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    {errors.price && touched.price && errors.price}
                  </Row>
                  <Row>
                    <Input
                      id="category"
                      type="text"
                      name="category"
                      placeholder="Category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                    />
                    {errors.category && touched.category && errors.category}
                  </Row>
                  <Row>
                    <Input
                      id="description"
                      type="text"
                      name="description"
                      description
                      placeholder="Description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    {errors.description && touched.description && errors.description}
                  </Row>

                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </CardWrapper>
      </Wrapper>
    </Container>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.type,
    businessToEdit: state.BusinessToEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadType: (changedType) => {
      dispatch(setType(changedType));
    },
    addValue: (item) => {
      dispatch(addToList(item));
    },
    updateValue: (item) => {
      dispatch(updateItemInList(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditBusines);
