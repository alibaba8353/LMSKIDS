// Example of how to use localStorage for storing data
function loadData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
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

// Create Assignment
function createAssignment() {
    const assignmentTitle = prompt("Enter the assignment title:");
    const assignmentDueDate = prompt("Enter the assignment due date:");
    
    if (assignmentTitle && assignmentDueDate) {
        const assignments = loadData('assignments');
        const newAssignment = {
            id: new Date().getTime(),
            title: assignmentTitle,
            dueDate: assignmentDueDate,
            graded: false
        };
        
        assignments.push(newAssignment);
        saveData('assignments', assignments);
        alert("Assignment created successfully!");
    } else {
        alert("Assignment title and due date are required.");
    }
}

// Grade Assignments
function gradeAssignments() {
    const assignments = loadData('assignments');
    let output = "<h3>Assignments to Grade</h3><ul>";
    
    if (assignments.length > 0) {
        assignments.forEach(assignment => {
            if (!assignment.graded) {
                output += `
                    <li>
                        ${assignment.title} (Due: ${assignment.dueDate})
                        <button onclick="gradeAssignment('${assignment.id}')">Grade</button>
                    </li>
                `;
            }
        });
    } else {
        output += "<li>No assignments found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// Grade Assignment
function gradeAssignment(assignmentId) {
    const grade = prompt("Enter grade for the assignment (e.g., A, B, C):");
    
    if (grade) {
        let assignments = loadData('assignments');
        assignments = assignments.map(assignment => {
            if (assignment.id == assignmentId) {
                assignment.grade = grade;
                assignment.graded = true;
            }
            return assignment;
        });
        saveData('assignments', assignments);
        alert("Assignment graded successfully!");
        gradeAssignments(); // Refresh the assignments list
    } else {
        alert("Grade is required.");
    }
}

// View Student Progress
function viewStudentProgress() {
    const students = loadData('students');
    let output = "<h3>Student Progress</h3><ul>";
    
    if (students.length > 0) {
        students.forEach(student => {
            output += `
                <li>
                    ${student.name} (Grade: ${student.grade})
                    <button onclick="viewStudentReport('${student.id}')">View Report</button>
                </li>
            `;
        });
    } else {
        output += "<li>No students found</li>";
    }
    output += "</ul>";
    
    document.getElementById('data-display').innerHTML = output;
}

// View Student Report
function viewStudentReport(studentId) {
    const students = loadData('students');
    const student = students.find(student => student.id == studentId);
    
    if (student) {
        let output = `<h3>Report for ${student.name}</h3>`;
        output += `<p>Grade: ${student.grade}</p>`;
        output += `<p>Assignments: ${student.assignments ? student.assignments.join(', ') : "No assignments yet"}</p>`;
        
        document.getElementById('data-display').innerHTML = output;
    } else {
        alert("Student not found.");
    }
}
