import React,{useState} from "react";
import Navbar from "./Component/Navbar/Navbar";
import BookTitle from "./Component/BookTitle/BookTitle";
import ShowData from "./Component/Showdata/ShowData";

const App =()=>{
  const [apiData, setApiData] = useState([]);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");

  return(
    <div>
      <Navbar
        setValue={setValue}
        setSelected={setSelected}
        value={value}
        setApiData={setApiData}
      />
      <BookTitle selected={selected}/>
      <ShowData
        apiData={apiData}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
   
  )
}
export default App  