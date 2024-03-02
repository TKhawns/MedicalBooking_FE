import React from 'react';
import './About.scss';
function About() {
    return (
        <div className="about-section">
            <div className="about-header">Truyền thông nói về BookingKare</div>
            <div className="about-content">
                <div className="content-left">
                    <iframe
                        width="592"
                        height="332"
                        src="https://www.youtube.com/embed/FyDQljKtWnI"
                        title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="content-right">
                    <p>
                        <i>
                            Sức khỏe là vốn quý giá nhất mà con người được ban tặng. Sống trong một thế giới hiện đại,
                            chúng ta thường xuyên bận rộn với công việc và áp lực cuộc sống, đôi khi quên đi việc quan
                            tâm đến sức khỏe của bản thân. Tuy nhiên, sức khỏe là nền tảng quan trọng để chúng ta có thể
                            đối mặt và vượt qua mọi khó khăn trong cuộc sống.
                        </i>
                    </p>
                    <p>
                        <i>
                            Để duy trì sức khỏe tốt, chúng ta cần chú ý đến ba yếu tố cơ bản: dinh dưỡng, vận động và
                            tâm lý. Việc ăn uống cân đối, giàu dinh dưỡng và đủ nước là cách đầu tiên để bảo vệ cơ thể
                            khỏi các bệnh tật. Hãy ưu tiên các loại thực phẩm tươi ngon, tránh thức ăn nhanh và thức
                            uống có đường. Vận động thường xuyên cũng rất quan trọng. Dù là một bài tập nhẹ nhàng như đi
                            bộ hàng ngày hay một bài tập thể dục nặng hơn, đều giúp cơ thể khỏe mạnh và tăng cường hệ
                            miễn dịch. Đừng quên tham gia các hoạt động thể chất mà bạn yêu thích để duy trì động lực và
                            thú vị. Ngoài ra, tâm lý cũng đóng vai trò quan trọng trong sức khỏe tổng thể. Đừng ngần
                            ngại tìm kiếm sự hỗ trợ từ các chuyên gia nếu cần thiết.
                        </i>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
