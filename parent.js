// Example of how to use localStorage for storing data
function loadData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// View Child's Progress
function viewChildProgress() {
    const childId = prompt("Enter your child's ID:");
    const students = loadData('students');
    
    const child = students.find(student => student.id === childId);
    
    if (child) {
        let output = `<h3>Progress Report for ${child.name}</h3>`;
        output += `<p>Grade: ${child.grade}</p>`;
        output += `<p>Assignments: ${child.assignments ? child.assignments.join(', ') : "No assignments yet"}</p>`;
        
        document.getElementById('data-display').innerHTML = output;
    } else {
        alert("Child not found.");
    }
}

// Communicate with Teacher
function communicateTeacher() {
    const teacherName = prompt("Enter the teacher's name you want to communicate with:");
    if (teacherName) {
        let output = `<h3>Message to Teacher: ${teacherName}</h3>`;
        output += "<textarea placeholder='Write your message here...'></textarea><br>";
        output += "<button onclick='sendMessage()'>Send Message</button>";
        document.getElementById('data-display').innerHTML = output;
    } else {
        alert("Please enter a teacher's name.");
    }
}

// Send Message to Teacher (for demonstration)
function sendMessage() {
    alert("Your message has been sent to the teacher.");
    // In a real app, this would involve sending the message via an API.
    document.getElementById('data-display').innerHTML = "<p>Message sent successfully!</p>";
}

// Track Attendance
function trackAttendance() {
    const childId = prompt("Enter your child's ID to track attendance:");
    const attendanceData = loadData('attendance');
    
    const childAttendance = attendanceData.filter(attendance => attendance.studentId === childId);
    
    if (childAttendance.length > 0) {
        let output = "<h3>Attendance Record:</h3><ul>";
        childAttendance.forEach(record => {
            output += `
                <li>
                    Date: ${record.date}, Status: ${record.status}
                </li>
            `;
        });
        output += "</ul>";
        document.getElementById('data-display').innerHTML = output;
    } else {
        document.getElementById('data-display').innerHTML = "<p>No attendance records found for this child.</p>";
    }
}
