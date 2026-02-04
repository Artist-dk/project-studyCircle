  useEffect(()=>{
    console.log("Fetching sdm users...")
    const result = axios.get("http://localhost:8081/fetchUsers")
    result.then((res)=> {
      setSdmusers(res.data.data);
      console.log("Fetched sdm users: ",JSON.stringify(res.data.data.length))
    })
  }, [sdmUsers])