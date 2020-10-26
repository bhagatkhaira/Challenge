import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../../utils/Card";
import styled from "styled-components";
import { setType, addToList, updateItemInList } from "../../Store/Actions";
import { Formik } from "formik";

export const Button = styled.button`
  justify-self: start;
  grid-column: 2/-1;
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
const CardWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/-1;
`;
const Form = styled.form`
  display: grid;

  grid-template-columns: 20px auto;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
`;
const Row = styled.div`
  grid-column: 2/-1;
  max-width: 200px;
  min-height: 30px;
`;

const CreateEditBusines = (props) => {
  return (
    <div>
      <h3 onClick={() => props.loadType("list")}>BACK</h3>
      <Wrapper>
        <Head>{props.type} BUSINESSES</Head>
        <CardWrapper>
          <Card>
            <Formik
              initialValues={{
                name: props.businessToEdit ? props.businessToEdit.name : "",
                type: props.businessToEdit ? props.businessToEdit.type : "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                if (!values.type) {
                  errors.type = "Required";
                }

                return errors;
              }}
              onSubmit={(values) => {
                props.type == "CREATE"
                  ? props.addValue({ name: values.name, type: values.type })
                  : props.updateValue({
                      id: props.businessToEdit.id,
                      name: values.name,
                      type: values.type,
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
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Business Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                  </Row>

                  <Row>
                    <input
                      id="Type"
                      type="text"
                      name="type"
                      placeholder="Type"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.type}
                    />
                    {errors.type && touched.type && errors.type}
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
    </div>
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
