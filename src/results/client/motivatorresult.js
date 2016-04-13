import React from 'react';

class MotivatorResult extends React.Component {
  render() {
    return (<tr>
      <td>{this.props.data.email}</td>
      {this.props.motivators.map(motivator => (
        [<td key={motivator}>{this.props.data.motivators[motivator].index}</td>,
        <td key={motivator + 1}>{this.props.data.motivators[motivator].priority}</td>]))
      }
    </tr>);
  }
}

MotivatorResult.propTypes = {
  data: React.PropTypes.object,
  motivators: React.PropTypes.array,
};

MotivatorResult.defaultProps = {
  data: {},
  motivators: [],
};

export default MotivatorResult;
