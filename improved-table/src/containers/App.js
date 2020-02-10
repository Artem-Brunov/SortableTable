import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../components/css/row.css'
import '../components/css/tableTools.css'
import Sort from '../components/Sort'
import Row from '../components/Row'
import AddRow from '../components/AddRow'
import Paginator from '../components/Paginator'
import Load from '../components/Load'
import Search from '../components/Search'
import ShowHiddenData from '../components/ShowHiddenData'
import Loader from '../components/Loader'
import headerStructure from '../headerStructure'

import { sortColumnAction, fileLoadAction, selectListAction,
searchInfoAction, addRowAction, showHiddenDataAction } from '../actions/actionSort';


class App extends Component {
  render() {
    const { headForSort, data, flag, fetching,
    errorMessage, listNumber, tableHeight,
    searchString, hiddenData, dataSize} = this.props;

    if(headForSort){
      data.sort((obj1, obj2) => {
                            if(obj1[headForSort] < obj2[headForSort]){
                              return -1;
                            }
                            else{
                              return 1;
                            }
                          });
      if(flag === 1){
        data.reverse();
      }
    }

    const allTable = data.map((item, index) => {
      for(let i of headerStructure){
        if(String(item[i]).indexOf(searchString) !== -1){
          return(<Row key={index} data={item} showHiddenData ={this.props.showHiddenData}/>)
        }
      }
      return null
    }).filter((item) => item !== null);
    const showTable = allTable.slice(tableHeight*(listNumber-1), tableHeight*listNumber)
    const numberOfRows = showTable.length;
    const heading = [];

    for(let i of headerStructure){
      heading.push(i);
    }

    return (
      (fetching) ?
        <Loader/>
      :
        (errorMessage) ?
          <p><h1>{String(errorMessage)}</h1></p>
        :
          (data[0]) ?
            <div className = 'container'>
              <div className = 'tableTools'>
                <AddRow addRow = {this.props.addRow}/>
                <Search searchInfo = {this.props.searchInfo}/>
              </div>
              <div id = 'table' className = 'table'>
                <div id = 'header' hidden = {false}>
                  <Sort data = {heading} flag = {flag}
                    headForSort = {headForSort}
                    sortColumn = {this.props.sortColumnFunction}
                  />
                </div>
                {showTable}
              </div>
              <div className = 'pagination'>
                <div className = 'pageNumb' >
                  Page {listNumber}
                </div>
                <Paginator  listNumber = {listNumber} numberOfRows = {numberOfRows}
                  tableHeight = {tableHeight} dataSize = {dataSize}
                  selectList = {this.props.selectList}
                />
              </div>
              <div className = 'hiddenBlock'>
                {(hiddenData) ?
                    <div className = 'hiddenData'>
                      <ShowHiddenData hiddenData = {hiddenData}/>
                    </div>
                  : null
                }
              </div>
            </div>
          :
            <div className = 'dataLoader'>
              <Load loadData = {this.props.loadData}/>
            </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    flag: state.userInfo.flag,
    headForSort: state.userInfo.headForSort,
    data: state.userInfo.data,
    fetching: state.userInfo.fetching,
    errorMessage: state.userInfo.errorMessage,
    listNumber: state.userInfo.listNumber,
    tableHeight: state.userInfo.tableHeight,
    searchString: state.userInfo.searchString,
    hiddenData: state.userInfo.hiddenData,
    dataSize: state.userInfo.dataSize
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortColumnFunction: (sortType) => {
      dispatch(sortColumnAction(sortType));
    },

    loadData: (dataType) => {
      dispatch(fileLoadAction(dataType));
    },

    selectList: (listNumber) => {
      dispatch(selectListAction(listNumber));
    },

    searchInfo: (searchString) => {
      dispatch(searchInfoAction(searchString));
    },

    addRow: (row) => {
      dispatch(addRowAction(row));
    },

    showHiddenData: (data) => {
      dispatch(showHiddenDataAction(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
