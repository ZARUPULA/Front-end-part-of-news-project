import index from "./Components/Navbar/index";



const Base=({title="welcome to website",children})=>{

    return(

        <div className="container-fluid">

            <index/>

            {children}

           



        </div>

    );

};

export default Base;