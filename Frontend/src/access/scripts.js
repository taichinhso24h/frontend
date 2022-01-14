import $ from 'jquery';

$(document).ready(function ($) {
	"use strict";
	// Fly-Out Navigation
	$(".mvp-fly-but-click").on('click', function () {
		$("#mvp-fly-wrap").toggleClass("mvp-fly-menu");
		$(".mvp-fly-but-wrap").toggleClass("mvp-fly-open");
		$(".mvp-fly-fade").toggleClass("mvp-fly-fade-trans");
	});

	// Back to Top Button
	var duration = 500;
	$('.back-to-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, duration);
		return false;
	});

	// Search Toggle
	$(".mvp-search-click").on('click', function () {
		$("#mvp-search-wrap").toggleClass("mvp-search-toggle");
	});

	// Mobile Social Toggle
	$(".mvp-mob-soc-click").on('click', function () {
		$(".mvp-mob-soc-list").toggleClass("mvp-mob-soc-tog");
	});

	// Trending Toggle
	$(".mvp-post-trend-but-click").on('click', function () {
		$("#mvp-post-trend-wrap").toggleClass("mvp-post-trend-tog");
	});

	// Comments Toggle
	$(".mvp-com-click").on('click', function () {
		$("#comments").show();
		$("#disqus_thread").show();
		$("#mvp-comments-button").hide();
	});

	// Continue Reading Toggle
	$(".mvp-ad-rel-click").on('click', function () {
		$("#mvp-content-main").css('max-height', 'none');
		$('#mvp-ad-rel-wrap').css('margin-top', '20px');
		$("#mvp-ad-rel-top").hide();
	});

	// Columns Toggle
	$('.mvp-side-tab-wrap').each(function () {
		$(this).find(".mvp-tab-col-cont").hide(); //Hide all content
		$(this).find("ul.mvp-col-tabs li.mvp-feat-col-tab").addClass("active").show(); //Activate first tab
		$(this).find(".mvp-tab-col-cont:first").show(); //Show first tab content
	});

	$("ul.mvp-col-tabs li").on('click', function (e) {
		$(this).parents('.mvp-side-tab-wrap').find("ul.mvp-col-tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.mvp-side-tab-wrap').find(".mvp-tab-col-cont").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.mvp-side-tab-wrap').find(activeTab).fadeIn(); //Fade in the active ID content

		e.preventDefault();
	});

	$("ul.mvp-col-tabs li a").on('click', function (e) {
		e.preventDefault();
	});


	// menu
	$(".mvp-fly-nav-menu .menu-item-has-children").click(function () {
		$(this).addClass("toggled");
		if ($(".menu-item-has-children").hasClass("toggled")) {
			$(this).children("ul").toggle();
			$(".mvp-fly-nav-menu").getNiceScroll().resize();
		}
		$(this).toggleClass("tog-minus");
		return false;
	});
	// end menu

	$('.tabber-container').each(function() {
		$(this).find(".tabber-content").hide(); //Hide all content
		$(this).find("ul.mvp-col-tabs li.mvp-feat-col-tab").addClass("active").show(); //Activate first tab
		$(this).find(".tabber-content:first").show(); //Show first tab content
	});
	$(".mvp-score-nav-menu select").change(function(e) {
		$(this).parents('.tabber-container').find(".tabber-content").hide(); //Hide all tab content
		var activeTab = $(this).find("option:selected").val(); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabber-container').find(activeTab).fadeIn(); //Fade in the active ID content
		e.preventDefault();
	});
	$("ul.mvp-col-tabs li").on('click', function(e) {
		$(this).parents('.tabber-container').find("ul.mvp-col-tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.tabber-container').find(".tabber-content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabber-container').find(activeTab).fadeIn(); //Fade in the active ID content
		e.preventDefault();
	});
	$(".mvp-scores-menu select").change(function(e) {
		$(this).parents('.tabber-container').find(".tabber-content").hide(); //Hide all tab content
		var activeTab = $(this).find("option:selected").val(); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabber-container').find(activeTab).fadeIn(); //Fade in the active ID content
		e.preventDefault();
	});
	$("select.mvp-score-tabs option a").change(function(e) {
		e.preventDefault();
	})

});
