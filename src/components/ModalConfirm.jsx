import { useState } from "react";

export default function ModalConfirm({ isShow = false, onClose, onDelete }) {
  return (
    <>
      {isShow && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-header-custom">
              <h5>Xác nhận</h5>
              <i onClick={onClose} className="fas fa-xmark" />
            </div>
            <div className="modal-body-custom">
              <p>Bạn chắc chắn muốn xóa công việc quét nhà?</p>
            </div>
            <div className="modal-footer-footer">
              <button onClick={onClose} className="btn btn-light">
                Hủy
              </button>
              <button onClick={onDelete} className="btn btn-danger">
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
