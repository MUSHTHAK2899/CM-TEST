import React, { Component } from 'react'
import Footer from './Component/Footer';
import Header from './Component/Header';
import Dummy from './pages/Dummy';

import Homepage from './pages/Homepage';
export default class Myapp extends Component {

    constructor(props){
        super(props);
        this.state={
            currentselected:'home'
        }
    }

handleMenuSelect=(value)=>{
this.setState({
    currentselected:value
})
}

getPage(){
    const{
        currentselected
    }=this.props;


switch (currentselected){
    case 'home':
        return <Homepage/>
    case 'usage':
        return <Dummy name="usage"/>
    case 'logout':
         return <Dummy name="logout"/>
    default:
        break;
}
}
  render() {
    return (
      <div>
    <Header  oneMenuSelect={this.handleMenuSelect}/>
 <Homepage/>
 <Footer/>
      </div>
    )
  }
}
