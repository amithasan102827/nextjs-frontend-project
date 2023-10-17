import styles from '../page.module.css'
import projects from '../../../public/projectData';
import Image from 'next/image';
import Link from 'next/link';

const ProjectPage = () => {
    return (
        <>
            {/* banner */}
            <section className={styles.infoParallaxContainer}>
                <div className={styles.infoParallaxBackground}></div>
                <div className={`${styles['infoContent']} container`}>
                    <div className='py-5 text-white col-md-10 mx-auto'>
                        <h1 className='py-4'>PROJECTS</h1>
                    </div>
                </div>
            </section>

            <section className='my-5'>
                <div className="container">
                    <div className='my-5 text-center'>
                        <h2>Projects</h2>
                        <p>We offer a full range of repair Projects provided by an experienced and specialized team</p>
                    </div>
                    <div className="row g-4">
                        {
                            projects.map(project => (
                                <div key={project.id} className="col-md-4">
                                    <Link href={`/project/${project.id}`}>
                                        <div className={styles.projectCardContainer}>
                                            <Image
                                                src={project.image}
                                                width={500}
                                                height={350}
                                                alt=''
                                                className={`${styles['projectImg']} img-fluid`} />
                                            <div className={`${styles['overlay']} py-4`}>
                                                <h3>{project.client}</h3>
                                                <small>{project.category}</small>
                                            </div>
                                        </div>
                                    </Link>
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

export default ProjectPage