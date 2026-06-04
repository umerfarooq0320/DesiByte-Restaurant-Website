/**
 * Desi Byte - Sidebar Navigation Interactive Logical Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Element Target Selections
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar_links li a');

    // Function to slide open the menu container panel
    function openSidebar() {
        sidebarMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
        // Locks main document body scrolling window actions
        document.body.style.overflow = 'hidden'; 
    }

    // Function to collapse/hide the sidebar drawer panel
    function closeSidebar() {
        sidebarMenu.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        // Restores body scroll properties back to normal layout values
        document.body.style.overflow = 'auto'; 
    }

    // Event Binding Triggers
    if (menuOpenBtn) menuOpenBtn.addEventListener('click', openSidebar);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // Event Loop to manage internal cross-navigation links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Instantly clear out existing active statuses across array lists
            sidebarLinks.forEach(item => item.classList.remove('active'));
            
            // Highlight the clicked option item
            link.classList.add('active');
            
            // Automatically close menu panel drawer layout frames
            closeSidebar();
        });
    });
});