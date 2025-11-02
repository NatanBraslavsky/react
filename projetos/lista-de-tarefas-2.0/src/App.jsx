import {useEffect, useRef, useState} from "react";
import AddTask from "./components/AddTask/AddTask";
import ShowTask from "./components/ShowTask/ShowTask";
import "./style/index.css";
import PopUpTask from "./components/popUpTask";
import {LuCircleCheck} from "react-icons/lu";

const App = () => {
    const [task, setTask] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [addTaskShowPop, setAddTaskShowPop] = useState(false);
    const [qtdTasks, setQtdTasks] = useState(0);
    const [taskText, setTaskText] = useState("Tarefa");
    const timeoutRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task));
    }, [task]);

    const addTask = (title, description) => {
        const id = Math.random();
        const newTask = {
            id: id,
            title,
            description,
        };

        setTask([...task, newTask]);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setAddTaskShowPop(true);

        timeoutRef.current = setTimeout(() => {
            setAddTaskShowPop(false);
            timeoutRef.current = null;
        }, 2000);
    };

    const deleteTask = (e, taskId) => {
        e.stopPropagation();
        const newTask = task.filter((task) => {
            return task.id !== taskId;
        });
        setTask(newTask);
    };

    const editTask = (taskId, newData) => {
        setTask((prev) =>
            prev.map((tk) => (tk.id === taskId ? {...tk, ...newData} : tk))
        );
    };

    useEffect(() => {
        setQtdTasks(task.length);
    }, [task]);

    useEffect(() => {
        if (qtdTasks > 1) {
            setTaskText("Tarefas");
        } else {
            setTaskText("Tarefa");
        }
    }, [qtdTasks]);

    const duplicateTask = (e, taskId) => {
        e.stopPropagation();
        const taskToDuplicate = task.find((t) => t.id === taskId);
        if (taskToDuplicate) {
            const duplicatedTask = {
                ...taskToDuplicate,
                id: Math.random(),
            };
            setTask([...task, duplicatedTask]);
        }
    };

    return (
        <div className="containerMaxW">
            <div className="mainContainerTask">
                <h3 className="taskTitleText">Tarefas</h3>
                <p className="containerQtdTask">
                    <LuCircleCheck className="iconCheckQtd" />
                    <span className="spanTextQtdTask">
                        {qtdTasks} {taskText}
                    </span>
                </p>
                <ShowTask
                    task={task}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    duplicateTask={duplicateTask}
                />
                <AddTask addTask={addTask} />
                <PopUpTask addTaskShowPop={addTaskShowPop} />
            </div>
        </div>
    );
};

export default App;
