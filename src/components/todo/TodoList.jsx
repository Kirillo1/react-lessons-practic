import TodoItem from "./TodoItem";

/**
 * Компонент со списком задач
 * @param {object[]} props.toDos - Массив объектов с задачами 
 * @param {function} props.editTodo - Обработчик клика для редактирования задачи
 * @param {function} props.deleteTodo - Обработчик клика для удаления задачи
 */

const TodoList = ({ toDos, editTodo, deleteTodo }) => {

    return (
        <ul>
            {!!toDos && toDos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
