// import React from "react";

// class Film extends React.Component {
//     constructor(props) {
//       super(props);
//       console.log("i am constructor");
//       this.state = { name1: "",count:0 };
      
//     }
//     async componentDidMount() {
//       console.log("i am coponentdidmount");
//       let res = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b5ac07d48aae48e988ff657ff0c555d8`
//       );
//       let data = await res.json();
//       console.log(data, typeof data.articles, data.articles, typeof ar);
//       let w = { width: "400px" };
//       let arr = data.articles.map((p) => {
//         return (
//           <div class="p-8">  
//           {/* <!--Card 1--> */}
//           <div class="max-w-sm rounded overflow-hidden shadow-lg">
//             <img class="w-full" src={p.urlToImage}/>
//             <div class="px-6 py-4">
//               <div class="font-bold text-xl mb-2">{p.title}</div>
//               <p class="text-gray-700 text-base">
//                 {p.description}
//               </p>
//               <button class="font-bold text-xl mb-2"> <a href={p.url}>Read more</a></button>
//             </div>
//             <div class="px-6 pt-4 pb-2">
//               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
//               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
//               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
//             </div>
//           </div>
//         </div>
//         );
//       });
//       console.log(arr);
//       this.setState({ name1: arr });
//     }
//     render() {
//       // this.setState({count:this.state.count+1})
//       console.log(" i am render",this.state.count);
      

//       return  (
      
      
       
       
//       <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{this.state.name1} </div>
     
//       );
//   }}

// export default Film;
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './film.css';
import axios from "axios";


const Film = () => {

  const [film, setfilm] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/film_details")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setfilm(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  return (
    
    
  
    
    <div className="film">
      
      <div >
      <center>
      <h1 >FILM UPDATES</h1>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}} >

      <Link to="/news">
        <button  >News</button>
        </Link>
        
        {/* <Link to="/sports">
        <button  >Sports</button>
        </Link> */}
        
        </div>
      



                



                  



                  
      
      </center>
      </div>
      
      

      <div className="filmPageContainer">
        {/* <div className="filterContainer">
          <button>Filter</button>
        </div> */}
        <div className="filmList">
          {film &&
            film.map((film_info) => {
              return (
                <div key={film_info.id} className="filmCard">
                  <img
                    src={film_info.image}
                    className="filmImage"
                  />
                   <div>
                    {film_info.film_details}
                  </div> 
                  
                </div>
                
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Film;
//
// import React, { useState, useEffect } from "react";
// import { Outlet, Link, useNavigate } from "react-router-dom";
// import './film.css';
// import axios from "axios";

// const film = () => {

//   const [Film, setFilm] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/auth/film_details")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log('called get items')
//           console.log(result)
//           setFilm(result);
//         },
//         (error) => {
//           setError(error);
//         }
//       )
//   }, [])

//   return (
//     <div className="film">
//       <h1 className="filmHeading">Product Page</h1>
//       <div className="filmPageContainer">
//         {/* <div className="filterContainer">
//           <button>Filter</button>
//         </div> */}
//         <div className="filmList">
//           {Film &&
//             Film.map((film_info) => {
//               return (
//                 <div key={film_info.id} className="filmCard">
//                   {/* <img
//                     src={Product.image}
//                     className="productImage"
//                   /> */}
//                    <img
//                     src={film_info.image}
//                     className="filmImage"
//                   />
                  
                  
//                 </div>
              
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default film;