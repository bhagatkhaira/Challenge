import * as ACTION_TYPES from "./Types";

const initialState = {
  BusinessList:[],
  type: "list",
  BusinessToEdit: {},
};

const Reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case ACTION_TYPES.SET_TYPE:
      return {
        ...state,
        BusinessToEdit: {},
        type: action.setType,
      };
      case ACTION_TYPES.DELETE_ITEM:
        const newList = state.BusinessList && state.BusinessList.filter((item) => {
         
          if (item.id !== action.id) {
             
            
            return item;
          }
         
        });
        
      return {
        ...state,
        
        BusinessList: [...newList],
        
      };
    case ACTION_TYPES.SET_BUSINESS_LIST:
    
      const newElement = {
        id: state.BusinessList ? state.BusinessList.length + 1: 1,
        ...action.setList,
      };
     
      
      return {
        ...state,
        BusinessToEdit: {},
        type: "list",
        BusinessList:  [...state.BusinessList, newElement] ,
      };

    case ACTION_TYPES.SET_BUSINESS:
      const businessToEdit = state.BusinessList.find((item) => {
        return item.id == action.id;
      });
      
      return {
        ...state,
        type: "EDIT",
        BusinessToEdit: businessToEdit,
      };
    case ACTION_TYPES.UPDATE_BUSINESS_LIST:
      const businessList = state.BusinessList.map((item) => {
        if (item.id == action.setItem.id) {
          item = action.setItem;
          return item;
        }
        return item;
      });

      return {
        ...state,
        type: "list",
        BusinessToEdit: {},
        BusinessList: businessList,
      };
    default:
      return state;
  }
};

export default Reducer;
