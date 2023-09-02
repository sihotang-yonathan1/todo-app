"use client"

import { useState } from "react"
import { FiEdit, FiCheck ,FiTrash2, FiPlus } from "react-icons/fi";

function TaskContainer({name, id, deleteFunct}: {name: string, id: number, deleteFunct: any}){
    const [taskName, setTaskname] = useState(name)
    const [isEditMode, setEditMode] = useState(false)
    
    function handleTaskNameEdit(event: any){
        setTaskname(event.target.value)
    }

    function handleEditMode(event: any){
        setEditMode(!isEditMode)
    }

    return (
        <div className="flex flex-row justify-between border-b-2 border-b-black my-2">
            {/* title */}
            <div className="flex flex-col justify-center">
                <input
                    type="text"
                    value={taskName}
                    disabled={!isEditMode}
                    className="disabled:bg-cyan-300"
                    onChange={handleTaskNameEdit}
                />
            </div>

            {/* Action */}
            <div className="flex flex-row mb-1">
                {/* Delete */}
                {!isEditMode &&
                    <div className="rounded border-2 p-2 mx-2 bg-gray-500">
                        <button
                            type="button" 
                            className="text-white text-center"
                            onClick={() => deleteFunct(id)}
                        >
                            <FiTrash2 color="#ef4340"/>
                        </button>
                    </div>
                }

                {/* Update */}
                <div className="rounded border-2 p-2 mx-2 bg-gray-500">
                    <button 
                        className="text-white"
                        type="button"
                        onClick={handleEditMode}
                    >{isEditMode ? <FiCheck color="#80c904"/> : <FiEdit color="#f6e683"/>}</button>
                </div>
            </div>
        </div>
    )
}

type TaskData = {
    'name': string,
    'id': number
}

export default function TodoAppPage(){
    const [taskList, setTaskList] = useState(Array<TaskData>)
    const [currentTask, setCurrentTask] = useState("")

    function handleAddTask(event: any){
        if (currentTask){
            setTaskList(task => [...task, {
                'name': currentTask,
                'id': task.length
            }])
            setCurrentTask("")
        }
    }

    function handleCurrentTask(event: any){
        setCurrentTask(event.target.value)
    }

    function handleDeleteAllTask(event: any){
        setTaskList([])
    }

    function handleDeleteSingleTask(idx: any){
        const new_data = [...taskList]
        new_data.splice(idx, 1)
        setTaskList(new_data)
    }

    return (
        <div className="border-2 flex flex-col bg-slate-100">
           
            {/* Title */}
            <div className="my-2">
                <p className="text-center font-semibold">Todo App</p>
            </div>

            {/* Upper action */}
            <div className="flex flex-row px-2 justify-center">
                {/* textinput */}
                <div className="ml-1">
                    <input 
                        type="text" 
                        name="task-input" 
                        id="task-input"
                        placeholder="Enter your task" 
                        className="px-2 rounded py-1"
                        value={currentTask}
                        onChange={handleCurrentTask}
                    />
                </div>

                {/* Add button */}
                <div className="px-2 flex">
                    <button 
                        type="button"
                        className="bg-blue-300 rounded p-2 border"
                        onClick={handleAddTask}
                    >
                        <FiPlus color="#1f1f1f"/>
                    </button>
                </div>
            </div>

            <div className="flex-row flex justify-center py-1">
                <p>You have {taskList.length} {taskList.length > 1 ? "tasks": "task"}  to do</p>
            </div>

            <div className="px-3 py-2 my-2 mx-2 bg-cyan-300">
                { taskList.length > 0 && <div>
                    <p className="underline font-bold">Task List</p>
                </div>}
                {/* Task List Container */}
                <div>
                    {/* TODO: get data from database */}
                    {taskList.map(data => (
                        <TaskContainer 
                            name={data.name} 
                            key={data.id}
                            id={data.id}
                            deleteFunct={handleDeleteSingleTask}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-row justify-center mb-2">
                <button
                    type="button"
                    className="bg-slate-700 p-1 rounded text-red-400"
                    onClick={handleDeleteAllTask}
                > Delete All 
                </button>   
            </div>
        </div>
    )
}