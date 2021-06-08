import React from 'react';

class HornedBeasts extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      Votes : 0 
    }
  }

 setVotes = () => {
    let numOfVotes = this.state.Votes;
    this.setState({
      Votes : numOfVotes += 1
    })
 }

  render() {
    // console.log(this, this.props);
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
          <img onClick={this.setVotes} src={this.props.imageUrl} alt={this.props.keyword}></img>
          <p>Description : {this.props.description}</p>
          <p>Horns : {this.props.horns}</p>
          <p>Votes : {this.state.Votes}</p>
        </div>
      </div>
    );
  }
}
export default HornedBeasts;

