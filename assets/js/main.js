const app = {
    initProgressBar: () => {
        const progress = (bar, value) => {
             const elem = document.getElementById(bar);  
            let width = 1;
            let finalbarWidth = elem.getAttribute('aria-valuenow');
            
            let frame = () =>  {
                if (width >= finalbarWidth) {
                clearInterval(id);
                } else {
                width++; 
                elem.style.width = width + '%'; 
                document.getElementById(value).innerHTML = width  + '%';
                }
            }
            let id = setInterval(frame, 100);
        }
        progress('bar_1', "value_1");
        progress('bar_2', "value_2");
        progress('bar_3', "value_3");
        progress('bar_4', "value_4");
        progress('bar_5', "value_5");
        progress('bar_6', "value_6");
    }
}