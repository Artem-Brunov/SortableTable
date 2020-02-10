export const SORT = 'SORT'
export const DATA_LOAD_FAILED = 'DATA_LOAD_FAILED'
export const SORT_REQUEST = 'SORT_REQUEST'
export const DATA_LOAD = 'DATA_LOAD'
export const DATA_LOAD_REQUEST = 'DATA_LOAD_REQUEST'
export const NEW_LIST = 'NEW_LIST'
export const ADD_ROW = 'ADD_ROW'
export const SEARCH_INFO = 'SEARCH_INFO'
export const SHOW_HIDDEN_DATA = 'SHOW_HIDDEN_DATA'

export function sortColumnAction(sortType) {
  return dispatch => {
    dispatch({
      type: SORT_REQUEST,
      payload: 'Loading',
    });

    dispatch({
      type: SORT,
      payload: sortType
    });
  }
}
export function fileLoadAction(fileName) {
  return dispatch => {
    dispatch({
      type: DATA_LOAD_REQUEST,
      payload: 'Loading'
    });

    fetch(fileName)
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: DATA_LOAD,
          payload: result
        });
      })
      .catch(error => {
        dispatch({
          type: DATA_LOAD_FAILED,
          payload: error
        });
      });
  }
}

export function selectListAction(listNumber) {
  return dispatch => {
    dispatch({
      type: DATA_LOAD_REQUEST,
      payload: 'Loading'
    });

    dispatch({
      type: NEW_LIST,
      payload: listNumber
    });
  }
}

export function addRowAction(row) {
  return dispatch => {
    dispatch({
      type: DATA_LOAD_REQUEST,
      payload: 'Loading'
    });

    dispatch({
      type: ADD_ROW,
      payload: row
    });
  }
}


export function searchInfoAction(searchString) {
  return dispatch => {
    dispatch({
      type: DATA_LOAD_REQUEST,
      payload: 'Loading'
    });

    dispatch({
      type: SEARCH_INFO,
      payload: searchString
    });
  }
}

export function showHiddenDataAction(data) {
  return dispatch => {
    dispatch({
      type: DATA_LOAD_REQUEST,
      payload: 'Loading'
    });

    dispatch({
      type: SHOW_HIDDEN_DATA,
      payload: data
    });
  }
}
