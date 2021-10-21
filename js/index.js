$(document).ready(function() {
    const navlinks = document.querySelectorAll('.menu-link');

    navlinks.forEach(function(link) {
        link.addEventListener('click', function(){
            navlinks.forEach(function(e){
                // console.log(e);
                e.classList.remove('active');
                link.classList.add('active');
                getData(link.innerHTML.toLowerCase());
                //console.log(getData(link.innerHTML.toLowerCase()));
            });
        });
    });


    const getData = (info) => {
        fetch('data.json') //make a promise
        .then(response => response.json()) //promise that transform file
        .then(data => {
            data.forEach((item) => {
                console.log(item);
                const title = item.title.toLowerCase();
                const current = item.timeframes[info].current;
                const previous = item.timeframes[info].previous;
                handleResult(title, current, previous);
            });
        });

    }

    
       const handleResult = (title, current, previous) => {
           if(title === 'self care'){
            const currentHours = document.querySelector(`.self-care-hours`);
            const prevHours = document.querySelector(`.self-care-previous`);
            currentHours.innerHTML = `${current}hrs`;
            prevHours.innerHTML = `Last Week ${previous}hrs`;
           }else{
            const currentHours = document.querySelector(`.${title}-hours`);
            const prevHours = document.querySelector(`.${title}-previous`);
            currentHours.innerHTML = `${current}hrs`;
            prevHours.innerHTML = `Last Week ${previous}hrs`;
           }
           
       }

});