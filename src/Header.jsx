import React from 'react'

function Header( ) {
  return (
    <div className='container'>
    <div className="row header sticky-lg-top d-flex justify-content-end align-items-center p-3">
    <div className="col-12 col-lg-4 d-flex justify-content-center">
      <div>
        <img href="#inicio" className="logo img-fluid" src="./images/Logo.png" width="250" alt="Logo"/>
      </div>
    </div>
    <div className="col-12 col-lg-8">
      <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
        <form>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon icono p-2"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a href="#descúbrenos" className="btn botones-menu btn-header btn-lg me-4" role="button" aria-disabled="true">DESCÚBRENOS</a>
                    <a href="#beberly" className="btn botones-menu btn-header btn-lg  me-4" role="button" aria-disabled="true">BEVERLY POLICE</a>
                    <a href="#juguemos" className="btn botones-menu btn-header btn-lg me-4" role="button" aria-disabled="true">JUGUEMOS</a>
                  </div>
                </div>
            </div>
        </form>
      </nav>
    </div>
   </div>
   </div>
  )
}

export default Header