require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import HomeIcon from 'material-ui/svg-icons/action/home';
import config from 'config';
import is from 'is_js';

const devtools = (() => {
  if (config.appEnv === 'dev') {
    const DevTools = require('components/DevTools').default;
    //console.log(DevTools);
    return <DevTools />;
  } else {
    return null;
  }
})();

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headerText } = this.props;

    const leftIcon = <noscript />;
    const rightIcon = <noscript />;

    return (
      <div id="main">
        {devtools}
        <AppBar
          title={headerText}
          iconElementLeft={leftIcon}
          iconElementRight={rightIcon}
        />
        {this.props.children}
      </div>
    );
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Layout;
