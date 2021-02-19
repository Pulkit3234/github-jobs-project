
import axios from "axios";
import {useReducer,useEffect} from "react";



const reducer = (state,action) => {
    switch(action.type){

        case "make-request" :
            return {loading : true, jobs : []}
        case "get-data" :
            return {...state, loading : false, jobs : action.payload.jobs }
 
        case "error" :
            return {...state, loading : false, jobs : [], error : action.error}

        case "update-has-next-page" :
        return {...state, hasNextPage : action.payload.hasNextPage}

        default :
        return state;
    }
    
}

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}


 const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get('/positions.json', {
      cancelToken: cancelToken1.token,
      params: { markdown: true, page: page, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } }) 
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    })

    const cancelToken2 = axios.CancelToken.source()
    axios.get('/positions.json', {
      cancelToken: cancelToken2.token,
      params: { markdown: true, page: page + 1, ...params }
    }).then(res => {
      dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } }) 
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    })

    return () => {
      cancelToken1.cancel()
      cancelToken2.cancel()
    }
  }, [params, page])

  console.log("hook re-render");
  
  return state
}


export default useFetchJobs

/*const useFetchJobs = (params,page) => {
const [state, dispatch] = useReducer(reducer, {jobs: [], loading : true});

 

useEffect(()=>{

   const CancelToken = axios.CancelToken;
const source = CancelToken.source();
    dispatch ({type:"make-request"});

    axios.get(Base_URL, {
        cancelToken : source.token,
        params : {
            markdown : true,
            page,
            ...params
        }}).then(res => {
            dispatch({type: "get-data", payload : {jobs : res.data} });
        }).catch(e => {
            if(axios.isCancel(e)){
                return;
            }
            dispatch({type : "error" , payload : {error : e} });
        })

    })


    return () => {
       source.cancel();
    }


}, [params, page] )



return state;
}


export default useFetchJobs;
*/