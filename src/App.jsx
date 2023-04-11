import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] flex items-center`,
};
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Please enter a valid todo");
    } else {
      setTodoList([...todoList, { todoName: todo }]);
    }
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const deleteList = [
      ...todoList.filter((doc) => {
        return doc.todoName !== deleteValue;
      }),
    ];
    setTodoList(deleteList);
  };

  return (
    <div className={style.bg}>
      <div className="w-[500px] mx-auto text-center bg-orange-50 p-5 rounded-md">
        <h1 className="text-5xl font-bold mb-8">Todo List</h1>
        <form onSubmit={handleForm}>
          <input
            className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-900 text-white py-3 px-8 rounded-lg mb-8"
          >
            Add Todo
          </button>
        </form>
        <div>
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
                <li
                  key={index}
                  className="bg-cyan-900 mb-5 flex justify-between  text-white py-5 rounded-lg text-xl px-5"
                >
                  {singleTodo.todoName}{" "}
                  <TiDelete
                    onClick={() => deleteTodo(singleTodo.todoName)}
                    className="cursor-pointer"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
