import React from "react";
import "./Loading.scss";

export default function Loading() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="spinner"></div>
                </div>
            </div>
        </div>
    );
}
