"use client"

import { useEffect, useState } from "react"
import { FiEdit, FiCheck ,FiTrash2, FiPlus } from "react-icons/fi";

function TaskContainer({name, id, created_time, deleteFunct}: {name: string, id: number, created_time: Date, deleteFunct: any}){
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
                <div>
                    <p className="text-xs">{created_time.getTime()}</p>
                </div>
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
    'id': number,
    'created_time': Date
}

export default function TodoAppPage(){
    const [taskList, setTaskList] = useState(Array<TaskData>)
    const [currentTask, setCurrentTask] = useState("")
    const [currentModeIndex, setCurrentModeIndex] = useState(0)

    const modeValue = [{
        'index': 0,
        'name': 'live'
    }, {
        'index': 1,
        'name': 'db'
    }]

    function handleAddTask(event: any){
        if (currentTask){
            setTaskList(task => [...task, {
                'name': currentTask,
                'id': task.length,
                'created_time': new Date()
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

    useEffect( () => {
        console.info(`data source changed to ${modeValue[currentModeIndex].name}`)
    }, [currentModeIndex, modeValue])

    return (
        <div className="border-2 flex flex-col bg-[#FCEDDA]">
           
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

            <div className="flex-row flex pt-1 pb-2 pl-3 justify-between mt-2">
                <p>You have <span className="text-red-400">{taskList.length}</span> {taskList.length > 1 ? "tasks": "task"}  to do</p>
                <div className="px-2">
                    <button
                        type="button"
                        className="bg-green-600 text-white text-sm p-1 rounded uppercase"
                        onClick={() => {
                            if (currentModeIndex + 1 > (modeValue.length - 1)){
                                setCurrentModeIndex(0)
                            }
                            else {
                                setCurrentModeIndex(prev => prev + 1)
                            }
                        }}
                    >{modeValue[currentModeIndex].name}</button>
                </div>
            </div>

            {taskList.length > 0 && (
            <div className="px-3 py-2 my-2 mx-2 bg-cyan-300">
                <div>
                    <p className="underline font-bold">Task List</p>
                </div>
                {/* Task List Container */}
                <div>
                    {/* TODO: get data from database */}
                    {taskList.map(data => (
                        <TaskContainer 
                            name={data.name} 
                            key={data.id}
                            id={data.id}
                            created_time={data.created_time}
                            deleteFunct={handleDeleteSingleTask}
                        />
                    ))}
                </div>
            </div>
            )}

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