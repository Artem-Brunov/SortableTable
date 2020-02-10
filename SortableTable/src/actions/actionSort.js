export function sortColumnAction(sortType) {
    return {
      type: "SORT",
      payload: sortType
    }
  }

export function fileLoadAction(data) {
      return {
        type: "DATA_LOAD",
        payload: data
      }
}
