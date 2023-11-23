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
  // loadFragment('./components/sidebar.html', 'sidebar');
  loadFragment('./components/about.html', 'about');
  loadFragment('./components/experience.html', 'experience');
  loadFragment('./components/education.html', 'education');
  loadFragment('./components/research.html', 'research project');
  loadFragment('./components/cv.html', 'cv');
  loadFragment('./components/contact.html', 'contact');

});


