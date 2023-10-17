import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link'
import styles from '../../src/app/page.module.css'

const Navbar = () => {
    return (
        <>
            <div className='py-2 bg-dark text-white d-md-block d-none' style={{ backgroundColor: '#35354A' }}>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div style={{ fontSize: '14px' }}>
                        <small className='me-4'><i className="bi bi-house-door"></i>Sidestate NSW 4132, Australia</small>
                        <small><i className="bi bi-phone"></i>Help: + 88 018 4113 6251</small>
                    </div>
                    <div>
                        <i className="bi bi-facebook text-white me-3"></i>
                        <i className="bi bi-twitter text-white me-3"></i>
                        <i className="bi bi-pinterest text-white me-3"></i>
                        <i className="bi bi-google text-white me-3"></i>
                        <i className="bi bi-youtube text-white"></i>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-white py-2">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image
                            src={logo}
                            width={150}
                            height={40}
                            alt="Picture of the author"
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/services">Service</Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/project" className="nav-link" >Project</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link" >Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar