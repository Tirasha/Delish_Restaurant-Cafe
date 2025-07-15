//  JavaScript for Dropdown Clicks 
  
    const toggles = document.querySelectorAll('.dropdown-toggle');
    const dropdowns = document.querySelectorAll('.dropdown');

    toggles.forEach((toggle, index) => {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const currentDropdown = dropdowns[index];

        // Close all dropdowns
        dropdowns.forEach(drop => {
          if (drop !== currentDropdown) drop.classList.remove('show');
        });

        // Toggle current
        currentDropdown.classList.toggle('show');
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      dropdowns.forEach(drop => drop.classList.remove('show'));
    });
  


const gallery = document.getElementById('galleryGrid');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

leftBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: 300, behavior: 'smooth' });
});
