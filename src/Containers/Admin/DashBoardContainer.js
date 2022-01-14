import React from 'react'
const DashBoardContainer = () => {
    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{'Ngay'}</h3>
                                    <h5>
                                        <strong>{'đ'}</strong>
                                    </h5>
                                    <p>Đơn hàng trong ngày</p>
                                </div>

                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                                <a href={"orders/day"} className="small-box-footer">Xem chi tiết <i className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{'Thang'}</h3>
                                    <h5><strong>{'đ'}</strong></h5>
                                    <p>Đơn hàng trong tháng</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph"></i>
                                </div>
                                <a href="orders/month" className="small-box-footer">Xem chi tiết <i className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{'Năm'}</h3>
                                    <h5><strong>{'đ'}</strong></h5>
                                    <p>Đơn hàng trong năm</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                                <a href="orders/year" className="small-box-footer">Xem chi tiết <i className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default DashBoardContainer