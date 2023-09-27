"use client"

import React, { Suspense, useEffect, useState } from "react"
import { FiEdit, FiCheck ,FiTrash2, FiPlus } from "react-icons/fi";
import Searchbar from "./components/content/task_container/Searchbar";

function TaskContainerLoading(){
    return (
        <div>
            <p>Loading Task</p>
        </div>
    )
}

function TaskActionButton({children}: {children: React.ReactNode}){
    return (
        <div className="rounded border-2 p-2 mx-2 bg-gray-500">
            {children}
        </div>
    )
}

function TaskContainer({name, id, created_time, deleteFunct}: {name: string, id: number, created_time: Date, deleteFunct: any}){
    const [taskName, setTaskname] = useState(name)
    const [isEditMode, setEditMode] = useState(false)
    // At the moment, false means task not completed, true means task completed
    const [taskStatus, setTaskStatus] = useState(false)
    const [taskBackGroundColor, setTaskBackGroundColor] = useState<string>("bg-blue-300")

    function handleTaskNameEdit(event: any){
        setTaskname(event.target.value)
    }

    function handleEditMode(event: any){
        setEditMode(!isEditMode)
    }

    function handleTaskStatus(event: any){
        setTaskStatus(!taskStatus)
    }

    return (
        <Suspense fallback={<TaskContainerLoading />}>
            <div className="flex flex-row justify-between border-b-2 border-b-black my-2">
                {/* Task Status */}
                <div className="flex p-1">
                    <input 
                        type="checkbox"
                        onChange={handleTaskStatus}
                        checked={taskStatus}
                    />
                </div>
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
                        <p className="text-xs italic">
                            Created at 
                            {created_time.getHours().toString().padStart(2, "0")}
                            :{created_time.getMinutes().toString().padStart(2, "0")}
                            :{created_time.getSeconds().toString().padStart(2, "0")}</p>
                    </div>
                </div>

                {/* Action */}
                <div className="flex flex-row mb-1">
                    {/* Delete */}
                    {!isEditMode &&
                        <TaskActionButton>
                            <button
                                type="button" 
                                className="text-white text-center"
                                onClick={() => deleteFunct(id)}
                            >
                                <FiTrash2 color="#ef4340"/>
                            </button>
                        </TaskActionButton>
                    }

                    {/* Update */}
                    <TaskActionButton>
                        <button 
                            className="text-white"
                            type="button"
                            onClick={handleEditMode}
                        >{isEditMode ? <FiCheck color="#80c904"/> : <FiEdit color="#f6e683"/>}</button>
                    </TaskActionButton>
                    {isEditMode && (
                        <TaskActionButton>
                            <input
                                type="color"
                                className="flex-shrink flex align-middle"
                                onInput={event => {
                                    setTaskBackGroundColor(event.currentTarget.value)
                                }}
                            />
                        </TaskActionButton>
                    )}
                </div>
            </div>
        </Suspense>
    )
}

type TaskData = {
    'name': string,
    'id': number,
    'created_time': Date
}

const modeValue = [{
    'index': 0,
    'name': 'live'
}, {
    'index': 1,
    'name': 'db'
}]

export default function TodoAppPage({user_id}: {user_id: string | number}){
    // TODO: refactor all state
    const [taskList, setTaskList] = useState(Array<TaskData>)
    const [currentTask, setCurrentTask] = useState("")
    const [currentModeIndex, setCurrentModeIndex] = useState(0)
    const [isModalVisible, setModalVisibility] = useState(false)

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

    function handleCurrentTask(event: React.ChangeEvent<HTMLInputElement>){
        setCurrentTask(event.target.value)
    }

    function handleDeleteSingleTask(idx: any){
        const new_data = [...taskList]
        new_data.splice(idx, 1)
        setTaskList(new_data)
    }

    useEffect( () => {
        console.info(`data source changed to ${modeValue[currentModeIndex].name}`)
    }, [currentModeIndex])


    return (
        <div>
            {/* TODO: extract function and set it outside todo_page.tsx */}
            {/* Delete modal */}
            { isModalVisible &&
                <div className="fixed flex justify-center items-center z-[9999]"> 
                    <div className="bg-slate-100 p-5 rounded-md relative left-24 top-20">
                        {/* Modal title */}
                        <div>
                            <p className="font-semibold text-center">Confirmation Menu</p>
                        </div>
                        {/* Modal content */}
                        <div>
                            <p className="text-center">Are you sure ?</p>
                        </div>
                        {/* Action button */}
                        <div className="flex flex-row justify-between px-2">
                            {/* Cancel */}
                            <div className="bg-red-400 rounded p-1 mt-1">
                                <button type="button" onClick={() => {
                                    setModalVisibility(false)
                                }}>
                                    <p>Cancel</p>
                                </button>
                            </div>

                            {/* Yes */}
                            <div className="bg-green-300 rounded p-1 mt-1">
                                <button type="button" onClick={(event) => {
                                    setModalVisibility(false)
                                    setTaskList([])
                                }}>
                                    <p>Yes</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className={ !isModalVisible 
                ? "border-2 flex flex-col bg-[#FCEDDA] rounded-md"
                : "border-2 flex flex-col bg-[#FCEDDA] opacity-20"}>
                {/* Title */}
                <div className="my-2">
                    <p className="text-center font-semibold">Todo App</p>
                </div>

                {/* Upper action */}
                <div className="flex flex-row px-2 justify-center">
                    {/* textinput */}
                    <div className="ml-1 flex flex-col">
                        <input 
                            type="text" 
                            name="task-input" 
                            id="task-input"
                            placeholder="Enter your task" 
                            className="px-2 rounded py-1"
                            value={currentTask}
                            onInput={handleCurrentTask}
                            onKeyDown={e => {
                                if (e.code === "Enter"){
                                    setCurrentTask(currentTask)
                                    setTaskList(task => [...task, {
                                        'name': currentTask,
                                        'id': task.length,
                                        'created_time': new Date()
                                    }])
                                    setCurrentTask("")
                                }
                            }}
                        />
                        <React.Fragment>
                            <div className="flex flex-row mt-1 gap-2">
                                <div className="flex flex-col">
                                    <label htmlFor="start_date_input" className="text-xs">Start date</label>
                                    <input
                                        type="date"
                                        name="start_date"
                                        id="start_date_input"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="end_date_input" className="text-xs">End Date</label>
                                    <input
                                        type="date"
                                        name="end_date"
                                        id="end_date_input"
                                    />
                                </div>
                            </div>
                        </React.Fragment>
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
                    {/* Task Searchbar */}
                    <Searchbar placeholder="Search task here"/>
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
                        className="bg-slate-700 p-1 rounded text-red-400 disabled:opacity-60"
                        onClick={() => {
                            // Only open the modal if there's any task
                            if (taskList.length > 0){
                                setModalVisibility(true)
                            }
                        }}
                        disabled={taskList.length === 0}
                    > Delete All 
                    </button>   
                </div>
            </div>
        </div>
    )
}