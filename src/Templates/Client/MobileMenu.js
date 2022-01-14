import React, { Component } from 'react';

export default class MobileMenu extends Component {
    render() {
        return (
            <div id="mvp-fly-wrap">
                <div id="mvp-fly-menu-top" className="left relative">
                    <div className="mvp-fly-top-out left relative">
                        <div className="mvp-fly-top-in">
                            <div id="mvp-fly-logo" className="left relative">
                                <a href="https://mvpthemes.com/theleague/">
                                    <img src="https://mvpthemes.com/theleague/wp-content/themes/the-league/images/logos/logo-nav@2x.png" alt="The League" data-rjs="2" width="167" height="50" />
                                </a>
                            </div>

                        </div>

                        <div className="mvp-fly-but-wrap mvp-fly-but-menu mvp-fly-but-click">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                </div>

                <div id="mvp-fly-menu-wrap">
                    <nav className="mvp-fly-nav-menu left relative">
                        <div className="menu-main-menu-container">
                            <ul id="menu-main-menu" className="menu">
                                <li id="menu-item-7" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7">
                                    <a href="#">Schedule</a>
                                </li>
                                <li id="menu-item-1901" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1901">
                                    <a href="#">Live Scores</a>
                                </li>
                                <li id="menu-item-1929" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1929"><a href="https://mvpthemes.com/theleague/scores/">Scores</a></li>
                                <li id="menu-item-187" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-187"><a href="https://mvpthemes.com/theleague/shop/">Shop</a></li>
                                <li id="menu-item-8" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8">
                                    <a href="https://themeforest.net/item/the-league-sports-news-magazine-wordpress-theme/19488138?ref=mvpthemes">Buy Theme</a>
                                </li>
                                <li id="menu-item-118" className="mvp-mega-dropdown menu-item menu-item-type-taxonomy menu-item-object-category menu-item-118">
                                    <a href="https://mvpthemes.com/theleague/category/football/">Football</a>
                                </li>
                                <li id="menu-item-120" className="mvp-mega-dropdown menu-item menu-item-type-taxonomy menu-item-object-category menu-item-120">
                                    <a href="https://mvpthemes.com/theleague/category/baseball/">Baseball</a>
                                </li>
                                <li id="menu-item-122" className="mvp-mega-dropdown menu-item menu-item-type-taxonomy menu-item-object-category menu-item-122">
                                    <a href="https://mvpthemes.com/theleague/category/soccer/">Soccer</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div id="mvp-fly-soc-wrap">
                    <span className="mvp-fly-soc-head">Connect with us</span>
                    <ul className="mvp-fly-soc-list left relative">
                        <li><a href="http://www.facebook.com/envato" target="_blank" className="fab fa-facebook-f"></a></li>
                        <li><a href="http://www.twitter.com/mvpthemes" target="_blank" className="fab fa-twitter"></a></li>
                        <li><a href="http://www.pinterest.com/envato" target="_blank" className="fab fa-pinterest-p"></a></li>
                        <li><a href="http://www.instagram.com/envato" target="_blank" className="fab fa-instagram"></a></li>
                        <li><a href="https://www.tiktok.com/@mlb?lang=en" target="_blank" className="fab fa-tiktok"></a></li>
                        <li><a href="https://www.youtube.com/user/envato" target="_blank" className="fab fa-youtube"></a></li>
                        <li><a href="https://www.linkedin.com/company/envato" target="_blank" className="fab fa-linkedin"></a></li>
                        <li><a href="http://wonderfulworldofwebdesign.tumblr.com/" target="_blank" className="fab fa-tumblr"></a></li>
                    </ul>
                </div>

            </div>

        )
    }
}