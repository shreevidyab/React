import React, { Component } from "react";
import SideBar from "../components/sidebar";
import "../App.css";
import { connect } from "react-redux";
import { fetchData, compareData, deleteData } from "../store/action";

class List extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    let details =
      this.props.value &&
      this.props.data.map(details => {
        if (this.props.value === details.id) {
          return (
            <SideBar
              key={details.id}
              companyCode={details.companyCode}
              subSeriesId={details.subSeriesId}
              name={details.name}
              subSeriesName={details.subSeriesName}
              seriesName={details.seriesName}
              seriesId={details.seriesId}
              id={details.id}
              deleteFunt={this.props.onDelete.bind(this, details.id)}
            />
          );
        }
      });

    let abc =
      this.props.value == 0 ? (
        "Click on particuler item to view the details"
      ) : (
        <div>{details}</div>
      );

    let listData =
      this.props.data &&
      this.props.data.map(details => {
        return (
          <div
            className={
              "card " + (this.props.value == details.id ? "selected" : "")
            }
            key={details.id}
            onClick={this.props.onCompare.bind(this, details.id)}
          >
            <div className="card-body">
              <p className="card-text">
                {details.name} - {details.seriesName}
              </p>
            </div>
          </div>
        );
      });
    return (
      <div className="row list">
        <div className="col-md-2">{listData}</div>
        <div className="col-md-3 info">{abc}</div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return { value: state.value, data: state.data };
};

const mapDispatchprops = dispatch => {
  return {
    onFetchData: () => dispatch(fetchData()),
    onCompare: item => dispatch(compareData(item)),
    onDelete: item => dispatch(deleteData(item))
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchprops
)(List);
