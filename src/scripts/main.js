const toggleNine = document.getElementById('toggleNine');
const customIconContainer = document.getElementById('customIconContainer');
const offIcon = document.getElementById('offIcon');
const onIcon = document.getElementById('onIcon');

toggleNine.addEventListener('change', function () {
    if (toggleNine.checked) {
        // Checkbox is checked, show the on state icon
        customIconContainer.classList.add('translate-x-full');
        offIcon.classList.add('hidden');
        onIcon.classList.remove('hidden');
    } else {
        // Checkbox is unchecked, show the off state icon
        customIconContainer.classList.remove('translate-x-full');
        onIcon.classList.add('hidden');
        offIcon.classList.remove('hidden');
    }
});

// scroll down button
document.getElementById('scrollButton').addEventListener('click', function() {
    // Scroll to a specific section or element on your page
    document.getElementById('targetSection').scrollIntoView({
        behavior: 'smooth'
    });
});
