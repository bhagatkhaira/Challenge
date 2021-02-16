import * as ACTION_TYPES from "./Types";

export const setType = (changedType) => ({
  
  type: ACTION_TYPES.SET_TYPE,
  setType: changedType,
});
export const deleteItem = (id) =>{
  
  return (dispatch) => { 
    dispatch({
       type: ACTION_TYPES.DELETE_ITEM,
       id: id,
});
}
};

export const findBusiness = (id) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.SET_BUSINESS,
      id: id,
    });
  };
};
export const addToList = (data) => {
 
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.SET_BUSINESS_LIST,
      setList: data,
    });
  };
};
export const updateItemInList = (data) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_BUSINESS_LIST,
      setItem: data,
    });
  };
};
