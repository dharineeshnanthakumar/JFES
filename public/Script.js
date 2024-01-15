function addEmployeeDetails(){
    document.getElementById("addEmployeeForm").style.display = "block";
    if (document.getElementById("removeEmployeeForm").style.display == "block")
    {
        collapseRemoveEmployee();
    }
}
function collapseAddEmployee(){
    document.getElementById("addEmployeeForm").style.display = "none" ;
}
function removeEmployeeDetails(){
    document.getElementById("removeEmployeeForm").style.display = "block";
    if (document.getElementById("addEmployeeForm").style.display == "block")
    {
        collapseAddEmployee();
    }
}
function collapseRemoveEmployee(){
    document.getElementById("removeEmployeeForm").style.display = "none";
}

