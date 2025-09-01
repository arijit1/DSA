function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer =  setTimeout(()=> fn(...args),delay);
    }
}

const ll = debounce((nn)=>{
    console.log("debouncing.....!"+nn)
},300);

ll("1");
ll("2");
ll("3");
ll("4");
