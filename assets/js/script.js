// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton');
//     const mobileMenuItems = document.getElementById('mobileMenuItems');
//
//     toggleButton.addEventListener('click', function () {
//         mobileMenuItems.classList.toggle('hidden');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const desktopMenuItems = document.getElementById('desktopMenuItems');
    const mobileMenuItems = document.getElementById('mobileMenuItems');

    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the document
        // desktopMenuItems.classList.toggle('hidden');
        mobileMenuItems.classList.toggle('hidden');
    });

    // Hide menus when clicking outside
    document.addEventListener('click', function () {
        desktopMenuItems.classList.add('hidden');
        mobileMenuItems.classList.add('hidden');
    });

    // // Prevent the mobile menu from closing when clicking inside it
    // mobileMenuItems.addEventListener('click', function (event) {
    //     event.stopPropagation(); // Prevents the click event from reaching the document
    // });
});

// // Close mobile menu when clicking outside
// document.addEventListener('click', function () {
//     const mobileMenuItems = document.getElementById('mobileMenuItems');
//     mobileMenuItems.classList.add('hidden');
// });
