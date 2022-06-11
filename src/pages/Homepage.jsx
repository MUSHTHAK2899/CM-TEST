import Tools from '../Component/Tools'
import React, { Component } from 'react'
import SimpleList from '../List/SimpleList';

export default class Homepage extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[],
      activeState:'all',
      //message:''
    };
  }
  componentDidMount=()=>{
    console.log('h');
    fetch('/data.json')
      .then((data)=>{
        return data.json();
      })
      .then((data)=>{
        this.setState({
          data:data
        })
      })
  }

 // componentDidUpdate=(prevState)=>{
 //   if (prevState.message !==this.state.message){
 //     this.setState({
 //       message:'Message'
 //     });
 //   }
 // }

 componentWillUnmount=()=>{

 }
 
  onListChange=(event)=>{
    const value=event.target.value;
  

    this.setState({
      activeState:value,
    })
   
  }

  handleDelete=(item)=>{
    const newList=this.state.data.filter((element)=>element.id !== item.id);
    this.setState({
      data:newList
    })
  }

  HandLabelClick=(arg)=>{
  this.setState({
    activeState:arg 
  })
  }
  render() {
    const{
      data,
      activeState,
      
    }=this.state;
    const  newList=data.filter((item)=>{
      if(activeState==='all'){
          return true;
        }
        if(activeState==='active'){
          return item.isActive ===true;
        }
        if(activeState==='nonactive'){
          return item.isActive ===false;
        }
        return false;
      });
  
    return (
      <Tools LabelValue={activeState} onAction={this.onListChange}>
        <div>
        <SimpleList onLabelClick={this.HandLabelClick} data={newList} onAction={this.handleDelete}/>
    </div>
    </Tools>
    )
  }
}
