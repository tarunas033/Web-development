import { addTodo } from "../../../../day-2/lec/record/src/redux/todos/todos.action";

const TodoApp = () => {
    console.log("TodoApp");
    const ref = useRef();
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const addNew = () => {
        let value = ref.current.value;
        dispatch (
            addTodo({
                value: value,
                isCompleted: false,

            })
        );
        ref.current.value = null;

    };
    useEffect(() => {
        addTodo({
            addTodoAPI().then()
        });

        return (
            <h1>
                <div>
                    <input
                        ref={ref}
                        type="text"
                        placeholder="type here..."/>
                        <button onClick={addNew}>add</button>

                </div>
                {todos.map((todos) =>{
                    <div key={todo.id}>{todo.value}</div>
                })}
            </h1>
        )
        })
    }
