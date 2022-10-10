import React from 'react';
  
const Home = () => {
  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >

      {/* <div style={{



backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

<img src="https://4.bp.blogspot.com/-2Yin81fn8kc/XvKO53exknI/AAAAAAAAJx4/Q1KMUwDsKQwvl7gtF_egGu0znyZMb3GvACLcBGAsYHQ/s1600/newspapers.jpg" width={500}></img>  

}}></div> */}
        
      <img src="https://4.bp.blogspot.com/-2Yin81fn8kc/XvKO53exknI/AAAAAAAAJx4/Q1KMUwDsKQwvl7gtF_egGu0znyZMb3GvACLcBGAsYHQ/s1600/newspapers.jpg" width={500}></img>  
      {/* <h1>
        Navi Mumbai sees 25% rise in dengue, 230% rise in malaria cases this year
      Mumbai News
       Published on Sep 29, 2022 09:34 PM IST
        While there were 20 malaria positive
       cases found last year in Navi Mumbai, 
   this year it went upto 66; of the 380 suspected dengue cases of last year till September, 
    28 were sent to Pune NIV of which eight were confirmed 
    Navi Mumbai has witnessed a 25% increase in dengue and 230% increase in malaria cases this year as compared to last year.
    
      </h1> */}

      
      
      
      
        
      
      
    </div>
  );
};
  
export default Home;
// import React from "react";

// class Home extends React.Component {
//     constructor(props) {
//       super(props);
//       console.log("i am constructor");
//       this.state = { name1: "",count:0 };
      
//     }
//     async componentDidMount() {
//       console.log("i am coponentdidmount");
//       let res = await fetch(
//         `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=b5ac07d48aae48e988ff657ff0c555d8`
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

// export default Home;
