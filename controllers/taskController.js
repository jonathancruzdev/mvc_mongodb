import taskModel from "../models/tasksModel.js"

const createTask = async (req, res) =>{
    const { name } = req.body;
    try {
        const task = new taskModel({ name, completed: false});

        const result = await task.save();
    
        res.status(200).json({ msg: "success", data: result});
    } catch (error) {
        res.status(500).json({ msg: "error", data: []});
        console.error(error);
        
    }
}

const getTasksById = async (req, res) =>{

    const { id } = req.params;
    try {
        const tasks = await taskModel.findById(id);
        res.status(200).json({ msg: "success", data: tasks })

    } catch (error) {
        res.status(500).json({ msg: "error", data: [] })
        console.error(error);
        
    }
}

const getTasks = async (req, res) =>{
    try {
        const tasks = await taskModel.find();
        res.status(200).json({ msg: "success", data: tasks })

    } catch (error) {
        res.status(500).json({ msg: "error", data: [] })
        console.error(error);
        
    }
}

const updateTasks = (req, res) =>{
    
}

const deleteTasksById = async (req, res) =>{
    const { id } = req.params;
    try {
        const tasks = await taskModel.findByIdAndDelete(id);
        res.status(200).json({ msg: "success", data: tasks })

    } catch (error) {
        res.status(500).json({ msg: "error", data: [] })
        console.error(error);
        
    }
}

export { createTask, getTasksById, getTasks, updateTasks, deleteTasksById}