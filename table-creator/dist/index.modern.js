import { createElement } from 'react';

function TableCreator(props) {
  var headers = props.headers;
  return createElement("table", {
    id: 'table'
  }, createElement("thead", null, createElement("tr", null, headers.map(function (header) {
    return createElement("td", null, header);
  }))), props.data.map(function (datapoint, index) {
    return createElement("tr", {
      key: index
    }, headers.map(function (header) {
      return createElement("td", null, datapoint[header]);
    }));
  }));
}

export default TableCreator;
//# sourceMappingURL=index.modern.js.map
