import 'core-js/fn/object/assign';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import Routes from 'components/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import configureStore from 'stores/configureStore';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import defaultTheme from 'themes/default';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const theme = getMuiTheme(defaultTheme);

injectTapEventPlugin();

const store = configureStore();

render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={hashHistory} >
        {Routes}
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
