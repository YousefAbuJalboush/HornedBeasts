import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

class SelectedBeast extends React.Component {

  render() {

    return (

      <Modal size="lg" ria-labelledby="contained-modal-title-vcenter" centered show={this.props.show} onHide={this.props.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.keyword} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Horns : {this.props.horns}</ListGroupItem>
            </ListGroup>
          </Card>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.modalClose} >Close</Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default SelectedBeast;
