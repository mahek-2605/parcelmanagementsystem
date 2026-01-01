// Initialize admin dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeAdminDashboard();
});

// Initialize admin dashboard functionality
function initializeAdminDashboard() {
    setupSidebarNavigation();
    setupNotificationButton();
    setupLogoutButton();
}

// Setup sidebar navigation click handlers
function setupSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    sidebarLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Handle navigation based on link position
            handleSidebarNavigation(index);
        });
    });
    
    // Set first link as active by default
    if (sidebarLinks.length > 0) {
        sidebarLinks[0].classList.add('active');
    }
}

// Handle sidebar navigation routing
function handleSidebarNavigation(linkIndex) {
    const navigationMap = {
        0: loadDashboardOverview,
        1: loadTotalParcels,
        2: loadDeliveredParcels,
        3: loadManageOffices,
        4: loadViewSupervisors,
        5: loadEditSupervisors,
        6: loadAssignRoles,
        7: loadManageStudents,
        8: loadEditStudents,
        9: loadMapStudents,
        10: loadStudentHistory,
        11: loadParcelsManagement,
        12: loadSearchParcels,
        13: loadTrackStatus,
        14: loadUpdateStatus,
        15: loadMonitorActivities,
        16: loadSupervisorLogs,
        17: loadDeliveryTimelines,
        18: loadGenerateReports,
        19: loadNotificationsCenter,
        20: loadCustomNotifications,
        21: loadAutoNotifications,
        22: loadReports,
        23: loadDailyReports,
        24: loadExportReports,
        25: handleAdminLogout
    };
    
    if (navigationMap[linkIndex]) {
        navigationMap[linkIndex]();
    }
}

// Load functions for different admin sections
function loadDashboardOverview() {
    console.log('Loading Dashboard Overview');
    // Already displayed on page load
}

function loadTotalParcels() {
    console.log('Loading Total Parcels');
}

function loadDeliveredParcels() {
    console.log('Loading Delivered Parcels');
}

function loadManageOffices() {
    console.log('Loading Manage Offices');
}

function loadViewSupervisors() {
    console.log('Loading View Supervisors');
}

function loadEditSupervisors() {
    console.log('Loading Edit Supervisors');
}

function loadAssignRoles() {
    console.log('Loading Assign Roles');
}

function loadManageStudents() {
    console.log('Loading Manage Students');
}

function loadEditStudents() {
    console.log('Loading Edit Students');
}

function loadMapStudents() {
    console.log('Loading Map Students to Hostels');
}

function loadStudentHistory() {
    console.log('Loading Student Parcel History');
}

function loadParcelsManagement() {
    console.log('Loading Parcels Management');
}

function loadSearchParcels() {
    console.log('Loading Search Parcels');
}

function loadTrackStatus() {
    console.log('Loading Track Status');
}

function loadUpdateStatus() {
    console.log('Loading Update Status');
}

function loadMonitorActivities() {
    console.log('Loading Monitor Activities');
}

function loadSupervisorLogs() {
    console.log('Loading Supervisor Logs');
}

function loadDeliveryTimelines() {
    console.log('Loading Delivery Timelines');
}

function loadGenerateReports() {
    console.log('Loading Generate Reports');
}

function loadNotificationsCenter() {
    console.log('Loading Notifications Center');
}

function loadCustomNotifications() {
    console.log('Loading Custom Notifications');
}

function loadAutoNotifications() {
    console.log('Loading Auto Notifications');
}

function loadReports() {
    console.log('Loading Reports');
}

function loadDailyReports() {
    console.log('Loading Daily Reports');
}

function loadExportReports() {
    console.log('Loading Export Reports');
}

// Setup notification button functionality
function setupNotificationButton() {
    const notificationButton = document.querySelector('button[title="Notifications"]');
    
    if (notificationButton) {
        notificationButton.addEventListener('click', function() {
            showNotificationMenu();
        });
    }
}

// Show notification menu
function showNotificationMenu() {
    console.log('Showing notifications menu');
    // Add notification menu functionality here
}

// Setup logout button functionality
function setupLogoutButton() {
    const logoutLink = document.querySelector('a[href="login_page.html"]');
    
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            handleAdminLogout();
        });
    }
}

// Handle admin logout
function handleAdminLogout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'login_page.html';
    }
}

// Navigate to home
function goToHome() {
    window.location.href = 'homepage.html';
}

// Get current timestamp for activity display
function getCurrentTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString();
}

// Add activity log entry
function addActivityLog(description) {
    const activityList = document.querySelector('.divide-y ul');
    if (!activityList) return;
    
    const newActivity = document.createElement('li');
    newActivity.className = 'py-3 flex items-center justify-between';
    newActivity.innerHTML = `
        <span>${description}</span>
        <span class="text-xs text-gray-400">${getCurrentTimestamp()}</span>
    `;
    
    // Insert at the beginning of the list
    const firstItem = activityList.querySelector('li');
    if (firstItem) {
        activityList.insertBefore(newActivity, firstItem);
    } else {
        activityList.appendChild(newActivity);
    }
}
