import React, { Component } from 'react';
import { connect } from "react-redux";

import '../components/css/row.css'
import Sort from '../components/Sort'
import Row from '../components/Row'
import sortColumnAction from '../actions/actionSort';


class App extends Component {

  render() {
    const sortColumn = this.props.headForSort;
    let table = this.props.data
    if((this.props.headForSort) && (this.props.flag === 0)){
      table.sort(function(obj1, obj2) {
                    if(obj1[sortColumn] < obj2[sortColumn]){
                      return -1;
                    }
                    else{
                      return 1;
                    }
                  });
    }
    else if((this.props.headForSort) && (this.props.flag === 1)){
      table.sort(function(obj1, obj2) {
                    if (obj1[sortColumn] > obj2[sortColumn]){
                      return -1;
                    }
                    else{
                      return 1;
                    }
                  });
    }
    table = this.props.data.map((item, index)  => (<Row key={index} data={item} />));

    let heading = []
    for(let i in this.props.data[0]){
      heading.push(i)
    }

    return (
      <div className = "container">

        <Sort data = {heading} sortColumn = {this.props.sortColumnFunction}/>

        <div className = "table">
          {table}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flag: state.userInfo.flag,
    headForSort: state.userInfo.headForSort,
    data: state.userInfo.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortColumnFunction: (sortType) => {
      dispatch(sortColumnAction(sortType))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
