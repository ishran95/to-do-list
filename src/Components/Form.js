import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ""
    }
  }
 
  handleTaskDescriptionChange= (e) => {
    this.setState({task:e.target.value});
    
  }
  handleSubmit= (e) => {
    e.preventDefault()
    this.props.addTask(this.state.task)

  }
  
  
  render() {
    console.log(this.state.task)
    return (
    <form
     onSubmit={this.handleSubmit}
    >
      <input type="texte" className="custom-file-input" id="" onChange={this.handleTaskDescriptionChange.bind(this)}/>/
      <button type="submit" className="btn btn-primary">Submit/</button>
    </form>
     
    )
    
  }
}

export default Form