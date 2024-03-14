import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "nirmal",
  database: "postgres",
  host: "localHost",
  port: 5432,
});

pool.on("error", (err) => {
  console.groupCollapsed(err);
});

pool.on("connect", () => {
  console.groupCollapsed("database connected");
});

export default pool;
