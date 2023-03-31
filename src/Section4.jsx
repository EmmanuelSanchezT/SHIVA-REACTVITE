import React from 'react'

function Section4() {
    return (
<div>
<div id="beberly"  className="separador titulos text-white p-2 d-flex justify-content-center mt-5 mb-4">
    <h2>BEVERLY POLICE</h2>
  </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="image-flip" >
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className=" img-fluid" src="./images/target.png" alt="card image" />
                                        <h4 className="subtitulos2 card-title">OBJETIVO</h4>
                                        <a href="" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4 className="subtitulos2 card-title">OBJETIVO</h4>
                                        <p className=" textos card-text">¡Recorre la ciudad en busca de herramientas que te permitan ser más eficaz en tus procedimientos policiales!</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-skype"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-2 mb-4">
                    <div className="d-flex justify-content-center">
                        <img className="personaje" src="./images/personaje1.png" width="125" alt="" />
                    </div>
                    <div className="josh text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <button type="button" className="btn botones btn-primary">Más sobre Josh</button>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="image-flip">
                        <div className="mainflip">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="img-fluid" src="./images/Control.png" alt="card image" />
                                        <h4 className="subtitulos2 card-title">TEMÁTICA</h4>
                                        <a className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4 className="subtitulos2 card-title">TEMÁTICA</h4>
                                        <p className="textos card-text">Se ha pensado en un juego de aventura para apoyar la educabilidad de la sociedad actual.</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-skype"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                    <i className="fa fa-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
           
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title titulos fs-5" id="exampleModalLabel">JOSH</h1>
                        <button type="button " className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body gap-3">
                        <div className="container d-flex mr-4">
                            <div className="row">
                                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-2">
                                    <img src="./images/ventana_modal.png" width="200" alt="" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="textos">Josh es el personaje del videojuego. De él depende poder conseguir herramientas que le permitan mejorar la sana convivencia en su ciudad. ¡Es un policía de admirar!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary botones" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="separador titulos text-white p-2 d-flex justify-content-center mb-4">
    <h2>CÓMO JUGAR?</h2>
  </div>
</div>


  )
}

export default Section4