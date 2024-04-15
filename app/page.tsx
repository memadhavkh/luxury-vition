"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Loader from "@/Components/Loader";
import HomePage from "@/Components/HomePage";

export default function Home() {
  useEffect(() => {
    // function crsrAnim() {
    //   const cursor = document.querySelector(".cursor");
    //   const innerContent = document.querySelector(".inner-content");

    //   innerContent?.addEventListener("mousemove", (e) => {
    //     gsap.to(cursor, {
    //       x: e.x + "px",
    //       y: e.y + "px",
    //     });
    //   });

    //   innerContent?.addEventListener("mouseenter", () => {
    //     gsap.to(cursor, {
    //       scale: 1,
    //       opacity: 1,
    //     });
    //   });
    //   innerContent?.addEventListener("mouseleave", () => {
    //     gsap.to(cursor, {
    //       scale: 0,
    //       opacity: 0,
    //     });
    //   });
    // }
    // function loco() {
    //   gsap.registerPlugin(ScrollTrigger);

    //   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    //   const locoScroll = new LocomotiveScroll({
    //     el: document.querySelector(".main"),
    //     smooth: true,
    //   });

    //   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    //   locoScroll.on("scroll", ScrollTrigger.update);

    //   // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    //   ScrollTrigger.scrollerProxy(".main", {
    //     scrollTop(value) {
    //       return arguments.length
    //         ? locoScroll.scrollTo(value, 0, 0)
    //         : locoScroll.scroll.instance.scroll.y;
    //     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    //     getBoundingClientRect() {
    //       return {
    //         top: 0,
    //         left: 0,
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //       };
    //     },
    //     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    //     pinType: document.querySelector(".main").style.transform
    //       ? "transform"
    //       : "fixed",
    //   });

    //   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    //   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    //   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    //   ScrollTrigger.refresh();
    // }
    function page2TopAnim() {
      gsap.from(".first-text h3, .second-text h3", {
        y: 60,
        scrollTrigger: {
          scroller: ".main",
          trigger: ".first-text h3,.second-text h3",
          start: "top 100%",
          end: "top 98%",
          duration: 0.8,
          scrub: 1,
        },
      });
      gsap.to(".page2-top-border", {
        width: 94 + "vw",
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page2-top-border",
          start: "top 92%",
          end: "top 89%",
          duration: 5,
          scrub: 1,
        },
      });
      gsap.from(".page2 .page2-bottom .btm-text h2 .up span", {
        y: 200,
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page2 .page2-bottom .btm-text h2 .up span",
          start: "top 103%",
          end: "top 98%",
          scrub: 2,
          stagger: 0.1,
        },
      });
    }
    // function page4Anim() {
    //   const videos = document.querySelectorAll(
    //     ".page4 .page4-video .item video"
    //   );

    //   videos.forEach((video) => {
    //     video.addEventListener("mouseenter", () => {
    //       video.play();
    //     });
    //     video.addEventListener("mouseleave", () => {
    //       video.pause();
    //       video.currentTime = 0;
    //     });
    //   });
    // }
    function page5TopAnim() {
      gsap.from(".page5 .page5-top .top-text h3", {
        y: 60,
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page5 .page5-top .top-text h3",
          start: "top 100%",
          end: "top 95%",
          duration: 0.8,
          scrub: 1,
        },
      });
      gsap.to(".page5-top-border", {
        width: 94 + "vw",
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page5-top-border",
          start: "top 85%",
          end: "top 80%",
          duration: 5,
          scrub: 1,
        },
      });
      gsap.from(".page5 .page5-bottom .btm-text h2 .up span", {
        y: 200,
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page5 .page5-bottom .btm-text h2 .up span",
          start: "top 105%",
          end: "top 99%",
          scrub: 2,
          stagger: 0.1,
        },
      });
    }
    // function page6Anim() {
    //   const cursor = document.querySelector(".page6 .crsr");
    //   const svg = document.querySelector(".page6");

    //   svg?.addEventListener("mousemove", (ev) => {
    //     gsap.to(cursor, {
    //       x: ev.x - 50 + "px",
    //       y: ev.y - 100 + "px",
    //     });
    //   });
    //   svg?.addEventListener("mouseenter", () => {
    //     gsap.to(cursor, {
    //       scale: 1,
    //       opacity: 1,
    //     });
    //   });
    //   svg?.addEventListener("mouseleave", () => {
    //     gsap.to(cursor, {
    //       scale: 0,
    //       opacity: 0,
    //     });
    //   });
    // }
    function page7TopAnim() {
      gsap.from(".page7 .page7-top .top-text h3", {
        y: 60,
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page7 .page7-top .top-text h3",
          start: "top 100%",
          end: "top 95%",
          duration: 0.8,
          scrub: 1,
        },
      });
      gsap.to(".page7-top-border", {
        width: 94 + "vw",
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page7-top-border",
          start: "top 85%",
          end: "top 80%",
          duration: 5,
          scrub: 1,
        },
      });
      gsap.from(".page7 .page7-bottom .btm-text h2 .up span", {
        y: 200,
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page7 .page7-bottom .btm-text h2 .up span",
          start: "top 105%",
          end: "top 99%",
          scrub: 2,
          stagger: 0.1,
        },
      });
    }
    function swiper() {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 600,
          disableOnInteraction: false,
        },
      });
    }
    function page3TextAnim() {
      gsap.from(".page3 .page3-text h1  ", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          scroller: ".main",
          trigger: ".page3 .page3-text h1 ",
          start: "top 80%",
          end: "top 68%",
          duration: 1.2,
          stagger: 1,
          scrub: 1,
        },
      });
    }
    // crsrAnim();
    // loco();
    page2TopAnim();
    page3TextAnim();
    // page4Anim();
    page5TopAnim();
    // page6Anim();
    page7TopAnim();
    swiper();
  }, []);

  return (
    <div className="main  min-h-screen">
      <Navbar />
      <Loader />
      <HomePage />

      <div className="page2">
        <div className="page2-top">
          <div className="first-text">
            <div id="one">
              <h3>Full-service creative agency.</h3>
            </div>
            <div id="two">
              <h3>Two engagement models.</h3>
            </div>
          </div>
          <div className="second-text">
            <h3>Paris & San Diego</h3>
          </div>
        </div>
        <div className="page2-top-border"></div>
        <div className="page2-bottom">
          <div className="btm-text">
            <h2>
              <div className="up">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are a
                  digital brand accelerator. We
                </span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> design, develop, and scale market-defining</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span>brands by unlocking their hidden potential.</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> Choose full cash compensation or offset up to</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> 50% of our fees for equity in your company. Your</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span>vision, your decision.</span>
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="page3">
        <div className="page3-text">
          <h4>
            Agency & Venture <span>Models</span>{" "}
            <i className="ri-corner-right-down-line"></i>
          </h4>
          <h1>Explore our services</h1>
          <h1>& engagement models</h1>
        </div>
      </div>
      <div className="page4">
        <div className="page4-text">
          <h2>Transforming visions into brands.</h2>
          <h2>
            <i className="ri-corner-down-right-line"></i>See the work
          </h2>
        </div>
        <div className="page4-video">
          <div className="item">
            <video
              id="key"
              muted
              src="/Assets/Website-homepage-Work-01_1.webm"
            ></video>
            <Image src="/Assets/1st.avif" alt="img" height={100} width={100} />
            <svg
              width="100"
              height="18"
              viewBox="0 0 100 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6719 12.1506C34.6719 12.9527 34.0079 13.603 33.1887 13.603H28.7524H24.3162C23.497 13.603 22.8329 12.9527 22.8329 12.1506V5.63778C22.8329 4.83375 23.4985 4.18197 24.3196 4.18197H28.7524H33.1853C34.0063 4.18197 34.6719 4.83375 34.6719 5.63778V12.1506ZM36.5679 0.639587L19.1389 0.648007C18.2517 0.648007 17.4354 1.14798 17.011 1.95137L12.3689 10.7394C12.1188 11.2128 11.4598 11.2128 11.2098 10.7394L6.56759 1.95137C6.14323 1.14798 5.32696 0.648007 4.43966 0.648007H0.726077C0.384365 0.648007 0.107369 0.933612 0.107369 1.28602L0.108378 16.2032C0.0871903 16.5837 0.380857 16.9044 0.75057 16.9044H3.60847C4.12725 16.9044 4.54852 16.472 4.55086 15.9371L4.57989 9.34937C4.58124 9.03408 4.98328 8.9194 5.14177 9.18895L9.30867 16.2771C9.53738 16.6665 9.94677 16.9044 10.3882 16.9044H13.1904C13.6318 16.9044 14.0412 16.6665 14.2699 16.2771L18.3142 9.14969C18.4181 8.96649 18.6394 8.95501 18.7719 9.06926V14.3378C18.7719 15.7168 19.9135 16.8345 21.3216 16.8345H36.5738C37.9819 16.8345 39.1233 15.7168 39.1233 14.3378V3.14202C39.1233 1.75996 37.9793 0.639587 36.5679 0.639587Z"
                fill="#FFFCF1"
              />
              <path
                d="M81.7855 12.2531C81.7855 13.0624 81.1153 13.7184 80.289 13.7184H75.8131H71.3378C70.5108 13.7184 69.8413 13.0624 69.8413 12.2531V5.68224C69.8413 4.87102 70.5127 4.21348 71.3409 4.21348H75.8131H80.2853C81.114 4.21348 81.7855 4.87102 81.7855 5.68224V12.2531ZM99.5317 0.697753H97.6859C96.4005 0.697753 95.3576 1.77249 95.3576 3.09825V9.17321C95.3576 9.5717 94.8917 9.77267 94.6164 9.49275L87.026 1.76929C86.3299 1.06122 85.3894 0.667835 84.4119 0.676045L68.3226 0.639587C66.8983 0.639587 65.7437 1.76992 65.7437 3.16435V14.4598C65.7437 15.851 66.8958 16.9788 68.3164 16.9788L85.0932 17.0096C85.8732 17.0096 86.5051 16.3578 86.5051 15.5536V8.08137C86.5051 7.93083 86.681 7.85441 86.7859 7.95947L95.4428 16.6626C95.6637 16.8851 95.9605 17.0096 96.2697 17.0096H98.6561C99.3984 17.0096 100 16.3891 100 15.6235V1.18054C100 0.913854 99.7903 0.697753 99.5317 0.697753Z"
                fill="#FFFCF1"
              />
              <path
                d="M63.2278 7.92754H60.0568C59.7084 7.92754 59.4262 8.21863 59.4262 8.57774V13.8842C59.4262 14.1917 59.0671 14.3473 58.8541 14.1322L46.7044 1.86249C46.0807 1.23283 45.2428 0.880219 44.37 0.880219H41.0717C40.4927 0.880219 40.2062 1.60491 40.6196 2.02265C40.8052 2.21009 40.9817 2.38862 41.121 2.52889C42.1952 3.61391 45.3709 6.82175 46.8386 8.30356C47.1765 8.64477 47.1762 9.20257 46.8382 9.54378L40.6568 15.7894C40.215 16.2355 40.5215 17.0095 41.1398 17.0095C41.1398 17.0095 43.8298 17.0087 45.0706 17.0086C45.4639 17.0084 45.8416 16.8494 46.1226 16.5655L50.0811 12.5679C50.3534 12.2928 50.7894 12.2928 51.0616 12.5679L54.7852 16.329L55.0078 16.5538C55.297 16.8459 55.6857 17.0095 56.0906 17.0095H59.9864C59.9968 17.0095 60.0064 17.0076 60.0164 17.0071C60.031 17.0083 60.046 17.0095 60.061 17.0095H63.2303C63.5826 17.0095 63.8677 16.7151 63.8677 16.3518V8.58774C63.8677 8.22307 63.5814 7.92754 63.2278 7.92754Z"
                fill="#FFFCF1"
              />
              <path
                d="M63.2305 0.880219H55.6694C55.5102 0.880219 55.3571 0.944579 55.2433 1.05945L53.0912 3.23425C52.8497 3.47832 52.8497 3.87928 53.0916 4.12301L55.1799 6.22753C55.5079 6.55819 56.0319 6.55795 56.3596 6.22697L58.9077 3.65379C59.1011 3.4587 59.4268 3.5998 59.4268 3.87872V5.24958C59.4268 5.63252 59.7278 5.94298 60.0993 5.94298H63.2132C63.5754 5.94298 63.8686 5.64054 63.8686 5.26747V1.53792C63.8686 1.17467 63.5828 0.880219 63.2305 0.880219Z"
                fill="#FFFCF1"
              />
            </svg>
          </div>
          <div className="item">
            <video muted src="/Assets/Website-homepage-Work-02_1.webm"></video>
            <Image src="/Assets/2nd.avif" alt="img" height={100} width={100} />
            <svg
              width="81"
              height="25"
              viewBox="0 0 81 25"
              fill="none"
              xmlns="http://www.w3.org/2000/   svg"
            >
              <path d="M15.5448 0H5.18164V2.21382H15.5448V0Z" fill="#FFFCF1" />
              <path
                d="M54.9401 15.8208C57.422 15.1188 59.0331 12.9914 59.0331 10.4104C59.0331 7.06268 56.4206 4.80566 52.5344 4.80566H43.1074V24.6221H45.2845V16.0476H52.6541L57.3458 24.6221H59.6971L54.7986 15.8532L54.9401 15.8208ZM52.5344 14.1037H45.2845V6.72791H52.5344C55.1143 6.72791 56.856 8.20739 56.856 10.4104C56.856 12.6242 55.1143 14.1037 52.5344 14.1037Z"
                fill="#FFFCF1"
              />
              <path
                d="M31.8178 25C37.1517 25 40.8746 21.2851 40.8746 15.9612V4.80566H38.6431V15.7992C38.6431 19.9029 35.8346 22.7754 31.8178 22.7754C28.4868 22.7754 24.9054 20.594 24.9054 15.7992V4.80566H22.6739V15.9504C22.663 21.2851 26.4294 25 31.8178 25Z"
                fill="#FFFCF1"
              />
              <path
                d="M69.8088 4.80566L60.6758 24.6221H63.0162L65.2695 19.5465H76.4164L78.6806 24.6221H81.021L71.8771 4.80566H69.8088ZM70.8538 7.39746L75.5673 17.6242H66.1077L70.8538 7.39746Z"
                fill="#FFFCF1"
              />
              <path
                d="M10.3631 22.7754C5.87824 22.7754 2.23155 19.1577 2.23155 14.7085C2.23155 10.2592 5.87824 6.6415 10.3631 6.6415C14.848 6.6415 18.4947 10.2592 18.4947 14.7085C18.4947 19.1685 14.848 22.7754 10.3631 22.7754ZM10.3631 4.43848C4.64817 4.43848 0 9.04971 0 14.7193C0 20.3888 4.64817 25 10.3631 25C16.0781 25 20.7262 20.3888 20.7262 14.7193C20.7262 9.04971 16.0781 4.43848 10.3631 4.43848Z"
                fill="#FFFCF1"
              />
            </svg>
          </div>
          <div className="item">
            <video muted src="/Assets/Website-homepage-Work-03_1.webm"></video>
            <Image src="/Assets/3rd.avif" alt="img" height={100} width={100} />
            <svg
              width="100"
              height="18"
              viewBox="0 0 100 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6719 12.1506C34.6719 12.9527 34.0079 13.603 33.1887 13.603H28.7524H24.3162C23.497 13.603 22.8329 12.9527 22.8329 12.1506V5.63778C22.8329 4.83375 23.4985 4.18197 24.3196 4.18197H28.7524H33.1853C34.0063 4.18197 34.6719 4.83375 34.6719 5.63778V12.1506ZM36.5679 0.639587L19.1389 0.648007C18.2517 0.648007 17.4354 1.14798 17.011 1.95137L12.3689 10.7394C12.1188 11.2128 11.4598 11.2128 11.2098 10.7394L6.56759 1.95137C6.14323 1.14798 5.32696 0.648007 4.43966 0.648007H0.726077C0.384365 0.648007 0.107369 0.933612 0.107369 1.28602L0.108378 16.2032C0.0871903 16.5837 0.380857 16.9044 0.75057 16.9044H3.60847C4.12725 16.9044 4.54852 16.472 4.55086 15.9371L4.57989 9.34937C4.58124 9.03408 4.98328 8.9194 5.14177 9.18895L9.30867 16.2771C9.53738 16.6665 9.94677 16.9044 10.3882 16.9044H13.1904C13.6318 16.9044 14.0412 16.6665 14.2699 16.2771L18.3142 9.14969C18.4181 8.96649 18.6394 8.95501 18.7719 9.06926V14.3378C18.7719 15.7168 19.9135 16.8345 21.3216 16.8345H36.5738C37.9819 16.8345 39.1233 15.7168 39.1233 14.3378V3.14202C39.1233 1.75996 37.9793 0.639587 36.5679 0.639587Z"
                fill="#FFFCF1"
              />
              <path
                d="M81.7855 12.2531C81.7855 13.0624 81.1153 13.7184 80.289 13.7184H75.8131H71.3378C70.5108 13.7184 69.8413 13.0624 69.8413 12.2531V5.68224C69.8413 4.87102 70.5127 4.21348 71.3409 4.21348H75.8131H80.2853C81.114 4.21348 81.7855 4.87102 81.7855 5.68224V12.2531ZM99.5317 0.697753H97.6859C96.4005 0.697753 95.3576 1.77249 95.3576 3.09825V9.17321C95.3576 9.5717 94.8917 9.77267 94.6164 9.49275L87.026 1.76929C86.3299 1.06122 85.3894 0.667835 84.4119 0.676045L68.3226 0.639587C66.8983 0.639587 65.7437 1.76992 65.7437 3.16435V14.4598C65.7437 15.851 66.8958 16.9788 68.3164 16.9788L85.0932 17.0096C85.8732 17.0096 86.5051 16.3578 86.5051 15.5536V8.08137C86.5051 7.93083 86.681 7.85441 86.7859 7.95947L95.4428 16.6626C95.6637 16.8851 95.9605 17.0096 96.2697 17.0096H98.6561C99.3984 17.0096 100 16.3891 100 15.6235V1.18054C100 0.913854 99.7903 0.697753 99.5317 0.697753Z"
                fill="#FFFCF1"
              />
              <path
                d="M63.2278 7.92754H60.0568C59.7084 7.92754 59.4262 8.21863 59.4262 8.57774V13.8842C59.4262 14.1917 59.0671 14.3473 58.8541 14.1322L46.7044 1.86249C46.0807 1.23283 45.2428 0.880219 44.37 0.880219H41.0717C40.4927 0.880219 40.2062 1.60491 40.6196 2.02265C40.8052 2.21009 40.9817 2.38862 41.121 2.52889C42.1952 3.61391 45.3709 6.82175 46.8386 8.30356C47.1765 8.64477 47.1762 9.20257 46.8382 9.54378L40.6568 15.7894C40.215 16.2355 40.5215 17.0095 41.1398 17.0095C41.1398 17.0095 43.8298 17.0087 45.0706 17.0086C45.4639 17.0084 45.8416 16.8494 46.1226 16.5655L50.0811 12.5679C50.3534 12.2928 50.7894 12.2928 51.0616 12.5679L54.7852 16.329L55.0078 16.5538C55.297 16.8459 55.6857 17.0095 56.0906 17.0095H59.9864C59.9968 17.0095 60.0064 17.0076 60.0164 17.0071C60.031 17.0083 60.046 17.0095 60.061 17.0095H63.2303C63.5826 17.0095 63.8677 16.7151 63.8677 16.3518V8.58774C63.8677 8.22307 63.5814 7.92754 63.2278 7.92754Z"
                fill="#FFFCF1"
              />
              <path
                d="M63.2305 0.880219H55.6694C55.5102 0.880219 55.3571 0.944579 55.2433 1.05945L53.0912 3.23425C52.8497 3.47832 52.8497 3.87928 53.0916 4.12301L55.1799 6.22753C55.5079 6.55819 56.0319 6.55795 56.3596 6.22697L58.9077 3.65379C59.1011 3.4587 59.4268 3.5998 59.4268 3.87872V5.24958C59.4268 5.63252 59.7278 5.94298 60.0993 5.94298H63.2132C63.5754 5.94298 63.8686 5.64054 63.8686 5.26747V1.53792C63.8686 1.17467 63.5828 0.880219 63.2305 0.880219Z"
                fill="#FFFCF1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="page5">
        <div className="page5-top">
          <div className="top-text">
            <div>
              <h3>We operate on a simple philosophy:</h3>
            </div>
            <div>
              <h3>Quality over quantity.</h3>
            </div>
          </div>
        </div>
        <div className="page5-top-border"></div>
        <div className="page5-bottom">
          <div className="btm-text">
            <h2>
              <div className="up">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We partner
                  with 5 clients each year. This
                </span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> allows for intense focus on the transformation</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> and launch of your brand by our very best team,</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> which is the only team we have.</span>
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="page6">
        <video muted loop src="/Assets/RJ-BALL-BLUE-ORANGE-scaled.webm"></video>
        <svg
          className="abs tl:0 fit transform rotate:-90deg"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            stroke="#fff"
            strokeWidth="0.25"
            fill="none"
            className="o:0.3 dasharray:302 dashoffset:604 (.in-view):dashoffset:400 (.in-view):tween:all,2.8s,easeOutSlow "
          ></circle>
          <circle
            cx="50"
            cy="50"
            r="49"
            stroke="#fff"
            strokeWidth="0.25"
            fill="none"
            className="dasharray:302 dashoffset:302 (.in-view):dashoffset:100 (.in-view):tween:all,2.8s,easeOutSlow "
          ></circle>
        </svg>
        <svg
          className="abs tl:0 fit transform rotate:0 (.in-view):rotate:237deg (.in-view):tween:all,2.8s,easeOutSlow "
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="1" r="1" fill="#fff"></circle>
        </svg>
        <div className="crsr">
          <h2>Take it!</h2>
        </div>
        <div className="page6-text">
          <div className="seat">
            <div className="seat-span">
              <h2>5</h2>
              <h2>4</h2>
              <h2>3</h2>
              <h2>2</h2>
              <h2>1</h2>
            </div>
            <h2>seat</h2>
          </div>
          <span>available for 2023</span>
        </div>
      </div>
      <div className="page7">
        <div className="page7-top">
          <div className="top-text">
            <div>
              <h3>Harnessing emotions</h3>
            </div>
            <div>
              <h3>to connect with your audience.</h3>
            </div>
          </div>
        </div>
        <div className="page7-top-border"></div>
        <div className="page7-bottom">
          <div className="btm-text">
            <h2>
              <div className="up">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data matters,
                  yet it&apos;s emotion that drives
                </span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span>
                  buying decisions. We don&apos;t believe in &apos;one size fits
                </span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span>
                  {" "}
                  all.&apos; Instead, we collaborate closely with our
                </span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> clients to craft unique brand experiences that</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> resonate with their audiences and boost their</span>
              </div>
            </h2>
            <h2>
              <div className="up">
                <span> KPIs.</span>
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="page8">
        <div className="text">
          <h1>Get in touch.</h1>
          <h3>
            <i className="ri-corner-down-right-line"></i>Contact
          </h3>
        </div>
        <div className="page8-top-border"></div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image
                src="/Assets/slide1.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide2.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide3.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide4.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide5.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide1.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide2.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide3.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide4.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
            <div className="swiper-slide">
              <Image
                src="/Assets/slide5.avif"
                alt="img"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page9">
        <div className="page9-text">
          <h4 id="head">
            We’re uniquely built<i className="ri-corner-right-down-line"></i>
          </h4>
          <h1>Meet your team</h1>
        </div>
      </div>
      <footer className="w-[100vw]">
        <div className="footer-top">
          <div className="first">
            <div className="first-top">
              <h2>Relax. We got you.</h2>
              <button>Take a seat</button>
            </div>
            <div className="first-btm">
              <h4>San Diego—California</h4>
              <h4>Paris—France</h4>
            </div>
          </div>
          <div className="second">
            <div className="second-one">
              <div className="span">
                <span>Home</span>
                <span>Work</span>
                <span>About</span>
                <span>Services & Models</span>
                <span>Contact</span>
              </div>
              <div className="span1">
                <span>biz@rejouice.com</span>
              </div>
            </div>
            <div className="second-two">
              <div className="span">
                <span>
                  X<i className="ri-arrow-right-up-line"></i>
                </span>
                <span>
                  Instagram<i className="ri-arrow-right-up-line"></i>
                </span>
                <span>
                  LinkedIn<i className="ri-arrow-right-up-line"></i>
                </span>
              </div>
              <div className="span1">
                <span>© 2024 legal </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h1>
            <span>R</span>
            <span>E</span>
            <span>J</span>
            <span>O</span>
            <span>U</span>
            <span>I</span>
            <span>C</span>
            <span>E</span>
          </h1>
        </div>
      </footer>
    </div>
  );
}
