import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar'
import '../../styles/category.scss'
import ProductList from '../../components/GroupedItems'
import { connect } from 'react-redux';
import {filterProducts} from '../../actions/categoryActions'
class Category extends Component {


  onSearch = (data) => {
    this.props.filterProducts(data , this.state)
  } 

  constructor(props){
    super(props);
    this.state = {'items':['A' , 'B' , 'C' , 'D' , 'E'] , 'filterKey':''};
  }

  render(){
    return(
      <div className="category-page">
        <div className="toolbar-section">
          <Toolbar onSearch={this.onSearch} filterKey={this.props.filterKey}></Toolbar>
        </div>
        <div className="list-page">
          <ProductList filteredItems={this.props.filteredData ? this.props.filteredData : this.state.items}></ProductList>
        </div>
      </div>
    )}
}

function mapStateToProps(state){
  return {
      filteredData: state.categoryFilter.filteredData,
      filterKey:state.categoryFilter.filterKey
    };
}

function mapDispatchToProps(dispatch){
  return{
      filterProducts: (value,payload) => dispatch(filterProducts(value , payload))
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Category);