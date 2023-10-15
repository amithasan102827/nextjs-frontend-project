
import Image from 'next/image';
import servicesData from '../../../../public/data.json';
import styles from '../../page.module.css'

const ServiceDetailsPage = ({ params }) => {
    const { serviceId } = params;

    const service = servicesData.find((service) => service.id === parseInt(serviceId));


    return (

        <section>
            {/* banner */}
            <section className={styles.infoParallaxContainer}>
                <div className={styles.infoParallaxBackground}></div>
                <div className={`${styles['infoContent']} container`}>
                    <div className='py-5 text-white col-md-10 mx-auto'>
                        <h1 className='py-4'>Services</h1>
                    </div>
                </div>
            </section>

            <section className='my-5 py-md-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div>
                                <h3 className='mb-3'>{service.title}</h3>
                                <Image
                                className='img-fluid'
                                    src={service.image}
                                    width={800}
                                    height={500}
                                    alt=''

                                />
                                <p className='pe-5 mt-4'>{service.details}</p>
                                <div className='mt-5'>
                                    <h5 className='fw-semibold '>The reasons of {service.title} malfunctioning:</h5>
                                    <p className='pe-5'>{service.reason}</p>
                                </div>

                                <div className='mt-5'>
                                    <h5 className='fw-semibold'>How much will it cost?</h5>
                                    {
                                        service.pricing.map(price=>(
                                            <li>
                                                <span>{price.title}</span> 
                                                <span className='ms-1'>-- ${price.price}</span> 
                                            </li>
                                            
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </section>

            {/* contact */}
            <section className='py-5 mt-5' style={{ backgroundColor: '#F7F7F7' }}>
                <div className="container">
                    <div className='text-center'>
                        <h2>CAN'T FIND WHAT YOU ARE LOOKING FOR?</h2>
                        <p>Tell us what you're looking for and we'll make a solution for it. Contact us!</p>
                    </div>

                    <div className='col-lg-7 col-md-9 mx-auto mt-5'>
                        <div className="mb-4">
                            <input type="text" className="form-control rounded-0 shadow-none" id="formGroupExampleInput" placeholder="Name" style={{ padding: '11px 10px' }} />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control rounded-0 shadow-none" id="formGroupExampleInput2" placeholder="Email" style={{ padding: '11px 10px' }} />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control rounded-0 shadow-none" id="formGroupExampleInput3" placeholder="Subject" style={{ padding: '11px 10px' }} />
                        </div>
                        <div className="mb-4">
                            <textarea rows={4} type="text" className="form-control rounded-0 shadow-none" id="formGroupExampleInput4" placeholder="Ask your question here" style={{ padding: '11px 10px' }} />

                            <div className='mt-4 d-flex justify-content-around align-items-center col-lg-6 mx-auto'>
                                <button className='btn btn-info text-white px-5 rounded-0'>SUBMIT</button>
                                <h6>or CALL (555) 555-0312</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ServiceDetailsPage