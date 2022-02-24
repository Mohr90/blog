import React from "react";


 function Projects(props) {
     return(
         <React.Fragment>
             <div className="section is-small">
                 <h2 className="title is-size-2">
                     {props.title}
                 </h2>
                 <h3 className="subtitle is-size-4">
                 {props.subtitle}
                 </h3>
                 <div className="content is-size-5">
                 {props.children}
                 </div>
             </div>
         </React.Fragment>
     )
 }


 export default Projects; 