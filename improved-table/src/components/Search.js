import React from 'react'
import PropTypes from 'prop-types'
import './css/tableTools.css'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchButton = this.searchButton.bind(this);
  }

  searchButton() {
    return this.props.searchInfo(document.getElementById('searchInput').value);
  }

  render() {
    return (
      <div className = 'search2'>
        <div id = 'search3' className = 'search3'>
          <input id='searchInput' type='text' className = 'input' placeholder='Строка для поиска'/>
          <input id='searchButt' type='button' className = 'btn1' value='Найти' onClick = {this.searchButton}/>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchInfo: PropTypes.func
};
