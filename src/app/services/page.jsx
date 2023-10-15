import styles from '../page.module.css'
import services from '../../../public/data.json';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <>
      {/* banner */}
      <section className={styles.infoParallaxContainer}>
        <div className={styles.infoParallaxBackground}></div>
        <div className={`${styles['infoContent']} container`}>
          <div className='py-5 text-white col-md-10 mx-auto'>
            <h1 className='py-4'>Services</h1>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className='py-5'>
        <div className="container">
          <div className='mt-3 mb-5'>
            <h2 className='text-center'>SERVICES</h2>
            <p className='text-center'>We offer a full range of repair services provided by an experienced and specialized team</p>
          </div>
          <div className="row g-4 col-md-11 mx-auto">
            {
              services.map(service => (
                <div key={service.id} className="col-lg-4 col-md-6 mb-2">
                  <div className="card mx-auto rounded-0 border-0 h-100" >
                    <Image
                      className='img-fluid'
                      src={service.image}
                      width={371}
                      height={200}
                      alt=''
                    />
                    <div className="card-body bg-success text-dark bg-opacity-10">
                      <h5 className="card-title">{service.name}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button type="button" className="btn btn-outline-primary rounded-0 float-end">
                        <Link className='text-decoration-none text-dark' href={`/services/${service.id}`}>READ MORE</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
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
    </>
  )
}

export default ServicesPage