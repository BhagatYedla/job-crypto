import React, { Component } from 'react'
import logo from './logo.svg';
import './Header.scss';
import Web3 from 'web3'
import Modal from 'react-bootstrap/Modal'

export default class Header extends Component {

    componentDidMount(){
        this.checkLoggedIn();
    }
   
    async checkLoggedIn(){
        if(window.web3 !== undefined){
            if(window.ethereum){
            const web3 = new Web3(window.ethereum);
            try{
                var loggedIn = await web3.eth.getAccounts();
                if(loggedIn.length > 0){
                    this.setState({active:true});
                } 
            } catch(e){
                console.error(e)
            }
            }
        }
    }

    async loadBlockchainData() {
        if(window.web3 !== undefined){
            if(window.ethereum){
            const web3 = new Web3(window.ethereum);
            try{
                
                await window.ethereum.enable();
                var accounts = await web3.eth.getAccounts();
                var firstAcc = accounts[0];
                // var balance = await web3.eth.getBalance(firstAcc);
                // balance =  web3.utils.fromWei(balance, "ether") + " ETH";
                this.setState({active:true});       
            } catch(e){
                console.error(e)
            }
            }
        }
    }

    onClick(){
        this.loadBlockchainData();
    }

    constructor(props) {
        super(props)
        this.state = { account: '' , active:false , balance:0 }
    }

  render(){
    return(
        <header className="header">
            <div className="logo-section">
                <a>
                    <span className="header-logo"></span>
                </a>    
                {this.state.active ?
                    <div className="status-message">
                        <span className="connected-circle"></span>
                        <span className="message">Connected</span>
                    </div>
                    :
                    <div>
                        <span className="not-connected-circle"></span>
                        <span className="message">Not Connected</span>
                    </div>
                }
            </div>
            <div className="nav-section">
                <ul className="nav-items">
                    <li className="nav-item">Catalogue</li>
                    <li className="nav-item">Search</li>
                    <li className="nav-item">Guides</li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={this.onClick.bind(this)}>
                            Start
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )}
}
