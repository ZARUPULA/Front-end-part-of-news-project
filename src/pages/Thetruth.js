 import React from 'react';
 import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { NavMenu } from '../Components/Navbar/NavbarElements';
  
// const Thetruth = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Center',
//         alignItems: 'Center',
//         height: '100vh'
//       }}
//     >
//       <h1>hello truth 
        

//       </h1>
    

      
//     </div>
//   );
// };
  
// export default Thetruth;
import './Thetruth.css';

function Thetruth(){
  const sub = () => {

    alert('subscribed');

    

}
const deleteAnimal = () => {

  alert(" Subcribed For One Month  ");

 

};
const d = () => {

  alert(" Subcribed For Six Months ");

 

};
const a = () => {

  alert(" Subcribed For One Year");

 

};

    return(

<div
style={{
         display: 'flex',
         justifyContent: 'Center',
         alignItems: 'Center',
         height: '100vh'
}}>

        <div className="bodyBox">

           <div className="IncreaseOfTime">

            <h3>For One Month Subcribtion</h3>
            

            <button

className="btn btn-danger"

onClick={() => deleteAnimal()}

style={{ marginLeft: "10px" }}

>

Subcribe For RS-60

</button>

                

           </div>

           &ensp;

           <div className="IncreaseOfTime">

            <h3>For Six Months Subcribtion </h3>

            <button

className="btn btn-danger"

onClick={() => d()}

style={{ marginLeft: "10px" }}

>

Subcribe For RS-360/

</button>

           </div>

           &ensp;

           <div className="IncreaseOfTime">

            <h3> For One Year  Subcribtion</h3>

            <button

className="btn btn-danger"

onClick={() => a()}

style={{ marginLeft: "10px" }}

>

Subcribe For RS-720/

</button>

           </div>

           &ensp;

           <div className="IncreaseOfTime">

            <h3> Click Here After Subcribtion</h3>

            <Link to="/Payment">
        <button  >Payment</button>
        </Link>

           </div>

        </div>

        </div>


    );


}

export default Thetruth
