import React, { memo } from "react";

function JobItem({ job, onChangeStatus, onConfirmDelete, onGetJobInfo }) {
  return (
    <>
      <li
        className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
        style={{ backgroundColor: "#f4f6f7" }}
      >
        <div>
          <input
            onChange={() => onChangeStatus(job.id)}
            className="form-check-input me-2"
            type="checkbox"
            checked={job.status}
          />
          {job.status ? <s>{job.name}</s> : <span>{job.name}</span>}
        </div>
        <div className="d-flex gap-3">
          <i
            onClick={() => onGetJobInfo(job)}
            className="fas fa-pen-to-square text-warning"
          />
          <i
            onClick={() => onConfirmDelete(job.id)}
            className="far fa-trash-can text-danger"
          />
        </div>
      </li>
    </>
  );
}

export default memo(JobItem);
