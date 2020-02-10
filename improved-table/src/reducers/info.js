import { SORT, DATA_LOAD,
SORT_REQUEST, DATA_LOAD_REQUEST,
DATA_LOAD_FAILED, NEW_LIST,
ADD_ROW, SEARCH_INFO,
SHOW_HIDDEN_DATA } from '../actions/actionSort';

export const initialState = {
    flag: 0,
    headForSort: '',
    data: [],
    fetching: false,
    errorMessage: '',
    listNumber: 1,
    tableHeight: 50,
    searchString: '',
    hiddenData: null,
    dataSize: 0
}

export function userInfo (state = initialState,  action) {
    switch (action.type) {
        case SORT_REQUEST:
          return {...state, loadScrin: action.payload, fetching: true}

        case SORT:
          if(state.headForSort === action.payload){
            if(state.flag === 0){
              return {...state, flag: 1, fetching: false};
            }
            return {...state, flag: 0, fetching: false};
          }
          return {...state, headForSort: action.payload, flag: 0, fetching: false};

        case DATA_LOAD_REQUEST:
          return {...state, fetching: true};

        case DATA_LOAD:
          return {...state, data: action.payload, dataSize: action.payload.length, errorMessage: '', fetching: false};

        case DATA_LOAD_FAILED:
          return {...state, errorMessage: action.payload, fetching : false};

        case NEW_LIST:
          return {...state, listNumber: action.payload, fetching : false};

        case ADD_ROW:
          state.data.unshift(action.payload)
          return {...state, fetching : false};

        case SEARCH_INFO:
          return {...state, searchString: action.payload, fetching : false};

        case SHOW_HIDDEN_DATA:
          return {...state, hiddenData: action.payload, fetching : false};

        default:
          return state;
    }
}
