import mysql from "mysql2"
import dotenv from "dotenv"
import { name } from "ejs"

dotenv.config()

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST ,
    user : process.env.MYSQL_USER , 
    password : process.env.MYSQL_PASSWORD , 
    database : process.env.MYSQL_DATABASE 
}).promise()

export async function addEmployee(name,region)
{
    const [result] = await pool.query(`
    INSERT INTO EmployeeList(name,region)
    VALUES(?,?)
    `,[name,region])
    const id = result.insertId
    return id
}

export async function removeEmployee(name)
{
    await pool.query(`
    DELETE FROM EmployeeList
    WHERE name =?
    `,[name])
}

export async function getEmployees()
{
    const [result] = await pool.query(`
    SELECT * FROM EmployeeList
   `,)
    return result
}

export async function totalEmployees()
{
    const result = await pool.query(`
    SELECT MAX(id)
    FROM EmployeeList
    `)
    return result.id
}

export async function deleteEmployee(name)
{
    await pool.query(`
    DELETE FROM EmployeeList
    WHERE name = ?
    `,[name])
}


