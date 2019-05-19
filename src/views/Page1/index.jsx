import React from 'react';

import { withRouter } from 'react-router-dom';
import Button from '../../components/Button/Button';


class Page1 extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Button click={(e) => this.props.history.push('/')}>Home.</Button>
        <Button className="btn-danger" click={(e) => this.props.history.push('/page2/')}>Page 2</Button>
      </React.Fragment>)
  }
}

export default withRouter(Page1);