"use client"

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import priceImg1 from '../../public/price/computer-dark.png';
import priceImg2 from '../../public/price/mobile-dark.png';
import priceImg3 from '../../public/price/notebook-dark.png';
import priceImg4 from '../../public/price/printer-dark.png';
import services from '../../public/data.json';

// import Swiper styles
import { SwiperSlide, Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Homepage = () => {

  return (
    <section className="">

      {/* banner */}
      <section className={styles.heroImage}>
        <div className={styles.heroText}>
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </section>

      {/* OUR PRICING PACKAGE */}
      <section className='my-5'>
        <div className="container ">
          <h1 className='text-center'>OUR PRICING PACKAGE</h1>
          <p className='text-center'>Here Is Our Pricing Plan</p>
          <div className="row mt-5 mx-lg-5 px-lg-5">

            <div className="col-lg-6 col-md-12">
              <div className={`card mb-3 px-4 py-3 rounded-0 mx-auto ${styles['pricingCard']}`} style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className='text-center'>
                      <Image
                        className='text-center'
                        src={priceImg3}
                        width={120}
                        height={120}
                        alt="Picture of the author"
                      />
                      <small className='d-block'>starting at</small>
                      <h2>$20.00</h2>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-md-start text-center">
                      <h5 className="card-title text-info">Laptop Repair</h5>
                      <p className="card-text">Urgent repairs <br />
                        Spare parts for order<br />
                        High quality of repair work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={`card mb-3 px-4 py-3 rounded-0 mx-auto ${styles['pricingCard']}`} style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className='text-center'>
                      <Image
                        className='text-center'
                        src={priceImg1}
                        width={120}
                        height={120}
                        alt="Picture of the author"
                      />
                      <small className='d-block'>starting at</small>
                      <h2>$20.00</h2>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-md-start text-center">
                      <h5 className="card-title text-info">Computer Repair</h5>
                      <p className="card-text">Urgent repairs <br />
                        Spare parts for order<br />
                        High quality of repair work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={`card mb-3 px-4 py-3 rounded-0 mx-auto ${styles['pricingCard']}`} style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className='text-center'>
                      <Image
                        className='text-center'
                        src={priceImg4}
                        width={120}
                        height={120}
                        alt="Picture of the author"
                      />
                      <small className='d-block'>starting at</small>
                      <h2>$20.00</h2>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-md-start text-center">
                      <h5 className="card-title text-info">Printer Repair</h5>
                      <p className="card-text">Urgent repairs <br />
                        Spare parts for order<br />
                        High quality of repair work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={`card mb-3 px-4 py-3 rounded-0 mx-auto ${styles['pricingCard']}`} style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className='text-center'>
                      <Image
                        className='text-center'
                        src={priceImg2}
                        width={120}
                        height={120}
                        alt="Picture of the author"
                      />
                      <small className='d-block'>starting at</small>
                      <h2>$20.00</h2>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-md-start text-center">
                      <h5 className="card-title text-info">Smartphone Repair</h5>
                      <p className="card-text">Urgent repairs <br />
                        Spare parts for order<br />
                        High quality of repair work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US? */}
      <section className={styles.parallaxContainer}>
        <div className={styles.parallaxBackground}></div>
        <div className={`${styles['content']} container`}>
          <div className='py-5 my-md-5 text-white col-md-6'>
            <h2>WHY CHOOSE US?</h2>

            <div className='d-flex justify-content-between align-items-center flex-wrap'>
              <div className='d-flex align-items-center justify-content-around py-4'>
                <i className="bi bi-truck text-info" style={{ fontSize: '60px' }}></i>
                <div className='mt-4'>
                  <h6>FREE SHIPPING</h6>
                  <small>Free shipping on orders over $99.</small>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-around py-4'>
                <i className="bi bi-cash-coin text-info" style={{ fontSize: '60px' }}></i>
                <div className='mt-4'>
                  <h6>MONEY BACK</h6>
                  <small>100% money back guarantee.</small>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-around py-4'>
                <i className="bi bi-clock-history text-info" style={{ fontSize: '60px' }}></i>
                <div className='mt-4'>
                  <h6>ONLINE SUPPORT 24/7</h6>
                  <small>24/7 our support ready for you</small>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-around py-4'>
                <i className="bi bi-file-earmark-lock text-info" style={{ fontSize: '60px' }}></i>
                <div className='mt-4'>
                  <h6>SECURE PAYMENT</h6>
                  <small>Your payment is totally secure.</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className='py-5' style={{ backgroundColor: "#F7F7F7" }}>
        <div className="container">
          <div className='mt-3 mb-5'>
            <h2 className='text-center'>SERVICES</h2>
            <p className='text-center'>We offer a full range of repair services provided by an experienced and specialized team</p>
          </div>
          <div className="row g-4 col-md-11 mx-auto">
            {
              services.slice(0, 6).map(service => (
                <div key={service.id} className="col-lg-4 col-md-6 mb-2">
                  <div className="card mx-auto rounded-0 border-0 h-100" >
                    <Image
                      className='img-fluid'
                      src={service.image}
                      width={371}
                      height={200}
                      alt=''
                    />
                    <div className="card-body">
                      <h5 className="card-title">{service.name}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button type="button" className="btn btn-outline-primary rounded-0 float-end">READ MORE</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <button className='btn btn-info text-white rounded-0 d-block mx-auto mt-4'>VIEW ALL SERVICES</button>
        </div>
      </section>


      {/* info */}
      <section className={styles.infoParallaxContainer}>
        <div className={styles.infoParallaxBackground}></div>
        <div className={`${styles['infoContent']} container`}>
          <div className='py-5 text-white col-md-10 mx-auto'>

            <div className='d-flex justify-content-between align-items-center flex-wrap'>

              <div className='d-flex flex-column align-items-center justify-content-center py-4'>
                <i className="bi bi-truck text-white" style={{ fontSize: '40px' }}></i>
                <div className='mt-1 text-center'>
                  <h1 className='m-0 fw-semibold text-info mb-1'>3770</h1>
                  <h6 className='fw-semibold'>Happy Client</h6>
                </div>
              </div>
              <div className='d-flex flex-column align-items-center justify-content-center py-4'>
                <i className="bi bi-truck text-white" style={{ fontSize: '40px' }}></i>
                <div className='mt-1 text-center'>
                  <h1 className='m-0 fw-semibold text-info mb-1'>2790</h1>
                  <h6 className='fw-semibold'>COMPUTER REPAIRS</h6>
                </div>
              </div>
              <div className='d-flex flex-column align-items-center justify-content-center py-4'>
                <i className="bi bi-truck text-white" style={{ fontSize: '40px' }}></i>
                <div className='mt-1 text-center'>
                  <h1 className='m-0 fw-semibold text-info mb-1'>1550</h1>
                  <h6 className='fw-semibold'>MOBILE REPAIRS</h6>
                </div>
              </div>
              <div className='d-flex flex-column align-items-center justify-content-center py-4'>
                <i className="bi bi-truck text-white" style={{ fontSize: '40px' }}></i>
                <div className='mt-1 text-center'>
                  <h1 className='fw-semibold text-info mb-1'>12</h1>
                  <h6 className='fw-semibold'>YEARS OF EXPERIENCE</h6>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* WHAT PEOPLE SAY */}
      <section className='py-5' style={{ backgroundColor: "#F7F7F7" }}>
        <div className="container">
          <div className='text-center my-5'>
            <h1>WHAT PEOPLE SAY</h1>
            <p>Real customers reviews</p>
          </div>
          <div className="row col-md-11 mx-auto">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1500}
              loop={true}
              // navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {Array.from({ length: 10 }).map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="">
                    <div className="card py-4 px-3 rounded-0 h-100">
                      <div className="card-body">
                        <h5 className="card-text fw-light">With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional</h5>
                        <div className='d-flex align-items-center mt-5'>
                          <i className="bi bi-person-circle" style={{ fontSize: "60px" }}></i>
                          <div className='px-4 mt-3'>
                            <h5 className='m-0'>Michale Jojn</h5>
                            <p>Co-Founder, InfoLabs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Homepage


