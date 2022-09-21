var React = require('react');

function TableCreator(props) {
  var headers = props.headers;
  return React.createElement("table", {
    id: 'table'
  }, React.createElement("thead", null, React.createElement("tr", null, headers.map(function (header) {
    return React.createElement("td", null, header);
  }))), props.data.map(function (datapoint, index) {
    return React.createElement("tr", {
      key: index
    }, headers.map(function (header) {
      return React.createElement("td", null, datapoint[header]);
    }));
  }));
}

module.exports = TableCreator;
//# sourceMappingURL=index.js.map
