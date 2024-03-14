export const getTaskListQuery = "SELECT * FROM tasks WHERE user_id=$1";
export const createTaskQuery = `INSERT INTO tasks (
    title,
    description,
    due_Date,
    priority,
    status,
    category_name,
    color) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING user_id`;
export const updateTaskQuery = `UPDATE tasks SET 
 title=$2,
 description=$3,
 due_Date=$4,
 priority=$5,
 status=$6,
 category_name=$7,
 color=$8 WHERE task_id=$1`;
export const deleteTaskQuery = "DELETE FROM tasks WHERE task_id=$1";
