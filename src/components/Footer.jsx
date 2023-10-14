import Image from 'next/image';
import logo from '../../public/footer-logo.png';

const Footer = () => {
    return (
        <section className='py-5' style={{ backgroundColor: '#35354A' }}>
            <div className="container">
                <div className="row col-md-11 mx-auto justify-content-center">
                    <div className="col-md-3 text-white d-flex justify-content-md-center">
                        <div>
                            <Image
                                src={logo}
                                width={200}
                                height={50}
                                alt=''
                            /> <br />
                            <small className='mt-3 d-block'>Profix is a Premium PSD Template. Best choice for your online store. Let purchase it to enjoy now</small>
                            <div className='mt-3'>
                                <i className="bi bi-facebook fs-5"></i>
                                <i className="bi bi-twitter fs-5 ms-4"></i>
                                <i className="bi bi-google fs-5 ms-4"></i>
                                <i className="bi bi-youtube fs-5 ms-4"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-white d-flex justify-content-md-center">
                        <div>
                            <h6>ADDITIONAL LINKS</h6>
                            <div className='mt-5'>
                                <small className='d-block mb-2'>Home</small>
                                <small className='d-block mb-2'>FAQ</small>
                                <small className='d-block mb-2'>Services</small>
                                <small className='d-block mb-2'>Blog</small>
                                <small className='d-block mb-2'>Contact Us</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-white d-flex justify-content-md-center">
                        <div>
                            <h6>SERVICES</h6>
                            <div className='mt-5'>
                                <small className='d-block mb-2'>Data recovery</small>
                                <small className='d-block mb-2'>Computer repair</small>
                                <small className='d-block mb-2'>Mobile service</small>
                                <small className='d-block mb-2'>Network Solutions</small>
                                <small className='d-block mb-2'>Technical support</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-white">
                        <h6>OUR INFO</h6>
                        <div className='mt-5'>
                            <small className='d-block mb-2'>(555) 555-0312</small>
                            <small className='d-block mb-2'>info@profix.com</small>
                            <small className='d-block mb-2'>Sidestate NSW 4132, Australia</small>
                        </div>
                    </div>
                </div>

                <div className='col-md-11 mx-auto mt-5' style={{borderTop:'2px solid #29ABE2'}}>
                    <small className='d-block text-white mt-4 text-center'>© 2017 ProFix. All Rights Reserved</small>
                </div>
            </div>
        </section>
    )
}

export default Footer