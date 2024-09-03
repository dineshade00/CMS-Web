document.addEventListener('DOMContentLoaded', function () {
    const employeeList = document.querySelector('#employeeList tbody');
    const managerList = document.querySelector('#managerList tbody');

    // Add Employee
    document.getElementById('addEmployeeForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const empName = document.getElementById('empName').value;
        const empEmail = document.getElementById('empEmail').value;
        const empPosition = document.getElementById('empPosition').value;

        const newRow = employeeList.insertRow();
        newRow.insertCell(0).innerText = employeeList.rows.length; // Auto-increment ID
        newRow.insertCell(1).innerText = empName;
        newRow.insertCell(2).innerText = empEmail;
        newRow.insertCell(3).innerText = empPosition;
        const actionCell = newRow.insertCell(4);
        actionCell.innerHTML = `<button class="btn btn-warning btn-sm">Update</button> <button class="btn btn-danger btn-sm">Delete</button>`;

        this.reset();
    });

    // Add Manager
    document.getElementById('addManagerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const managerName = document.getElementById('managerName').value;
        const managerEmail = document.getElementById('managerEmail').value;
        const managerDepartment = document.getElementById('managerDepartment').value;

        const newRow = managerList.insertRow();
        newRow.insertCell(0).innerText = managerList.rows.length; // Auto-increment ID
        newRow.insertCell(1).innerText = managerName;
        newRow.insertCell(2).innerText = managerEmail;
        newRow.insertCell(3).innerText = managerDepartment;
        const actionCell = newRow.insertCell(4);
        actionCell.innerHTML = `<button class="btn btn-warning btn-sm">Update</button> <button class="btn btn-danger btn-sm">Delete</button>`;

        this.reset();
    });

    // Update Employee
    document.getElementById('updateEmployeeForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const updateEmpId = document.getElementById('updateEmpId').value;
        const updateEmpName = document.getElementById('updateEmpName').value;
        const updateEmpEmail = document.getElementById('updateEmpEmail').value;
        const updateEmpPosition = document.getElementById('updateEmpPosition').value;

        const row = employeeList.rows[updateEmpId - 1];
        if (row) {
            row.cells[1].innerText = updateEmpName;
            row.cells[2].innerText = updateEmpEmail;
            row.cells[3].innerText = updateEmpPosition;
        }
    });

    // Update Manager
    document.getElementById('updateManagerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const updateManagerId = document.getElementById('updateManagerId').value;
        const updateManagerName = document.getElementById('updateManagerName').value;
        const updateManagerEmail = document.getElementById('updateManagerEmail').value;
        const updateManagerDepartment = document.getElementById('updateManagerDepartment').value;

        const row = managerList.rows[updateManagerId - 1];
        if (row) {
            row.cells[1].innerText = updateManagerName;
            row.cells[2].innerText = updateManagerEmail;
            row.cells[3].innerText = updateManagerDepartment;
        }
    });

    // Delete Employee
    document.getElementById('deleteEmployeeForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const deleteEmpId = document.getElementById('deleteEmpId').value;
        const row = employeeList.rows[deleteEmpId - 1];
        if (row) {
            employeeList.deleteRow(deleteEmpId - 1);
        }
    });

    // Delete Manager
    document.getElementById('deleteManagerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const deleteManagerId = document.getElementById('deleteManagerId').value;
        const row = managerList.rows[deleteManagerId - 1];
        if (row) {
            managerList.deleteRow(deleteManagerId - 1);
        }
    });
});
