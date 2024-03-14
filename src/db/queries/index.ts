import pool from "../../config/db_config";

const queryHandler = async (text: string, params?: unknown[]) => {
  return await pool.query(text, params);
};

export default queryHandler;
