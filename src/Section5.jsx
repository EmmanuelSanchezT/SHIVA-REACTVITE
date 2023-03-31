import React from 'react'

function Section5() {
  return (
  <div className="row section4 d-flex justify-content-center  mt-2 mb-2 p-3 ">
  <div className="col-12 col-lg-8">
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="./images/in1.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titulos text-white">PASO 1</h5>
              <p className="textos-back text-black">Inicia tu partida y cruza los obstáculos, ¡te espera una aventura rápida!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./images/in2.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titulos text-black">PASO 2</h5>
              <p className="textos-back text-black">En esta trayectoria, encontrarás pequeñas láminas que representan las riñas ¡Recoje todas y acomúlalas! </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/in3.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titulos text-black">PASO 3</h5>
              <p  className="textos-back text-black">Si tienes suficientes láminas de riñas, podrás coleccionar las herramientas especiales para resolver las riñas.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className="col-12 col-lg-4  d-flex justify-content-center align-items-center">
      <div id="juguemos"  className="">
       <button className=" boton-jugar botones p-1 d-flex justify-content-center align-items-center my-4">Ir al Juego</button>
      </div>
    </div>
  </div>
  )
}

export default Section5