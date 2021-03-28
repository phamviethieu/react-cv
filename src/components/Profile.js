
import Particles from 'react-particles-js';
import '../css/project.css';

const Profile = ({ executeScroll }) => {
    return (
        <>
           <Particles  className='third-part'/> 

<div className="container"> 
    <div className="card profile  wow swing">
      <div className="avatar-profile">
        <img src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-1/p200x200/130243746_3468042736754224_7793089014818215777_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=WfTggrXKbg0AX-7QgXK&_nc_ht=scontent.fhan2-5.fna&tp=6&oh=9c6ebc516b06d623d4475fcd48ca1e32&oe=607DB242" width="200px" class="rounded-circle" alt="Cinque Terre" />
      </div>
      <div className="card-body"> 
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>
             Pham Viet Hieu
            </h3>
            <small><i>No pain, No gain !</i></small>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6 text-right">
               <span className="ml-2"> </span>Title:
              </div>
              <div className="text-left col-6">
                Junior developer
              </div>
            </div>
             
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6 text-right">
              Years experience:
              </div>
              <div className="text-left col-6">
                ~1
              </div>
            </div> 
          </li>
          <li className="list-group-item">
          <div className="row">
              <div className="col-6 text-right">
                Birth year:
              </div>
              <div className="text-left col-6">
              1998
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6 text-right">
              Nationality:
              </div>
              <div className="text-left col-6">
              Vietnam
              </div>
            </div>
          </li>
        </ul>
      </div>
     
    </div>
    <button onClick={() => executeScroll('experiences')} className="mb-5 mt-3 btn btn-width-big  btn-success wow fadeIn"> 
        Next
    </button> 
  </div>
  
    </>)
}

export default Profile