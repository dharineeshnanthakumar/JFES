import express, { urlencoded }  from "express"
import { addEmployee , removeEmployee , getEmployees, totalEmployees , deleteEmployee} from "./database.js"
const app = express()

app.use(express.urlencoded({extended : true}))
app.set("view engine","ejs")

app.get("/MainPortal",(req,res) =>{
    res.render("MainPortal.ejs")
})

app.get("/MainPortal/Logsheet",async(req,res) =>{
    const employee = await getEmployees()
    res.render("Logsheet.ejs",{
        employee
    })
})

app.get("/MainPortal/SalaryPage",(req,res) =>{
    res.render("SalaryPage.ejs")
})

app.get("/MainPortal/EmployeeList", async (req,res) =>{
    const employee = await getEmployees()
    res.render("EmployeeList.ejs",{
        employee
    })
})

app.post("/removeEmployee", (req,res) =>{
    const data = req.body
    deleteEmployee(data.name)
    res.redirect("/MainPortal/EmployeeList")
})

app.post("/addEmployee" ,(req,res) =>{
    const data = req.body
    addEmployee(data.name,data.region)
    res.redirect("/MainPortal/EmployeeList")
})

app.post("/submitLog",(req,res)=>{
    console.log("Submitted Succesfully")
})

app.use(express.static("public"))


app.listen(8080)    