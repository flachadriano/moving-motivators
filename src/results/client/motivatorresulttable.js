import React from 'react';
import MotivatorResult from './motivatorresult';
import { translate } from './common/translations';
import { connect } from 'react-redux';
import Spinner from './spinner';

class MotivatorResultsTable extends React.Component {
  render() {
    const content = this.props.loading
      ? <Spinner />
      : <table className="table table-condensed table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Email</th>
              {this.props.motivators.map(motivator => <th colSpan="2" key={motivator} className="text-center">{translate(motivator, this.props.lang)}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.props.entries.map(result =>
              <MotivatorResult key={result.email} data={result} motivators={this.props.motivators} />)}
          </tbody>
        </table>;

    return (
      <div>
        { content }
      </div>
    );
  }
}

MotivatorResultsTable.propTypes = {
  loading: React.PropTypes.bool,
  entries: React.PropTypes.array,
  motivators: React.PropTypes.array,
  lang: React.PropTypes.string,
};

MotivatorResultsTable.defaultProps = {
  loading: false,
  entries: [],
  motivators: [],
  lang: 'HU',
};

function mapStateToProps(state) {
  return {
    loading: state.get('loading'),
    entries: state.get('entries').toJS(),
  };
}

const result = connect(mapStateToProps)(MotivatorResultsTable);

export default result;
