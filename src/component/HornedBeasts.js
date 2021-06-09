import React from 'react';
import SelectedBeast from './SelectedBeast';


import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'




class HornedBeasts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      Votes: 0,
      show: false
    }
  }

  setVotes = () => {
    let numOfVotes = this.state.Votes;
    this.setState({
      Votes: numOfVotes += 1
    })
    this.modalShow();
  }

  modalShow = () => {
    this.setState({ show: true });
  };

  modalClose = () => {
    this.setState({ show: false });
  };

  render() {

    return (
      <>

        <Card style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" onClick={this.setVotes} src={this.props.imageUrl} alt={this.props.keyword} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem> Horns : {this.props.horns}</ListGroupItem>
            <ListGroupItem> ❤️ :  {this.state.Votes}</ListGroupItem>
          </ListGroup>
        </Card>

        <SelectedBeast
          show={this.state.show}
          modalClose={this.modalClose}
          title={this.props.title}
          description={this.props.description}
          imageUrl={this.props.imageUrl}
          horns={this.props.horns}
        />
      </>
    );
  }
}
export default HornedBeasts;
