document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const mobileMenuItems = document.getElementById('mobileMenuItems');

    toggleButton.addEventListener('click', function () {
        mobileMenuItems.classList.toggle('hidden');
    });
});