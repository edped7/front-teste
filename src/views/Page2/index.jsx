import React from 'react';

import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';


class Page2 extends React.Component {

  render() {
    return(
      <React.Fragment>
        <Button color='secondary' onClick={(e) => this.props.history.push('/page1/')}>Page 1</Button>
        <Button color='primary' onClick={(e) => this.props.history.push('/')}>Home</Button>
      </React.Fragment>);
  }

}

export default withRouter(Page2);