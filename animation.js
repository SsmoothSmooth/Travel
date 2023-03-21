const btnTravel = document.querySelector('.btn-travel');
    btnTravel.onmousemove = function(e){
        const x = e.pageX - btnTravel.offsetLeft;
        const y = e.pageY - btnTravel.offsetTop;

        btnTravel.style.setProperty('--x', x + 'px');
        btnTravel.style.setProperty('--y', y + 'px');
    }