const iconClick = () => {
    const icons = [...document.querySelectorAll('.product-card .icons i')];
    icons.map((i) => {
        i.addEventListener('click', (e) => {
            e.target.classList.toggle('icon-clicked');
        });
    });
};
iconClick();
