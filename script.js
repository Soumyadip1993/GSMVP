// Show registration form
function showRegister() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("registration").style.display = "block";
}

// Show Student or Learner selection before login
function showUserTypeSelection() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("userTypeSelection").style.display = "block";
}

// Show login form based on selection
let userType;
function showLogin(type) {
    userType = type;
    document.getElementById("userTypeSelection").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Handle login
function login() {
    if (userType === "student") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("teamSection").style.display = "block";
    } else {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("learningModule").style.display = "block";
    }
}

// Navigate after registration
function nextStep() {
    let selectedUserType = document.getElementById("userType").value;

    if (selectedUserType === "student") {
        document.getElementById("registration").style.display = "none";
        document.getElementById("teamSection").style.display = "block";
    } else if (selectedUserType === "learner") {
        document.getElementById("registration").style.display = "none";
        document.getElementById("learningModule").style.display = "block";
    } else {
        alert("Please select an option.");
    }
}

// Team Formation - Create Team
function createTeam() {
    document.getElementById("teamSection").style.display = "none";
    document.getElementById("teamDetails").style.display = "block";
    document.getElementById("teamTitle").innerText = "Create a Team";
    document.getElementById("teamName").style.display = "block";
}

// Team Formation - Join Team
function joinTeam() {
    document.getElementById("teamSection").style.display = "none";
    document.getElementById("teamDetails").style.display = "block";
    document.getElementById("teamTitle").innerText = "Join a Team";
    document.getElementById("teamName").style.display = "none";
}

// Proceed to Progress Tracking
function proceedToDashboard() {
    document.getElementById("teamDetails").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

// Show "Coming Soon"
function showComingSoon() {
    alert("Coming Soon!");
}

// Sign Out Function
function signOut() {
    document.querySelectorAll(".container").forEach(div => div.style.display = "none");
    document.getElementById("welcomeScreen").style.display = "block";
}
