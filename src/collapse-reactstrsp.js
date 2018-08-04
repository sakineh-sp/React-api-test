import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: 0 };
  }

  toggle(i) {
    if(this.state.collapse==i)
      this.setState({ collapse: 0 });
    else
      this.setState({ collapse: i });
  }

  render() {
    return (
      <div>
        <div>
          <Button color="primary" onClick={()=> this.toggle(1)} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={this.state.collapse==1}>
            <Card>
              <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div>
          <Button color="primary" onClick={()=> this.toggle(2)} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={this.state.collapse==2}>
            <Card>
              <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Example;