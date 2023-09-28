import React from "react";
import { media_links } from "../../assets/media-links";
import './Steps.scss';
import Button from '../Button';

function FourStep() {

    return (
        <div className="step-4-wrapper">
            <h3 className="step-4-title">Cảm ơn bạn đã hoàn thành đơn ứng tuyển vào CLB ISTECH</h3>
            <p>
                Kết quả vòng đơn sẽ được gửi về email của các bạn trong thời
                gian sớm nhất. Trong lúc đó bạn hãy đón chờ những thông tin mới
                nhất về câu lạc bộ qua trang Facebook{" "}
                <a className="media-link" href={media_links.facebook}>ISTECH</a> nhé!
            </p>
            <section className="step-4-btn-wrapper"><Button to="/" className="btn-home-register">Go to Homepage</Button></section>
        </div>
    );
}

export default FourStep;
