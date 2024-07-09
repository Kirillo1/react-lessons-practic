/**
 * Компонент для задач
 * @param {object} props.todo - Объект задачи с полями name и info
 * @param {function} props.editTodo - Обработчик клика для редактирования задачи
 * @param {function} props.deleteTodo - Обработчик клика для удаления задачи
 */

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
    return (
        <li 
            className = "mt-5"
        >
            <h3 className="mb-2  text-1xl font-bold text-zinc-800">New task</h3>

            <span className="block text-gray-700 text-sm font-normal mb-2">Task name: {todo.name}</span>
            <span className="block text-gray-700 text-sm font-normal mb-2">Task info: {todo.info}</span>

            <div 
                className="mt-3"
                >
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-normal py-2 px-4 m-2 rounded"
                    onClick={() => editTodo(todo)}
                >
                    Edit
                </button>

                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 m-2 border border-gray-400 rounded shadow"
                    onClick={() => deleteTodo(todo?.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
