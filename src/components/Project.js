import { useState } from 'react';

const Project = () => {
    const [p1Active, setP1Active] = useState(true);
    const [p2Active, setP2Active] = useState(false);
    const [p3Active, setP3Active] = useState(false);
    const [p4Active, setP4Active] = useState(false);
    const setActiveBtn = (btn) => {
        setP1Active(btn === 1 ? true : false);
        setP2Active(btn === 2 ? true : false);
        setP3Active(btn === 3 ? true : false);
        setP4Active(btn === 4 ? true : false)
    }

    return (
        <>
          <div className="wow fadeIn"> 
            <h4> PROJECTS </h4> 
          </div>
          <button onClick={() => setActiveBtn(1)} className={ p1Active ? "btn my-3 btn-success" : "btn my-3 btn-next btn-primary" }> 
              Booking Hotel
          </button> 
          <button onClick={() => setActiveBtn(2)} className={  p2Active ? "btn my-3 btn-success" : "btn my-3 btn-next btn-primary" }> 
              Page School
          </button> 
          <button  onClick={() => setActiveBtn(3)} className={p3Active ? "btn my-3 btn-success" : "btn my-3 btn-next btn-primary"}> 
              Student Abroad Mangagement
          </button> 
          <button  onClick={() => setActiveBtn(4)} className={ p4Active ? "btn my-3 btn-success" : "btn my-3 btn-next btn-primary" }> 
              Vue Extension
          </button> 
            {
              p1Active ? (
                    <div className="wow fadeIn item my-3">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/booking-hotel/anh_dong.gif'  } width="50%" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/booking-hotel/1.png'  } width="50%"  alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/booking-hotel/2.gif'  } width="50%"  alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
              </div>

              ) : null
            }
            {
              p2Active ? (
                    <div className="wow fadeIn item my-3">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/schoolpage/1.png'  } width="50%" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/schoolpage/2.png'  } width="50%"  alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/schoolpage/4.png'  } width="50%"  alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
              </div>

              ) : null
            }
            {
              p3Active ? (
                    <div className="wow fadeIn item my-3">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/duhoc/1.jpg'  } width="50%" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/duhoc/2.png'  } width="50%"  alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/duhoc/3.png'  } width="50%"  alt="Third slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/project/duhoc/4.png'  } width="50%"  alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
              </div>

              ) : null
            }
            {
              p4Active ? (
                <div className="wow fadeIn item my-3">
                <img src={process.env.PUBLIC_URL + '/images/project/vue_ext/1.png'  } width="50%" alt="First slide" />
                </div>
              ) : null
            }
  
        </>
    )}

export default Project