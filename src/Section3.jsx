import React from 'react'

function Section3(props) {
    return (
        <div>
            <div className="container">
                <div className="row  mt-5 mb-5">
                    <div className="col-12 col-lg-6  d-flex align-items-center">
                        <div>
                            <h2 className="subtitulos2 d-flex justify-content-center">{props.titulo}</h2>
                            <p className="textos">{props.texto}</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div>
                            <img className="img-fluid" src={(`./images/${props.img}`)} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Section3