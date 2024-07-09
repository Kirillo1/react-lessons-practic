import { useState } from "react";
import TodoList from "./TodoList";

// Компонент TodoList принимает массив. Поэтому стейт надо скорректировать для работы с массивом.
const TodoForm = () => {
    // Для управления состоянием компонента
    const [taskName, setTaskName] = useState("");
    const [taskInfo, setTaskInfo] = useState("");
    const [tasks, setTasks] = useState([]);

    // Обработчик изменения значения в инпуте для имени задачи
    const handleNameChange = (event) => {
        setTaskName(event.target.value);
    };

    // Обработчик изменения значения в инпуте для информации о задаче
    const handleInfoChange = (event) => {
        setTaskInfo(event.target.value);
    };

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskName.trim() && taskInfo.trim()) {
            setTasks([...tasks, { id: crypto.randomUUID(), name: taskName, info: taskInfo }]);
            setTaskName(""); // Очистка поля ввода после добавления задачи
            setTaskInfo(""); // Очистка поля ввода после добавления задачи
        }
    };

    return (
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="taskName"
                    >
                        Task name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="taskName"
                        type="text"
                        placeholder="Task name"
                        value={taskName}
                        onChange={handleNameChange}
                    />
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="taskInfo"
                    >
                        Task info:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="taskInfo"
                        type="text"
                        placeholder="Task info"
                        value={taskInfo}
                        onChange={handleInfoChange}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Add task
                </button>
            </form>

            <TodoList toDos={tasks} />
        </div>
    );
};

export default TodoForm;
