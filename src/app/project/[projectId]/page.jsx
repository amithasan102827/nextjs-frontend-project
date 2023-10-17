import Image from 'next/image';
import projects from '../../../../public/projectData';
import styles from '../../page.module.css'

const ProjectDetailsPage = ({ params }) => {
    const { projectId } = params;
    const project = projects.find((project) => project.id === parseInt(projectId));
    return (
        <>
            {/* banner */}
            <section className={styles.infoParallaxContainer}>
                <div className={styles.infoParallaxBackground}></div>
                <div className={`${styles['infoContent']} container`}>
                    <div className='py-5 text-white col-md-10 mx-auto'>
                        <h1 className='py-4'>PROJECT {project.id}</h1>
                    </div>
                </div>
            </section>

            <section className='my-5 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Image
                                src={project.image}
                                width={620}
                                height={480}
                                alt=''
                                className='img-fluid'
                            />
                        </div>
                        <div className="col-md-6">
                            <p>{project.details}</p>
                            <p>
                                <span className='fw-semibold text-secondary me-5'>CLIENT:</span>
                                <span> {project.client}</span>
                            </p>
                            <p>
                                <span className='fw-semibold text-secondary me-5'>DATE:</span>
                                <span> {project.date}</span>
                            </p>
                            <p>
                                <span className='fw-semibold text-secondary me-5'>LOCATION:</span>
                                <span> {project.location}</span>
                            </p>
                            <p>
                                <span className='fw-semibold text-secondary me-5'>BRAND:</span>
                                <span> {project.brand}</span>
                            </p>

                            <p>
                                <span className='fw-semibold text-secondary me-5'>COST:</span>
                                <span> {project.cost}</span>
                            </p>
                            <div>
                                <small className='me-4'>Share:</small>
                                <i className="bi bi-facebook text-info me-2"></i>
                                <i className="bi bi-twitter text-info me-2"></i>
                                <i className="bi bi-pinterest text-info me-2"></i>
                                <i className="bi bi-google text-info me-2"></i>
                                <i className="bi bi-youtube text-info me-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectDetailsPage