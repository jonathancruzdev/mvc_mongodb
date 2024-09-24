import tasksRouter from "./tasksRouter.js";

const routerAPI = ( app) => {
    app.use('/tasks', tasksRouter);
}

export default routerAPI;