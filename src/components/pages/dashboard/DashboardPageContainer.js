import React from 'react';
import { Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import LayoutContainer from 'components/LayoutContainer';
import reactMixin from 'react-mixin';

/**
 * Main page
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { router } = this.context;

    return (
      <LayoutContainer headerText='Мониторинг'>
        <div className="wrap page-content">
          {'text'}
        </div>
      </LayoutContainer>
    )
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Dashboard;
