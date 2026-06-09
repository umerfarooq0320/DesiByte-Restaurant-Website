// for sidebar
document.addEventListener('DOMContentLoaded', () => {
    // DOM Element Target Selections
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar_links li a');

    
    function openSidebar() {
        sidebarMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
    function closeSidebar() {
        sidebarMenu.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }

    if (menuOpenBtn) menuOpenBtn.addEventListener('click', openSidebar);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
            
            closeSidebar();
        });
    });
});

/*  MENU FILTER CONTROLLER*/
    const tabButtons = document.querySelectorAll('.tab_btn');
    const gridItems = document.querySelectorAll('.grid_item');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetFilterValue = button.getAttribute('data-filter');

            gridItems.forEach(item => {
                const itemCategoryValue = item.getAttribute('data-category');

                if (targetFilterValue === 'all' || targetFilterValue === itemCategoryValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

