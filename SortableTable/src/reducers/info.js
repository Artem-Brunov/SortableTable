
const initialState = {
    flag: 0,
    headForSort: 0,
    data: []
}

export default function userInfo (state = initialState,  action) {
    switch (action.type) {
        case "SORT":
          if(state.headForSort === action.payload){
            if(state.flag === 0){
              return {...state, flag: 1};
            }
            return {...state, flag: 0};
          }
          return {...state, headForSort: action.payload, flag: 0};

        case "DATA_LOAD":
          return {...state, data: action.payload};

        default:
          return state
    }
}
