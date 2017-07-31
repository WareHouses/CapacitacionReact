import React from 'react'
import ListHeader from './components/ListHeader'
import ItemInput from './components/ItemInput'
import ItemContainer from './components/ItemContainer'

import { connect } from 'react-redux'
import { addTask } from './actions'

class AppContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  handleClick = (e) =>{
    e.preventDefault()
    var text = document.getElementById("task").value
    console.log("text: "+text)
    this.props.dispatch(addTask(text));
  }

  render(){
    return(
      <div>
        <ListHeader title={"Lista"}/>
        <ItemInput handleClick={this.handleClick}/>
        <ItemContainer items={this.props.items}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    items: state.todo
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    dispatch: dispatch
  }
}

const App = connect(mapStateToProps,mapDispatchToProps)(AppContainer)

export default App;
