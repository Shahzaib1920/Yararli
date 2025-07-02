function filterHeadings() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const hackTitles = document.querySelectorAll('.hack');
  
    hackTitles.forEach(hack => {
      const h4 = hack.querySelector('h4');
      if (h4 && h4.textContent.toLowerCase().includes(filter)) {
        hack.style.display = '';
      } else {
        hack.style.display = 'none';
      }
    });
  }
  