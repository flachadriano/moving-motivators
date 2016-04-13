const _ = require('lodash');

function findAndReturnMotivator(items, index) {
  const result = _.find(items, item => item.id === index);
  return {
    index: result.idx,
    priority: result.value,
  };
}

function mapResult(result) {
  const resultsGroupedByEmail = _.groupBy(result.rows, item => item.email);

  return _.map(resultsGroupedByEmail, (resultArray, name) => ({
    email: name,
    motivators: {
      acceptance: findAndReturnMotivator(resultArray, 0),
      curiosity: findAndReturnMotivator(resultArray, 1),
      freedom: findAndReturnMotivator(resultArray, 2),
      goal: findAndReturnMotivator(resultArray, 3),
      honor: findAndReturnMotivator(resultArray, 4),
      mastery: findAndReturnMotivator(resultArray, 5),
      order: findAndReturnMotivator(resultArray, 6),
      power: findAndReturnMotivator(resultArray, 7),
      relatedness: findAndReturnMotivator(resultArray, 8),
      status: findAndReturnMotivator(resultArray, 9),
    }
  }));
}

module.exports = {
  mapResult,
};
