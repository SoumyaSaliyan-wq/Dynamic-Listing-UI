import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] =  useState<any | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //useeffect hook re renders component everytime when a value changes we pass an empty list as a argutemet where wwe can mention
  //the state names on which only use effexxt will be called and re rendered
  useEffect(() => {
    const abortCont = new AbortController();//abort controller will abort fetch when we move to nect pages and will maintain the state
    console.log("Use effect ");
    fetch(url, { signal: abortCont.signal })
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error("Could Not Fetch the data");
        }
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
}
export default useFetch;
