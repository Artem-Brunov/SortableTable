
const initialState = {
    flag: 0,
    headForSort: 0,
    data: require('./profiles')
}

export default function userInfo (state = initialState,  action) {
    switch (action.type) {
        case "SORT":
          if((state.headForSort === action.payload) && (state.flag === 0)){
            return {...state, flag: 1}
          }
          else if((state.headForSort === action.payload) && (state.flag === 1)){
            return {...state, flag: 0}
          }
          else{
            return {...state, headForSort: action.payload, flag: 0}
          }
        default:

          return state
    }
}
