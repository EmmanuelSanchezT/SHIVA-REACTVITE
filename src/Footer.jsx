import React from 'react'


function Footer() {
  return (
    <div className="container p-1">
      <div className="row  d-flex justify-content-end">
        <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center">
          <img className="mx-5 botones" src="./images/Correo.png" width="30" alt="" />
          <img className="mx-5 botones" src="./images/Facebook.png" width="30" alt="" />
          <img className="mx-5 botones" src="./images/Instagram.png" width="30" alt="" />
          <img className="mx-5 botones" src="./images/YouTube.png" width="30" alt="" />
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <img href="#inicio" className="logo img-fluid" src="./images/Logo2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer