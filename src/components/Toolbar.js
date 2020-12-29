import React, { Component } from 'react';



class Toolbar extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = { ...props , showFilterSection:false , filterKey:'' }
    }

    updateInputValue = (evt) => {
        this.setState({filterKey : evt.target.value});
    }

    render(){
        return(
            <>
            <div className="search-bar">
                <input type="text" placeholder="Search" autoComplete="off"  onChange={this.updateInputValue} />
                <button className="btn btn-primary" onClick={() => this.props.onSearch(this.state.filterKey)}>Search</button>
            </div>
            {this.state.showFilterSection ?
            <div className="filter-section">
                <p>You are in filter section</p>
            </div>:
            ''
            }
            </>
    )}
    
}



export default Toolbar;