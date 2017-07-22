import React from 'react'
import ListHeader from './components/ListHeader'
import ItemInput from './components/ItemInput'
import ItemContainer from './components/ItemContainer'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[
        {key: 1, text: "ir al baño"},
        {key: 2, text: "ir al mercado"},
        {key: 3, text: "ambas y ninguna"}
      ]
    }
  }

  handleClick = (e) =>{
    e.preventDefault()
    var aux = this.state.items
    var text = document.getElementById("task").value
    var key = aux[aux.length - 1].key+1
    aux.push({ key , text })
    this.setState({items: aux})
    console.log(this.state.items)
  }

  render(){
    return(
      <div>
        <ListHeader title={"Lista"}/>
        <ItemInput handleClick={this.handleClick}/>
        <ItemContainer items={this.state.items}/>
      </div>
    );
  }
}

export default App;
