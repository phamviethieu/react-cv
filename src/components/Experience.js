const Experience = ({ executeScroll }) => {
    const cls = [
        'wordpress.png',
        'js.png',
        'css.png',
        'jquery.png',
        'gitlab.png',
        'git.png',
    ];
    const sunIntern = [
        'laravel.png',
        'mysql.png',
        'bower.png',
        'jquery.png',
        'github.png',
        'git.png',
    ];
    const sun = [
        'laravel.png',
        'mysql.png',
        'sass.png',
        'react.png',
        'vue.png',
        'git.png',
        'github.png',
        'docker.png',
    ];

    const bar = [
        'laravel.png',
        'mysql.png',
        'sass.png',
        'react.png',
        'vue.png',
        'git.png',
        'github.png',
        'docker.png',
    ];
    const renderImage =  company => company.map(e => 
                <img className="ml-3" src={process.env.PUBLIC_URL + '/images/' + e  } width="30px"/>
            );
    const renderBar = bar.map(e => 
            <h1  className="wow fadeIn float-left"  data-wow-offset="100" data-wow-delay="0.2s" >
                <img src={process.env.PUBLIC_URL + '/images/' + e  } className="round" width="70%"/>
            </h1>

        );
    return (
        <>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Certificate</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/certificate/iot.jpg'  } width="50%"  alt="Second slide" />
            </div>
            </div>
        </div>
        </div>
        <div className="row justify-content-center mb-5  wow bounceIn"> <h2>Experiences</h2>  </div>
            <div className="row no-gutters">
            <div className="col-sm"> </div>
            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2 wow bounceIn" data-wow-delay="0.2s">
                <span className="badge badge-pill bg-warning border">&nbsp;</span>
            </h5>
            <div className="row h-50 wow bounceIn">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm py-2">
            <div className="card wow fadeInLeftBig"  data-wow-delay="0.2s">
                <div className="card-body ">
                <div className="float-right text-muted small">Sep 2016 - August 2020</div>
                <h5 className="card-title"> 
                    Hanoi Open University
                </h5>
                <small>
                    <i>
                    Faculty of Electronics and Information Technology
                    </i>
                </small>


                <p className="card-text mt-2 text-left">
                    - Study Electronic communication major.
                    <br />
                    - Take part in volunteer with "Hội sinh viên yên định tại hà nội"
                    <br />

                    - Join the contest : Olympic Tin Học - Tiếng Anh không chuyên 2019
                    <br />

                    - Passed The Certificate of Completion Internet Of Things 21/01/2020 (Bkcad)
                    &nbsp;
                    <a href="" data-toggle="modal" data-target="#exampleModal">
                        View certificate
                    </a>
                    <br />

                </p>
                </div>
            </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-sm py-2">
            <div className="card wow fadeInRightBig"  data-wow-delay="0.2s">
                <div className="card-body">
                <div className="float-right small">Sep 2019 - Nov 2019 </div>
                
                <h4 className="card-title"> 
                    Codelovers Vietnam
                </h4>
                <small>
                    <i>
                    PHP Intern
                    </i>
                </small>
                <p className="mt-3">
                    { renderImage(cls) }
                </p>


                <p className="card-text text-left mt-2">
                - Join team Wordpress development. 
                <br />
                - Working with internal project also outsource project (Front-end)
                </p>
                
                </div>
            </div>
            </div>
            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50 wow bounceIn">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2 wow bounceIn" data-wow-delay="0.2s">
                <span className="badge badge-pill bg-warning border">&nbsp;</span>
            </h5>
            <div className="row h-50 wow bounceIn">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm"> </div>
        </div>
        <div className="row no-gutters">
            <div className="col-sm"> </div>
            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50 wow bounceIn">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2  wow bounceIn" data-wow-delay="0.2s">
                <span className="badge badge-pill bg-warning border ">&nbsp;</span>
            </h5>
            <div className="row h-50 wow bounceIn">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm py-2">
            <div className="card wow fadeInLeftBig"  data-wow-delay="0.2s">
                <div className="card-body">
                <div className="float-right text-muted small"> May 2020 - Sep 2020</div>
                <h4 className="card-title"> 
                    Sun* Inc Vietnam
                </h4>
                <small>
                    <i>
                    PHP Intern
                    </i>
                </small>
                <p className="mt-3">
                    { renderImage(sunIntern) }

                </p>

                <p className="card-text text-left">
                    - Training git, laravel, sql and company working process.
                    <br />
                    - Implement a project booking hotel (invidual) with Repository Pattern.
                    <br />

                    - Working team in internal project about sharing book (with team)
                </p>
                </div>
            </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-sm py-2">
            <div className="card wow fadeInRightBig"  data-wow-delay="0.4s">
                <div className="card-body">
                <div className="float-right text-muted small">Sep 2020 - Now </div>
                <h4 className="card-title"> 
                    Sun* Inc Vietnam
                </h4>
                <small>
                    <i>
                    Server-side engineer
                    </i>
                </small>
                <p className="mt-3">
                    { renderImage(sun) }
                </p>
                <div> 

            </div>
                <p className="card-text text-left">
                    - Working in Research and Developement Division.
                    <br />
                    - Working and take part in Internal Company Production developement with developer position.
                    <br />
                    - Have chance to working with docker, reactjs, redux and vuejs, vuex.
                    <br />
                    - Have chance to working with Viblo team in which people are friendly and always ready to help other peoples.
                </p>
                </div>
            </div>
            </div>

            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50 wow bounceIn">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2  wow bounceIn" data-wow-delay="0.5s">
                <span className="badge badge-pill bg-success border">&nbsp;</span>
            </h5>
            <div className="row h-50 wow bounceIn">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm"> </div>
        </div>
        <div className="container py-3 mt-2 border-top">
          <div className="row">
            <div  className="third-section">
                { renderBar }
              </div>
          </div>
        </div>
</>)
}
export default Experience