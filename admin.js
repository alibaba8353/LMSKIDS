// Example of how to use localStorage for storing data
function loadData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Manage Users
function manageUsers() {
    const users = loadData('users');
    let output = "<h3>Users List</h3><ul>";
    
    if (users.length > 0) {
        users.forEach(user => {
            output += `
                <li>
                    ${user.username} (${user.role}) 
                    <button onclick="editUser('${user.email}')">Edit</button>
                    <button onclick="deleteUser('${user.email}')">Delete</button>
                </li>
            `;
        });
    } else {
        output += "<li>No users found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Edit User (example function)
function editUser(email) {
    alert('Editing user: ' + email);
    // You can implement a modal or another form to edit user data here
}

// Delete User
function deleteUser(email) {
    let users = loadData('users');
    users = users.filter(user => user.email !== email);
    saveData('users', users);
    manageUsers(); // Refresh the user list
}

// View Reports
function viewReports() {
    const reports = loadData('reports');
    let output = "<h3>Reports</h3><ul>";
    
    if (reports.length > 0) {
        reports.forEach(report => {
            output += `<li>${report.title} - ${report.date}</li>`;
        });
    } else {
        output += "<li>No reports available</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Manage Classes
function manageClasses() {
    const classes = loadData('classes');
    let output = "<h3>Classes List</h3><ul>";
    
    if (classes.length > 0) {
        classes.forEach(classItem => {
            output += `
                <li>
                    ${classItem.name} (Grade: ${classItem.grade}) 
                    <button onclick="editClass('${classItem.id}')">Edit</button>
                    <button onclick="deleteClass('${classItem.id}')">Delete</button>
                </li>
            `;
        });
    } else {
        output += "<li>No classes found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Edit Class
function editClass(classId) {
    alert('Editing class with ID: ' + classId);
    // Implement class editing functionality here (could be a modal/form to update the class)
}

// Delete Class
function deleteClass(classId) {
    let classes = loadData('classes');
    classes = classes.filter(classItem => classItem.id !== classId);
    saveData('classes', classes);
    manageClasses(); // Refresh the class list
}

// Manage Assignments
function manageAssignments() {
    const assignments = loadData('assignments');
    let output = "<h3>Assignments List</h3><ul>";
    
    if (assignments.length > 0) {
        assignments.forEach(assignment => {
            output += `
                <li>
                    ${assignment.title} (Due: ${assignment.dueDate}) 
                    <button onclick="editAssignment('${assignment.id}')">Edit</button>
                    <button onclick="deleteAssignment('${assignment.id}')">Delete</button>
                </li>
            `;
        });
    } else {
        output += "<li>No assignments found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Edit Assignment
function editAssignment(assignmentId) {
    alert('Editing assignment with ID: ' + assignmentId);
    // Implement assignment editing functionality here
}

// Delete Assignment
function deleteAssignment(assignmentId) {
    let assignments = loadData('assignments');
    assignments = assignments.filter(assignment => assignment.id !== assignmentId);
    saveData('assignments', assignments);
    manageAssignments(); // Refresh the assignments list
}

// Manage Teachers
function manageTeachers() {
    const teachers = loadData('teachers');
    let output = "<h3>Teachers List</h3><ul>";
    
    if (teachers.length > 0) {
        teachers.forEach(teacher => {
            output += `
                <li>
                    ${teacher.name} (${teacher.subject}) 
                    <button onclick="editTeacher('${teacher.id}')">Edit</button>
                    <button onclick="deleteTeacher('${teacher.id}')">Delete</button>
                </li>
            `;
        });
    } else {
        output += "<li>No teachers found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Edit Teacher
function editTeacher(teacherId) {
    alert('Editing teacher with ID: ' + teacherId);
    // Implement teacher editing functionality here
}

// Delete Teacher
function deleteTeacher(teacherId) {
    let teachers = loadData('teachers');
    teachers = teachers.filter(teacher => teacher.id !== teacherId);
    saveData('teachers', teachers);
    manageTeachers(); // Refresh the teacher list
}

// Manage Students
function manageStudents() {
    const students = loadData('students');
    let output = "<h3>Students List</h3><ul>";
    
    if (students.length > 0) {
        students.forEach(student => {
            output += `
                <li>
                    ${student.name} (Grade: ${student.grade}) 
                    <button onclick="editStudent('${student.id}')">Edit</button>
                    <button onclick="deleteStudent('${student.id}')">Delete</button>
                </li>
            `;
        });
    } else {
        output += "<li>No students found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Edit Student
function editStudent(studentId) {
    alert('Editing student with ID: ' + studentId);
    // Implement student editing functionality here
}

// Delete Student
function deleteStudent(studentId) {
    let students = loadData('students');
    students = students.filter(student => student.id !== studentId);
    saveData('students', students);
    manageStudents(); // Refresh the student list
}

// Manage Parents
function manageParents() {
    const parents = loadData('parents');
    let output = "<h3>Parents List</h3><ul>";
    
    if (parents.length > 0) {
        parents.forEach(parent => {
            output += `
                <li>
                    ${parent.name} (Child: ${parent.childName}) 
                    <button onclick="editParent('${parent.id}')">Edit</button>
                    <button onclick="deleteParent('${parent.id}')">Delete</button>
                </li>
            `;
        });
    } else {
        output += "<li>No parents found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Edit Parent
function editParent(parentId) {
    alert('Editing parent with ID: ' + parentId);
    // Implement parent editing functionality here
}

// Delete Parent
function deleteParent(parentId) {
    let parents = loadData('parents');
    parents = parents.filter(parent => parent.id !== parentId);
    saveData('parents', parents);
    manageParents(); // Refresh the parent list
}
