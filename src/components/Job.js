import React from "react";
import {Card,Badge,Button,Collapse} from "react-bootstrap";
 import ReactMarkdown from "react-markdown";
 import {useState} from "react";
 

const Job = ({job}) => {

   const[open, setOpen] = useState(false);
  
   return( 
    <Card ClassName="mb-4">
       <Card.Body>
         
          <div className="d-flex justify-content-between">

             <div>

                <Card.Title>
                   {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                   {new Date(job.created_at).toLocaleDateString()}
                </Card.Subtitle>
                <Badge variant="primary" className="mr-2">{job.type}</Badge>
                <Badge variant="primary" className="">{job.location}</Badge>
                 <div style={{ wordBreak : "break-all" } }><ReactMarkdown source={job.how_to_apply} /></div>
             </div>
             <div>
                <img  height ="50" alt={job.company} src={job.company_logo} />
             </div>


          </div>
       
       <Button variant="primary" onClick={()=> setOpen(!open)}>{open ? "Hide Description" : "View Description"}</Button>
       
       <Collapse in={open}><div className="mt-4">
          <ReactMarkdown source={job.description} />
       </div>
       </Collapse>
       
       
            
             
          
     
  </Card.Body>

    </Card>
   );

};

export default Job;