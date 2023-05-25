// Fetch job listings from the server and display them
async function fetchJobListings() {
    try {
      const response = await fetch('https://api.example.com/job-listings');
      const data = await response.json();
      const jobList = document.querySelector('.job-list');
  
      // Clear existing job listings
      jobList.innerHTML = '';
  
      // Loop through the job listings data and create HTML elements for each listing
      data.forEach(job => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <p>${job.location}</p>
          <button class="apply-btn">Apply</button>
          <div class="description">${job.description}</div>
        `;
  
        jobList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching job listings:', error);
    }
  }
  
  // Apply for a job
  async function applyForJob(jobTitle) {
    try {
      const response = await fetch('https://api.example.com/apply', {
        method: 'POST',
        body: JSON.stringify({ jobTitle }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Application submitted successfully:', data);
      // Perform any necessary action after successful application submission
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  }
  
  // Event listener for applying to a job
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('apply-btn')) {
      const jobTitle = event.target.parentNode.querySelector('h3').textContent;
      applyForJob(jobTitle);
    }
  });
  
  // Fetch job listings when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    fetchJobListings();
  });
  