//what if the requirement is to process all 1M items invisibly (no pagination), but still keep the main thread responsive?
//with RAF -> requestAnimationFrame (RAF)

/** <p id="search"></p>
//const ele = document.getElementById("search"); */
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


/** 
 * What is requestIdleCallback?

It’s a browser API that runs your function when the main thread is idle (not busy painting, handling input, etc.).

Good for low-priority tasks: analytics, prefetching, cleanup, background loops.

Browser gives you a special object deadline with:

deadline.timeRemaining() → how many ms are left in this idle period.

deadline.didTimeout → whether your callback ran because of a timeout.
 */

const ele = document.getElementById("search");

function process_RIC(length, batch = 100) {
  let index = 0;

  function work(deadline) {
    while (index < length && deadline.timeRemaining() > 0) {
      ele.innerHTML = index;
      index++;
    }

    if (index < length) {
      requestIdleCallback(work);
    }
  }

  requestIdleCallback(work);
}

process_RIC(10000, 100);
