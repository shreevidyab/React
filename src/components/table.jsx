import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { fetchData } from "../store/action";

class Table extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }
  render() {
    const tableData =
      this.props.data &&
      this.props.data.map((data, index) => {
        return (
          <tr key={data.id}>
            <th scope="row">{index}</th>
            <td>{data.name}</td>
            <td>{data.subSeriesName}</td>
            <td>{data.seriesName}</td>
          </tr>
        );
      });
    return (
      <div>
        <table className="table table-striped col-md-6">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Subseries</th>
              <th scope="col">Series</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return { data: state.data };
};

const mapDispatchprops = dispatch => {
  return {
    onFetchData: () => dispatch(fetchData())
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchprops
)(Table);
