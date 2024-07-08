import { useEffect, useState } from "react";


function useFetch(url:string){
  const [data, setData] = useState([]);
  const [isPending, setIsPending]=useState(true)
  const [error,setError]=useState(null)
//useeffect hook re renders component everytime when a value changes we pass an empty list as a argutemet where wwe can mention
  //the state names on which only use effexxt will be called and re rendered
  useEffect(() => {
    console.log("Use effect ");
    fetch(url)
      .then((data) => {
        if(data.ok){
            return data.json();
        }else{
            throw new Error("Could Not Fetch the data")
        }
      })
      .then((data) => {
        setData(data);
        setIsPending(false)
        setError(null)
      })
      .catch(err=>{
            setError(err.message)
            setIsPending(false)
      })
  }, [url]);
  return { data,isPending,error}
}
export default useFetch