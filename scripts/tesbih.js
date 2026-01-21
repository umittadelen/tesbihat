let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');
const counterSidebar = document.getElementById('counterSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const positionBtn = document.getElementById('positionBtn');

// Load counter from localStorage
const savedCounter = localStorage.getItem('tesbihatCounter');
if (savedCounter) {
    counter = parseInt(savedCounter);
    counterDisplay.textContent = String(counter).padStart(2, '0');
} else {
    counterDisplay.textContent = '00';
}

// Load sidebar position from localStorage
const savedPosition = localStorage.getItem('sidebarPosition');
if (savedPosition === 'left') {
    counterSidebar.classList.add('left');
    toggleBtn.classList.add('left');
}

// Toggle sidebar open/close
toggleBtn.addEventListener('click', () => {
    counterSidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('open');
});

// Close button
closeBtn.addEventListener('click', () => {
    counterSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener('click', () => {
    counterSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
});

// Toggle sidebar position (left/right)
positionBtn.addEventListener('click', () => {
    counterSidebar.classList.toggle('left');
    toggleBtn.classList.toggle('left');
    
    // Save position to localStorage
    if (counterSidebar.classList.contains('left')) {
        localStorage.setItem('sidebarPosition', 'left');
    } else {
        localStorage.setItem('sidebarPosition', 'right');
    }
});

// Increment functions
function updateCounter(value) {
    counter += value;
    if (counter < 0) counter = 0;
    counterDisplay.textContent = String(counter).padStart(2, '0');
    localStorage.setItem('tesbihatCounter', counter);
}

document.getElementById('increment1').addEventListener('click', () => updateCounter(1));
document.getElementById('increment3').addEventListener('click', () => updateCounter(3));
document.getElementById('increment4').addEventListener('click', () => updateCounter(4));
document.getElementById('reset').addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = '00';
    localStorage.setItem('tesbihatCounter', counter);
});