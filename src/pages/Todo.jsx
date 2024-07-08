import TodoForm from "../components/todo/TodoForm";


function Todo() {
    return (
        <section className="task-tracker">
            <div className="max-w-7xl mx-auto px-2">
                <h2 className="mb-4 text-4xl font-bold text-zinc-800">Трекер задач</h2>
                <TodoForm />
            </div>
        </section>
    );
}

export default Todo
