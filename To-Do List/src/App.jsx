import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";

let nextId = 0;

const App = () => {
  const [name, setName] = useState("");
  const [items , setItems] = useState([]);

  function handleClick(){
    setItems([
      ...items,
      {id:nextId++, name: name, checked: false}
    ]);
    setName("");  // Clear the input field after adding the item
  }

  function handleCheck(id){
    setItems(items.map(item => (
      item.id == id ? {...item, checked: !item.checked} : item
    )));
  }


  return (
    <div className="flex flex-col items-center  h-screen bg-[linear-gradient(to_right,_#0F2027,_#203A43,_#2C5364)] bg-blue-400">
      <h1 className="text-8xl text-white font-itim mt-40 flex justify-center">
        To-Do List
      </h1>
      <div className=" gap-4 w-2/12 mt-10 flex flex-row justify-evenly">
        <input
          className="w-9/12 h-10 rounded-lg p-4 text-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button
          onClick={handleClick}
          className="bg-green-500 px-5 rounded-lg text-xl text-white font-semibold"
        >
          Add
        </button>
      </div>
      <ul className=" text-4xl text-white font-itim flex flex-col  p-5 w-2.5/12 mt-10">
        {items.map((item) => (
          <li className="my-2" key={item.id}>
            <FontAwesomeIcon
              onClick={() => handleCheck(item.id)}
              icon={item.checked ? faCheckSquare : faSquare}
              className="text-white mr-4 cursor-pointer"
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
