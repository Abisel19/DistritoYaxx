import React, { useEffect } from 'react';
import Iframe from 'react-iframe'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Ubicacion() {

    useEffect(() => {
        const html = document.querySelector('html');
    
        // Detections
        if (!('ontouchstart' in window)) {
          html.classList.add('noTouch');
        }
        if ('ontouchstart' in window) {
          html.classList.add('isTouch');
        }
        if ('ontouchstart' in window) {
          html.classList.add('isTouch');
        }
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
          if (navigator.appVersion.indexOf('Trident') === -1) {
            html.classList.add('isEDGE');
          } else {
            html.classList.add('isIE', 'isIE11');
          }
        }
        if (navigator.appVersion.indexOf('MSIE') !== -1) {
          html.classList.add('isIE');
        }
        if (
          navigator.userAgent.indexOf('Safari') !== -1 &&
          navigator.userAgent.indexOf('Chrome') === -1
        ) {
          html.classList.add('isSafari');
        }
    
        // On Screen
        const isOnScreen = (element) => {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          const viewportTop = window.scrollY;
          const viewportBottom = viewportTop + window.innerHeight;
          return elementBottom > viewportTop && elementTop < viewportBottom;
        };
    
        const detection = () => {
          items.forEach((item) => {
            const el = item;
    
            if (isOnScreen(el)) {
              el.classList.add('in-view');
            } else {
              el.classList.remove('in-view');
            }
          });
        };
    
        const items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]');
        let waiting = false;
    
        const handleResizeScroll = () => {
          if (waiting) {
            return;
          }
          waiting = true;
          detection();
    
          setTimeout(() => {
            waiting = false;
          }, 100);
        };
    
        window.addEventListener('resize', handleResizeScroll);
        window.addEventListener('scroll', handleResizeScroll);
    
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            detection();
          }, 500);
    
          items.forEach((item) => {
            let delay = 0;
            const el = item;
            if (item.getAttribute('data-animate-in-delay')) {
              delay = `${item.getAttribute('data-animate-in-delay') / 1000}s`;
            } else {
              delay = 0;
            }
            el.style.transitionDelay = delay;
          });
        });
    
        return () => {
          window.removeEventListener('resize', handleResizeScroll);
          window.removeEventListener('scroll', handleResizeScroll);
        };
      }, []);

  return (
    <>
      <section>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1308688589097!2d-86.84156522458022!3d21.107348085074403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b4b4b5d2a8b%3A0xb4aef9045d8e90c8!2sDistrito%20Yaax!5e0!3m2!1ses-419!2smx!4v1699474001337!5m2!1ses-419!2smx"
            className="w-full h-screen"
            id=""
            display="block"
            position="relative"/>
      </section>
    </>
  );
}

export default Ubicacion;
