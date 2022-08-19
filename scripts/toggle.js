const toggle = document.getElementById("toggle")

toggle.onclick = function() {
    toggle.classList.toggle('active')
    const cardImgs = document.querySelectorAll(".card-img-active")
    if (toggle.classList.contains('active')) {
        tagStatus.environment = true;
        tagStatus.sample = false;
        cardImgs.forEach(img => {
            img.style.zIndex = 0;
        });
    } else {
        tagStatus.environment = false;
        tagStatus.sample = true;
        cardImgs.forEach(img => {
            img.style.zIndex = 2;
        });
    }
} 

