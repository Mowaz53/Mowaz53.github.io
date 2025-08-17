function loadFragment(url, targetId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const targetElement = document.getElementById(targetId);
      console.log(targetId, targetElement)

      if (targetElement) {
        targetElement.innerHTML = data;
        targetElement.dispatchEvent(new Event('fragmentLoaded'));
      } else {
        console.error(`Element with ID '${targetId}' not found.`);
      }
    })
    .catch(error => console.error('Error loading fragment:', error));
}

// Usage example:
document.addEventListener('DOMContentLoaded', function () {
  loadFragment('./components/about.html', 'about');
  loadFragment('./components/work-experience.html', 'work-experience'); // Update filename if needed
  loadFragment('./components/education.html', 'education');
  loadFragment('./components/projects.html', 'projects'); // ✅ should be "projects"
  loadFragment('./components/research-experience.html', 'research-experience'); // ✅ match ID
  loadFragment('./components/cv.html', 'cv');

});


