// Initialize default tab on page load
document.addEventListener('DOMContentLoaded', () => {
    showTab('add');
});

// Tab switching logic
function showTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    const content = document.getElementById('tab-content');
    
    if (tab === 'add') {
        renderAddParcelTab(content);
    } else if (tab === 'update') {
        renderUpdateParcelTab(content);
    }
}

// Render Add Parcel Tab
function renderAddParcelTab(contentDiv) {
    contentDiv.innerHTML = `
        <h2 class="text-xl font-bold mb-4 text-yellow-700">Add Parcel</h2>
        <form id="addParcelForm" class="space-y-4 mb-4">
            <div>
                <label class="block font-medium mb-1">Order ID</label>
                <input type="text" id="orderId" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter Order ID">
            </div>
            <div>
                <label class="block font-medium mb-1">Hostel Name</label>
                <input type="text" id="hostelName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter Hostel Name">
            </div>
            <div>
                <label class="block font-medium mb-1">Date</label>
                <input type="date" id="parcelDate" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
            </div>
            <div>
                <label class="block font-medium mb-1">Student Mobile Number</label>
                <input type="tel" id="studentMobile" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter Mobile Number">
            </div>
            <button type="button" onclick="addParcel()" class="w-full px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition">Add Parcel</button>
        </form>
        <div id="addParcelResult" class="mt-4"></div>
    `;
}

// Render Update Parcel Tab
function renderUpdateParcelTab(contentDiv) {
    contentDiv.innerHTML = `
        <h2 class="text-xl font-bold mb-4 text-yellow-700">Update Parcel Status</h2>
        <form id="updateParcelForm" class="space-y-4 mb-4">
            <div>
                <label class="block font-medium mb-1">Order ID</label>
                <input type="text" id="updateOrderId" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter Order ID">
            </div>
            <div>
                <label class="block font-medium mb-1">New Status</label>
                <select id="newStatus" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="">Select Status</option>
                    <option value="Received at Post Office">Received at Post Office</option>
                    <option value="Ready for Pickup">Ready for Pickup</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>
            <button type="button" onclick="updateParcelStatus()" class="w-full px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition">Update Status</button>
        </form>
        <div id="updateParcelResult" class="mt-4"></div>
    `;
}

// Add Parcel Function
function addParcel() {
    const orderId = document.getElementById('orderId').value.trim();
    const hostelName = document.getElementById('hostelName').value.trim();
    const parcelDate = document.getElementById('parcelDate').value;
    const studentMobile = document.getElementById('studentMobile').value.trim();
    const result = document.getElementById('addParcelResult');
    
    if (!orderId || !hostelName || !parcelDate || !studentMobile) {
        result.innerHTML = "<span class='text-red-600'>Please fill all fields.</span>";
        return;
    }
    
    result.innerHTML = `<div class='p-4 bg-yellow-50 rounded-lg'>Parcel <b>${orderId}</b> added for hostel <b>${hostelName}</b> on <b>${parcelDate}</b>.</div>`;
}

// Update Parcel Status Function
function updateParcelStatus() {
    const orderId = document.getElementById('updateOrderId').value.trim();
    const newStatus = document.getElementById('newStatus').value;
    const result = document.getElementById('updateParcelResult');
    
    if (!orderId || !newStatus) {
        result.innerHTML = "<span class='text-red-600'>Please fill all fields.</span>";
        return;
    }
    
    result.innerHTML = `<div class='p-4 bg-orange-50 rounded-lg'>Status for <b>${orderId}</b> updated to <b>${newStatus}</b>.</div>`;
}

// Logout function
function handleLogoutSupervisorPO() {
    window.location.href = 'index.html';
}
