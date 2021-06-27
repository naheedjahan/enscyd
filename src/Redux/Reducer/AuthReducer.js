

import {
  GET_ALL,
    GET_UPDATE,
    LOGIN_USER, REGISTER_USER,

  } from '../action/types';

  const initialState = {
    user: null,
    reg:null,
    getalldata:null,
    getallanswers:null

  };

  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          user: action.userdata,

        };
case REGISTER_USER:
  return{
  ...state,
  reg: action.regdata,

  };
  case GET_ALL:
return{
  ...state,
  getalldata:action.getdata,
  getallanswers:action.getanswer
}
case GET_UPDATE:
  return{
    ...state,

    getallanswers:action.getanswer
  }
    default:
        return state;
    }
  };