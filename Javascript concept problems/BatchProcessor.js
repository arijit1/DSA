//what if the requirement is to process all 1M items invisibly (no pagination), but still keep the main thread responsive?

// <p id="search"></p>
//const ele = document.getElementById("search");
function process(length, batch = 100){
    let index = 0;
    
    function batchRunner(){
        let end = Math.min(index+batch, length);
        while(index<end){
            ele.innerHTML = index;
            index++;
        }
        if(index<length){
            setTimeout(batchRunner(),100); /** or requestAnimationFrame(batchRunner) */
        }
    }
    batchRunner(); /** or requestAnimationFrame(batchRunner) */
}

process(1000000,100);