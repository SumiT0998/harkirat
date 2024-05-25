import { useState } from "react";

//npm run build to produce finall project

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
      </div> */}
<custombutton count={count} ></custombutton>

    </>
  );

  
}
function custombutton(props){
  
}

export default App;
