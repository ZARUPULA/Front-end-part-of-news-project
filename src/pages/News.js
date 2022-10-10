// import React from "react";
// import { Link } from 'react-router-dom';


// class News extends React.Component {
//     constructor(props) {
//       super(props);
//       console.log("i am constructor");
//       this.state = { name1: "",count:0 };
      
//     }
//     async componentDidMount() {
//       console.log("i am coponentdidmount");
//       let res = await fetch(
//         `https://newsapi.org/v2/everything?q=news&apiKey=b5ac07d48aae48e988ff657ff0c555d8`
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
        
        
        
//       <>
      
//       <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}} >
//       <Link to="/india">
//       <button   >India News</button>
//       </Link>
//       <Link to="/lifestyle">
//        <button variant ="Latest News">Lifestyle</button>
//        </Link>
//        <Link to="/editorial">
//        <button variant ="Top News">Bsuiness</button>
//        </Link>
//        <Link to="/film">
//        <button  >Film News</button>
//        </Link>
    
//        <Link to="/sports">
//        <button  >Sports</button>
//        </Link>
       
       
       
      
    
       
       
//        </div>
       
       
//       <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{this.state.name1} </div>
     
//       </> );
//   }}

// export default News;
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './news.css';
import axios from "axios";


const News = () => {

  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/news_details")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setNews(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  return (
    
    
  
    
    <div className="news">
      
      <div >
      <center>
      <h1 >NEWS HEADLINES</h1>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}} >

       {/* <Link to="/sports">
        <button  >Sports</button>
        </Link> */}
        
        <Link to="/film">
        <button  >Film</button>
        </Link> 
        
        </div>
      



                



                  



                  
      
      </center>
      </div>
      
      

      <div className="newsPageContainer">
        {/* <div className="filterContainer">
          <button>Filter</button>
        </div> */}
        <div className="newsList">
          {news &&
            news.map((news_info) => {
              return (
                <div key={news_info.id} className="newsCard">
                  <img
                    src={news_info.image}
                    className="newsImage"
                  />
                   <div>
                    {news_info.news_details}
                  </div> 
                  
                </div>
                
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default News;
// import React, { useState ,useEffect} from 'react';
// import './news.css';

// function News() {
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/auth/news_details")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log('called get items')
//           console.log(result)
//           setItems(result);
//         },

//         (error) => {
//           setError(error);
//         }
//       )
//   }, [])
//   return (
//     <div className="App">
//       <h1>NEWS HEAD LINES</h1>
//        <ul>
//         {items && items.map(news => (
//           <div key={news.id}>
//            <h3> {news.id} . {news.image} {news.news_details} </h3>  
       
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default News;