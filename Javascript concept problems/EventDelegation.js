// You have a <ul> list with 1,000 <li> items.
// You need to attach a click handler to each item.
// What’s the most efficient way to handle this — without attaching 1,000 individual listeners?

/**
 * <ui id="history">
 * <li>1</li>
 * <li>2</li>
 * <li>3</li>
 * <li>4</li>
 * <li> <span> 5 </span> </li>
 * <li> <h1> 6 </h1> </li>
 * <li>7</li>
 * <li>8</li>
 */

const ele = document.getElementById("history");
ele.addEventListener("click", function(e){
    const li = e.target.closest("li"); //using closest, 
    if(li && ele.contains(li)){
        console.log(li.textContent.trim())
    }
})