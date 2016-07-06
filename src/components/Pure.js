import PureRenderMixin from 'react-addons-pure-render-mixin';
import React from 'react';

/**
 * High-order pure rennder component
 */
export default Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return <Component {...this.props} />;
  }
}
