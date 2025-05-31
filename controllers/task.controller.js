const Task= require('../models/task.model');

const createTask= async(req, res)=>{
    try {

        const {title, description}= req.body;

        const newTask= new Task({
            title,
            description,
            user: req.user.id
        });

        await newTask.save();
        res.status(200).json({message: 'Task created successfully', task:newTask});
        
    } catch (error) {
        return res.status({message: 'Internal server error'});
    }
};

const getTasks= async(req, res)=>{
    try {
        if(req.user.role == 'Admin'){
            const tasks= await Task.find().populate('user', 'name email');
            res.status(200).json({message: 'All tasks fetched successfully', tasks:tasks});
        }
        else {
            const tasks= await Task.find({user: req.user.id});
                return res.status(200).json({message: 'Your tasks fetched successfully', tasks:tasks});
            }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

const updateTasks= async(req, res)=>{
    try {
        const {title, description}= req.body;
        const {id}= req.params;

        const task= await Task.findById(id);
        if(!task){
            return res.status(404).json({message: 'Task not found'});
        }

        if(req.user.role !== 'Admin' && task.user.toString() !== req.user.id){
            return res.status(403).json({message: 'Access denied. You can update only your own tasks'});
        }

        const updates= {};

        if(title) updates.title= title;
        if(description) updates.description= description;

        const updateTasks= await Task.findByIdAndUpdate(id, updates, {new:true});
        res.status(200).json({message: 'Task updated successfully', task:updateTasks});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

const deleteTasks= async(req, res)=>{
    try {
        const {id}= req.params;

        const task= await Task.findById(id);
        if(!task){
            return res.status(404).json({message: 'Task not found'});
        }

        if(req.user.role !== 'Admin' && task.user.toString() !== req.user.id){
            return res.status(403).json({message: 'Access denied. You can delete only your own tasks'});
        }

        await Task.findByIdAndDelete(id);
        res.status(200).json({message: 'Task deleted successfully'});
        
    } catch (error) {
        return res.status(500).json({message: 'Intrnal server error'});
    }
};


module.exports= {createTask, getTasks, updateTasks, deleteTasks};