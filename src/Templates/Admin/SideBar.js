import React, { useEffect, useState } from 'react';

const SideBar = (props) => {
    const [pageURL, setPageURL] = useState('');

    useEffect(() => {
        setPageURL(window.location.pathname);
    }, [])
    console.log('location', pageURL);

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="lib/images/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search"
                            aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li className="nav-item menu-open">
                            <a href="/" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>
                        <li className="nav-item menu-is-opening menu-open">
                            <a href="#" className={pageURL.startsWith('/products') || pageURL.startsWith('/add-products') ? "nav-link active" : "nav-link"}>
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Danh M???c S???n Ph???m
                                </p>
                                <i className="fas fa-angle-left right"></i>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="/products" className={pageURL.startsWith('/products') ? "nav-link  active" : 'nav-link '}>
                                        <i className="nav-icon fab fa-product-hunt"></i>
                                        <p>S???n Ph???m</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/add-products" className={pageURL.startsWith('/add-products') ? "nav-link active" : "nav-link"}>
                                        <i className="nav-icon far fa-plus-square"></i>
                                        <p>Th??m S???n Ph???m</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item menu-is-opening menu-open">
                            <a href="#" className={pageURL.startsWith('/customers') || pageURL.startsWith('/add-customer') ? "nav-link active" : "nav-link"}>
                                <i className="nav-icon fas fa-user-tie"></i>
                                <p>
                                    Qu???n l?? Kh??ch H??ng
                                </p>
                                <i className="fas fa-angle-left right"></i>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="/customers" className={pageURL.startsWith('/customers') ? "nav-link active" : "nav-link"}>
                                        <i className="nav-icon far fa-address-card"></i>
                                        <p>Kh??ch H??ng</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/add-customer" className={pageURL.startsWith('/add-customer') ? "nav-link active" : "nav-link"}>
                                        <i className="nav-icon fas fa-user-plus"></i>
                                        <p>Th??m Kh??ch H??ng</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item menu-is-opening menu-open">
                            <a href="/orders" className="nav-link">
                                <i className="nav-icon  fas fa-luggage-cart"></i>
                                <p>
                                    Qu???n L?? ????n H??ng
                                </p>
                                {/* <i className="fas fa-angle-left right"></i> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/units" className="nav-link">
                                <i className="nav-icon fab fa-autoprefixer"></i>
                                <p>
                                    ????n V??? T??nh
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
export default SideBar