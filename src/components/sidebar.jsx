import React from "react";

const SideBar = props => {
  return (
    <div>
      <p className="header">Details of {props.name}</p>
      <div className="contentBody">
        <p>
          <span className="title">CompanyCode </span> :
          <span> {props.companyCode}</span>
        </p>
        <p>
          <span className="title">SubSeriesId</span> :
          <span> {props.subSeriesId}</span>
        </p>
        <p>
          <span className="title">Name </span> : <span> {props.name}</span>
        </p>
        <p>
          <span className="title">SubSeriesName</span> :
          <span> {props.subSeriesName}</span>
        </p>
        <p>
          <span className="title">SeriesName</span> :{" "}
          <span> {props.seriesName}</span>
        </p>
        <p>
          <span className="title">SeriesId</span> :{" "}
          <span> {props.seriesId}</span>
        </p>
        <p>
          <span className="title"> Id</span> : <span> {props.id}</span>
        </p>
      </div>
      <button className="btn btn-info col-md-10" onClick={props.deleteFunt}>
        Delete
      </button>
    </div>
  );
};

export default SideBar;
