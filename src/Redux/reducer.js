import {AUTH, TOKEN, LOG_OUT, USER, SKIP} from './constant';
const initialState = {
  isAuth: false,
  isIntro: false,
  userDetails: {},
  Token: '',
  skipData: {
    intro: true,
  },
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      const status = action.payload;
      return {
        ...state,
        isAuth: status.isAuth,
      };
    }

    case SKIP: {
      const status = action.payload;
      return {
        ...state,
        skipData: status.skipData,
      };
    }

    case TOKEN: {
      const status = action.payload;
      return {
        ...state,
        Token: status.Token,
      };
    }
    case USER: {
      const status = action.payload;
      return {
        ...state,
        userDetails: status.userDetails,
      };
    }
    case LOG_OUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default todoReducer;
