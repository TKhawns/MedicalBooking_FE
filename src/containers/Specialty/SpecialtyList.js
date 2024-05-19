import Header from '../../styles/Header/Header';
import Footer from '../Home/Footer/Footer';
import './SpecialtyList.scss';

function SpecialtyPage() {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div className="top-content">
                    <div className="route-content">
                        <a href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                preserveAspectRatio="none"
                                viewBox="0 0 20 20"
                                fill="#45c3d2"
                                style={{ paddingBottom: '2px' }}
                            >
                                <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8z"></path>
                            </svg>
                            <span> / </span>
                        </a>
                        <div className="route-item">Khám chuyên khoa</div>
                    </div>
                </div>
                <div className="bot-content">
                    <div className="grid-container">
                        <a className="grid-item" href="/musculoskeletal">
                            <div className="image">
                                <img
                                    alt="Cơ Xương Khớp"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101627-co-xuong-khop.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101627-co-xuong-khop.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-co-xuong-khop.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101627-co-xuong-khop.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101627-co-xuong-khop.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101627-co-xuong-khop.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101627-co-xuong-khop.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101627-co-xuong-khop.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101627-co-xuong-khop.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101627-co-xuong-khop.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101627-co-xuong-khop.png"
                                />
                            </div>
                            <span className="text">Cơ xương khớp</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Thần kinh"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101739-than-kinh.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101739-than-kinh.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101739-than-kinh.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101739-than-kinh.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101739-than-kinh.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101739-than-kinh.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101739-than-kinh.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101739-than-kinh.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101739-than-kinh.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101739-than-kinh.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101739-than-kinh.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101739-than-kinh.png"
                                />
                            </div>
                            <span className="text">Thần kinh</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Tiêu hoá"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101713-tieu-hoa.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101713-tieu-hoa.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101713-tieu-hoa.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101713-tieu-hoa.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-tieu-hoa.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101713-tieu-hoa.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101713-tieu-hoa.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101713-tieu-hoa.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101713-tieu-hoa.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-tieu-hoa.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-tieu-hoa.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101713-tieu-hoa.png"
                                />
                            </div>
                            <span className="text">Tiêu hóa</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Tim mạch"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101713-tim-mach.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101713-tim-mach.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101713-tim-mach.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101713-tim-mach.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-tim-mach.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101713-tim-mach.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101713-tim-mach.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101713-tim-mach.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101713-tim-mach.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-tim-mach.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-tim-mach.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101713-tim-mach.png"
                                />
                            </div>
                            <span className="text">Tim mạch</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Tai Mũi Họng"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101713-tai-mui-hong.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101713-tai-mui-hong.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101713-tai-mui-hong.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101713-tai-mui-hong.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-tai-mui-hong.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101713-tai-mui-hong.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101713-tai-mui-hong.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101713-tai-mui-hong.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101713-tai-mui-hong.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-tai-mui-hong.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-tai-mui-hong.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101713-tai-mui-hong.png"
                                />
                            </div>
                            <span className="text">Tai mũi họng</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Cột sống"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101627-cot-song.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101627-cot-song.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-cot-song.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-cot-song.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101627-cot-song.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101627-cot-song.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101627-cot-song.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101627-cot-song.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101627-cot-song.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101627-cot-song.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101627-cot-song.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101627-cot-song.png"
                                />
                            </div>
                            <span className="text">Cột sống</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Y học Cổ truyền"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101739-y-hoc-co-truyen.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101739-y-hoc-co-truyen.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101739-y-hoc-co-truyen.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101739-y-hoc-co-truyen.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101739-y-hoc-co-truyen.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101739-y-hoc-co-truyen.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101739-y-hoc-co-truyen.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101739-y-hoc-co-truyen.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101739-y-hoc-co-truyen.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101739-y-hoc-co-truyen.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101739-y-hoc-co-truyen.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101739-y-hoc-co-truyen.png"
                                />
                            </div>
                            <span className="text">Y học Cổ truyền</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Châm cứu"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101627-cham-cuu.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101627-cham-cuu.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-cham-cuu.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101627-cham-cuu.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101627-cham-cuu.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101627-cham-cuu.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101627-cham-cuu.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101627-cham-cuu.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101627-cham-cuu.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101627-cham-cuu.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101627-cham-cuu.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101627-cham-cuu.png"
                                />
                            </div>
                            <span className="text">Châm cứu</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Sản Phụ khoa"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101713-san-phu-khoa.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101713-san-phu-khoa.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101713-san-phu-khoa.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101713-san-phu-khoa.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-san-phu-khoa.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101713-san-phu-khoa.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101713-san-phu-khoa.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101713-san-phu-khoa.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101713-san-phu-khoa.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-san-phu-khoa.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-san-phu-khoa.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101713-san-phu-khoa.png"
                                />
                            </div>
                            <span className="text">Sản phụ khoa</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Siêu âm thai"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101713-sieu-am-thai.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101713-sieu-am-thai.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101713-sieu-am-thai.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101713-sieu-am-thai.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-sieu-am-thai.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101713-sieu-am-thai.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101713-sieu-am-thai.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101713-sieu-am-thai.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101713-sieu-am-thai.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-sieu-am-thai.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101713-sieu-am-thai.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101713-sieu-am-thai.png"
                                />
                            </div>
                            <span className="text">Siêu âm thai</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Nhi khoa"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101655-nhi-khoa.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101655-nhi-khoa.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101655-nhi-khoa.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101655-nhi-khoa.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101655-nhi-khoa.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101655-nhi-khoa.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101655-nhi-khoa.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101655-nhi-khoa.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101655-nhi-khoa.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101655-nhi-khoa.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101655-nhi-khoa.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101655-nhi-khoa.png"
                                />
                            </div>
                            <span className="text">Nhi khoa</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Da liễu"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101638-da-lieu.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101638-da-lieu.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101638-da-lieu.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101638-da-lieu.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101638-da-lieu.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101638-da-lieu.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101638-da-lieu.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101638-da-lieu.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101638-da-lieu.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101638-da-lieu.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101638-da-lieu.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101638-da-lieu.png"
                                />
                            </div>
                            <span className="text">Da liễu</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Bệnh Viêm gan"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101739-viem-gan.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101739-viem-gan.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101739-viem-gan.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101739-viem-gan.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101739-viem-gan.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101739-viem-gan.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101739-viem-gan.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101739-viem-gan.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101739-viem-gan.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101739-viem-gan.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101739-viem-gan.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101739-viem-gan.png"
                                />
                            </div>
                            <span className="text">Bệnh viêm gan</span>
                        </a>
                        <a className="grid-item">
                            <div className="image">
                                <img
                                    alt="Dị ứng miễn dịch"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    sizes="(max-width: 576px) 40vw, (min-width: 576px) and (max-width: 768px) 30vw, 20vw"
                                    srcset="https://cdn.bookingcare.vn/fo/w128/2023/12/26/101638-di-ung-mien-dich.png 128w, https://cdn.bookingcare.vn/fo/w256/2023/12/26/101638-di-ung-mien-dich.png 256w, https://cdn.bookingcare.vn/fo/w384/2023/12/26/101638-di-ung-mien-dich.png 384w, https://cdn.bookingcare.vn/fo/w640/2023/12/26/101638-di-ung-mien-dich.png 640w, https://cdn.bookingcare.vn/fo/w750/2023/12/26/101638-di-ung-mien-dich.png 750w, https://cdn.bookingcare.vn/fo/w828/2023/12/26/101638-di-ung-mien-dich.png 828w, https://cdn.bookingcare.vn/fo/w1080/2023/12/26/101638-di-ung-mien-dich.png 1080w, https://cdn.bookingcare.vn/fo/w1200/2023/12/26/101638-di-ung-mien-dich.png 1200w, https://cdn.bookingcare.vn/fo/w1920/2023/12/26/101638-di-ung-mien-dich.png 1920w, https://cdn.bookingcare.vn/fo/2023/12/26/101638-di-ung-mien-dich.png 2048w, https://cdn.bookingcare.vn/fo/2023/12/26/101638-di-ung-mien-dich.png 3840w"
                                    src="https://cdn.bookingcare.vn/fo/2023/12/26/101638-di-ung-mien-dich.png"
                                />
                            </div>
                            <span className="text">Dị ứng miễn dịch</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SpecialtyPage;
