<template>
    <section v-if="sectionData" class="page-section travel-product">
      <div class="container">
        <div class="row justify-content-center justify-content-md-between page-section__item">
          <div class="col-8 col-md-4 page-section__img">
            <div class="phone-slider wow fadeInLeftMedium">
              <div class="owl-carousel">
                <img
                    :class="{
                      'white-slide': slide.white_slide === true
                    }"
                    :src="slide.image"
                    alt=""
                    v-for="slide in sectionData.block_1.slides"
                >
              </div>
              <img class="phone-slider-bg" data-wow-offset="300" :src="this.$store.state.themeUrl + '/img/phone-2.png'" alt="/">
            </div>
          </div>
          <div class="col-10 col-md col-lg-8 page-section__content">
            <h2 class="wow fadeInUp">{{ sectionData.block_1.title }}</h2>
            <ul class="main-list arrows">
              <li
                  class="wow fadeInUp"
                  data-wow-delay="0.1s"
                  v-for="feature in sectionData.block_1.list_item"
                  v-html="feature.text"
              >
              </li>
            </ul>
          </div>
        </div>
        <div class="row justify-content-center justify-content-md-between page-section__item">
          <div class="col-11 col-md page-section__content">
            <h2 class="text-center text-md-left wow fadeInUp">{{ sectionData.block_2.title }}</h2>
            <ul class="main-list check">
              <li
                  class="wow fadeInUp"
                  data-wow-delay="0.1s"
                  v-for="feature in sectionData.block_2.list_item"
                  v-html="feature.text"
              >

              </li>
            </ul>
          </div>
          <div class="col-8 col-md-4 page-section__img">
            <div class="phone-slider wow fadeInRightMedium">
              <div class="owl-carousel">
                <img
                    :class="{
                      'white-slide': slide.white_slide === true
                    }"
                    :src="slide.image"
                    alt=""
                    v-for="slide in sectionData.block_2.slides"
                >
              </div>
              <img class="phone-slider-bg" data-wow-offset="300" :src="this.$store.state.themeUrl + '/img/phone-2.png'" alt="/">
            </div>
          </div>
        </div>
        <div class="row justify-content-center justify-content-md-between page-section__item">
          <div class="col-8 col-md-4 page-section__img phone-rupor">
            <img class="phone--img wow fadeInUpMedium" data-wow-offset="200" :src="this.$store.state.themeUrl + '/img/phone-4.png'" alt="/">
            <img class="phone--bg wow bounceIn" data-wow-duration="1s" data-wow-offset="200" data-wow-delay="0.3s" :src="this.$store.state.themeUrl + '/img/phone-4-bg.png'" alt="/">
            <img class="phone--bg2 wow bounceIn" data-wow-duration="1s" data-wow-offset="200" data-wow-delay="0.4s" :src="this.$store.state.themeUrl + '/img/phone-4-bg2.png'" alt="/">
          </div>
          <div class="col-11 col-md-8 page-section__content pr-0">
            <h2 class="wow fadeInUp">{{ sectionData.block_3.title }}</h2>
            <ul class="main-list arrows">
              <li
                  class="wow fadeInUp"
                  data-wow-delay="0.1s"
                  v-for="feature in sectionData.block_3.list_item"
                  v-html="feature.text"
              >
              </li>
            </ul>
          </div>
        </div>
        <div class="row justify-content-center justify-content-md-between page-section__item">
          <div class="col-10 col-md-7 page-section__content">
            <h2 class="text-center text-md-left">{{ sectionData.block_4.title }}</h2>
            <div v-html="sectionData.block_4.text"></div>

            <h2 class="text-center text-md-left pt-3 pt-md-2 pt-lg-3 mb-3">{{ sectionData.block_4.subtitle }}</h2>
            <div v-html="sectionData.block_4.sub_text"></div>
            <a href="#" data-toggle="modal" data-target="#coming-soon-modal" class="btn btn-blue">{{ sectionData.block_4.button_text }}</a>
          </div>
          <div class="col-8 col-md-4 page-section__img">
            <img class="phone--img wow fadeInUpMedium" :src="this.$store.state.themeUrl + '/img/phone-5.png'" alt="/">
            <div class="phone--bulb">
              <img class="wow bounceIn" data-wow-delay="0.3s" data-wow-duration="0.7s" :src="this.$store.state.themeUrl + '/img/phone-5-2.png'" alt="/">
              <img class="wow fadeInUp" data-wow-delay="1s" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/user1.png'" alt="/">
              <img class="wow fadeInUp" data-wow-delay="1.5s" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/user2.png'" alt="/">
            </div>
          </div>
        </div>
        <div class="row justify-content-center justify-content-md-between page-section__item">
          <div class="col-8 col-md-4 page-section__img">
            <img class="phone--img wow fadeInUpMedium" :src="this.$store.state.themeUrl + '/img/phone-6.png'" alt="/">
            <div class=" education-icons">
              <img class="wow bounceIn" data-wow-delay="100ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu1.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="200ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu2.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="300ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu3.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="400ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu4.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="500ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu5.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="600ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu6.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="700ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu7.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="800ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu8.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="900ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu9.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1000ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu10.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1100ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu11.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1200ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu12.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1300ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu13.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1400ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu14.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1500ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu15.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1600ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu16.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1700ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu17.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1800ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu18.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="1900ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu19.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="2000ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu20.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="2100ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu21.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="2200ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu22.svg'" alt="">
              <img class="wow bounceIn" data-wow-delay="2300ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu23.svg'" alt="">
              <img class="wow bounceInFlower" data-wow-delay="2400ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu24.svg'" alt="">
              <div class="education-plane wow planeEAnimation">
                <img class="stripe" :src="this.$store.state.themeUrl + '/img/education/stripe.svg'" alt="">
                <div class="stripeCover wow stripeAnimation" data-wow-delay="2500ms" data-wow-duration="2s"></div>
                <img class="plane wow planeAnimation" data-wow-delay="2500ms" data-wow-duration="1.05s" :src="this.$store.state.themeUrl + '/img/education/plane.svg'" alt="">
              </div>
              <img class="wow bounceIn" data-wow-delay="2600ms" data-wow-duration="0.5s" :src="this.$store.state.themeUrl + '/img/education/edu26.svg'" alt="">
            </div>
          </div>
          <div class="col-10 col-md-7 col-xl-8 page-section__content pr-0">
            <h2 class="text-center text-md-left mb-3">{{ sectionData.block_5.title }}</h2>
            <ul class="main-list arrows">
              <li
                  class="wow fadeInUp"
                  data-wow-delay="0.1s"
                  v-for="feature in sectionData.block_5.list_item"
                  v-html="feature.text"
              >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Vue from "q";

export default {
  props: {
    sectionData:{}
  },
  ready: function() {
    // this.listUsers();
  },
  mounted() {



    // ------- Header Scroll --------- //
    $(window).scroll(function(){
      var sticky = $('.page-header'),
          scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

// ------- /Header Scroll --------- //
// Page Header
    $('.page-header__hamburger').click( function() {
      var header = $('.page-header');
      header.toggleClass('is-opened');
    });
    $(".page-header__nav-main li a").on("click", function () {
      $('.page-header').removeClass('is-opened');
    });


// /Page Header

// /Owl Carousel
    $('.our-team .owl-carousel').owlCarousel({
      loop: true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
        0:{
          items:2
        },
        500:{
          items:3
        }
      }
    })
// Validation
    var valid = false;
    $(".sign-up-form .btn, .sign-up-form .form-control").on("click focusout", function () {
      $(this).closest(".sign-up-form").find(".form-control").each(function () {
        if ($(this).val() == "" && $(this).is(".required")) {
          $(this).closest(".form-group").addClass("invalid");
        } else {
          $(this).closest(".form-group").addClass("valid").removeClass("invalid");
        }
      });

      if ($(this).closest(".sign-up-form").find(".form-group.invalid").length == 0) {
        valid = true;
      }
      return false;
    });

    $(".sign-up-form .btn").on("click", function () {
      if (valid == true) {
        $.ajax({
          method: "POST",
          url: $(".sign-up-form").attr("action"),
          data: { action: 'send_request', query: true_posts, name: $("#name").val(), email: $("#email").val() }
        }).done(function( msg ) {
          $("#sign-up-modal").find(".modal-content").addClass("signed");
          setTimeout(function () {
            $("#sign-up-modal").find(".close").trigger("click");
            setTimeout(function () {
              $("#sign-up-modal").find(".modal-content").removeClass("signed");
            }, 3000);
          }, 3000);
        });
        // console.log("sent")
      }
    });
// /Validation

    $(".open-modal-coming-soon > a").attr("data-toggle", "modal").attr("data-target","#coming-soon-modal");
    $(".open-modal-contact > a").attr("data-toggle", "modal").attr("data-target","#contact-modal");
    $(".open-modal-signup > a").attr("data-toggle", "modal").attr("data-target","#sign-up-modal");

    $("a[data-target='#coming-soon-modal']").on("click", function () {
      setTimeout(function () {
        $(".modal .close").trigger("click");
      },3000);
    });


    // var owl = $('.phone-slider .owl-carousel');


    $('.phone-slider .owl-carousel').each(function () {
      var slider = $(this);
      slider.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000
      });
      slider.append('<span class="phone-nav dark"></span>');
      slider.append('<a href="#" class="slider-btn">Continue</a>');
      slider.on('changed.owl.carousel refreshed.owl.carousel', function(event) {
        sliderNav(slider, event);
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() - slider.height()/2 > slider.offset().top && $(window).scrollTop() - slider.height()/2 < slider.offset().top) {
          slider.trigger('play.owl.autoplay');
          slider.addClass("playing")
        } else {
          slider.trigger('stop.owl.autoplay');
          slider.removeClass("playing")
        }
        // console.log(slider.offset().top, $(window).scrollTop(), $(window).height())
        // console.log($(window).scrollTop() - slider.height()/2, slider.offset().top)
      })
    });

    function sliderNav(el, event) {
      if (el.find('.owl-item').eq(event.item.index).children('img').is(".white-slide")) {
        el.find(".phone-nav").addClass("white");
      } else {
        el.find(".phone-nav").removeClass("white");
      }
    }


    $(".nav-links").wrapInner( "<div></div>" );
    if ($(".nav-links .next").length) {
      $(".nav-links .next").appendTo( $(".nav-links") );
    } else {
      $(".nav-links").append('<a class="next"></a>')
    }
    if ($(".nav-links .prev").length) {
      $(".nav-links .prev").prependTo( $(".nav-links") );
    } else {
      $(".nav-links").prepend('<a class="prev"></a>')
    }
  }
}
</script>

<style>

</style>