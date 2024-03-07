document.getElementById('jobApplicationForm').addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const isValid = validateForm(form);

    if (!isValid) {
        console.error("Form is invalid.");
        // providing feedback to the user if the invalid form
        return;
    }

    console.log("Form is valid. Processing data...");
    const applicationData = extractFormData(form);
    await saveApplicationData(applicationData);

    form.reset(); // Clear form after successful submission
    alert("Application submitted successfully!"); // Provide user feedback
}

// to stimulate the form data validation
function validateForm(form) {
        //For demonstration purposes, returns true, this has not been implemented as not required.
    return true;
}

// Extracts data from form and returns it as an object
function extractFormData(form) {
    const formData = new FormData(form);
    const application = {};
    for (const [key, value] of formData.entries()) {
        application[key] = value;
    }
    return application;
}

//the following has not been implemented as not part of the requirements

// Simulates saving application data, e.g., to server or local storage
async function saveApplicationData(application) {
    // asynchronous operation
    console.log("Storing application data:", application);
    applications.push(application); // We are sssuming 'applications' is already declared
    // In a real application we will replace this with an API call to save the data
}

document.getElementById('viewApplicationsButton').addEventListener('click', displayApplicationsTable);

function displayApplicationsTable() {
    const tableHtml = generateApplicationsTableHtml(applications);
    const tableContainer = document.getElementById('applicationTable');
    tableContainer.innerHTML = tableHtml;
    tableContainer.style.display = 'block';
}

// Generates HTML for the applications table
function generateApplicationsTableHtml(applications) {
    let tableHtml = `<table>
        <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Resume</th>
            <th>Cover Letter</th>
        </tr>`;

    applications.forEach(app => {
        tableHtml += `<tr>
            <td>${app.firstName} ${app.lastName}</td>
            <td>${app.emailAddress}</td>
            <td>${app.phoneNumber}</td>
            <td>${app.street}, ${app.city}, ${app.state}, ${app.zipCode}</td>
            <td>ResumeFile.pdf</td> <!-- Simplified for demonstration -->
            <td>${app.coverLetter}</td>
        </tr>`;
    });

    tableHtml += "</table>";
    return tableHtml;
}
