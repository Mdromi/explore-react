import React from "react";

const Loading = () => {
  return (
    <div className="d-flex align-item-center justify-content-between">
      <strong>Loading...</strong>
      <div
        className="spinner-border text-danger ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loading;
