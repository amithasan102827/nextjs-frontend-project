import styles from '../page.module.css'
import Image from 'next/image';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <>
            {/* banner */}
            <section className={styles.infoParallaxContainer}>
                <div className={styles.infoParallaxBackground}></div>
                <div className={`${styles['infoContent']} container`}>
                    <div className='py-5 text-white col-md-10 mx-auto'>
                        <div className='py-4'>
                            <h1 >CONTACT</h1>
                            <p>A little something about our company</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58408.63600898726!2d90.374144!3d23.799398399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1697570595858!5m2!1sen!2sbd" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            {/* contact */}
            <section className='py-5' style={{ backgroundColor: '#F7F7F7' }}>
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
        </>
    )
}

export default ContactPage