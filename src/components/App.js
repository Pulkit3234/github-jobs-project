import React from "react";
import useFetchJobs from "../useFetchJobs";
 import {Container,Spinner} from "react-bootstrap";
import {useState} from "react";
import Job from "./Job"
import JobsPagination from "./JobsPagination";
import Search from "./Search"


const App = () => {

    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    console.log("before-hook");
    const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);

const jobList =  jobs.map((job) => {
    return <Job  key={job.id} job={job}/>

});

   const paramChangeHandler = (e) => {

    const param = e.target.name;
    const value = e.target.value;
    //setPage(1)
console.log(value);
     //setParams({[param] : value});

    setParams(prevParams => {
      return { ...prevParams, [param]: value } } ); 

   } 
    


    return(
        <Container className="my-4">

            <h1  className="text-primary mb-8">GitHub Jobs Listings</h1>
           <Search className="mb-2" onParamsChange={paramChangeHandler} params={params}  />
     
            
          

           
          
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> 

             {loading ? <Spinner animation="border" variant="dark" /> : "" }
            
            {error&&<h1>Error... Try Refreshing</h1>}
           {jobList}
            {!loading && <JobsPagination page={page} setPage={setPage} className="mt-2" hasNextPage={hasNextPage} />}
        </Container>
    );

};

export default App;




