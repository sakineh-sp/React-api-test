import React, { Component } from 'react';
import { ListGroup,ListGroupItem} from 'react-bootstrap';

class List extends Component {
  render() {
    return (
      <div>
      {/* <ListGroup> */}
          {this.props.contacts.map(contact =>
            <h1 key={contact.username}>{contact.username}</h1>
          )}

          {/* <ListGroupItem header={this.props.contacts[0].name}>
            Some body text</ListGroupItem>
          <ListGroupItem header="Heading 2" href="#">
            Linked item
          </ListGroupItem>
          <ListGroupItem header="Heading 3" bsStyle="info">
            Danger styling
          </ListGroupItem>
      </ListGroup> */}
      </div>
    );
  }
}

export default List;
