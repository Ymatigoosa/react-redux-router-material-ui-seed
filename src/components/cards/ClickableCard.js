import React from 'react';
import { Card } from 'material-ui/Card';

class ClickableCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: false
    };
  }

  render() {
    const { onClick, children, ...rest } = this.props;
    return (
      <Card
        showExpandableButton={false}
        onTouchTap={onClick}
        actAsExpander={true}
        initiallyExpanded={true}
        onMouseEnter={() => this.setState({highlighted: true})}
        onMouseLeave={() => this.setState({highlighted: false})}
        containerStyle={this.state.highlighted ? {backgroundColor: 'rgba(0, 0, 0, 0.1)'} : null}
        {...rest}>
        {children}
      </Card>
    );
  }
}

export default ClickableCard;
