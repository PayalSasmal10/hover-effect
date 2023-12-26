import { useState } from 'react';
import './App.css';
import { FaRegFolder } from "react-icons/fa";

function App() {
  const [data, setData] = useState(false);
  const showName = (x) => {
    setData(true);
  };
  const hiddenName = () => {
    setData(false);
  }
  return (
    <div className="">
      {/* <p>{data}</p> */}
      <FaRegFolder onMouseEnter={showName} onMouseLeave={hiddenName}/>
      <p>{data? "Folder":""}</p>
    </div>
  );
}

export default App;
