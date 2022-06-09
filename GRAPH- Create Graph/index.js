class Graph {
    constructor(m) {
        let arr= [];
        for (var i = 0; i < m; i++) {
            arr[i] = [];
        }
        this.twoDarray = arr;
    }
    addEdge(v, w) {
        this.twoDarray[v][w] = 1;
        this.twoDarray[w][v] = 1;
    }
    fillWithZero(){
        for(var i=1;i<6;i++){
            for(var j=1;j<6;j++){
                if(this.twoDarray[i][j]!==1){
                    this.twoDarray[i][j] = 0;
                }
            }
        }
    }

    print(){
        console.log(this.twoDarray)
    }
}
let g = new Graph(6);
g.addEdge(1,2);
g.addEdge(3,5);
g.addEdge(1,5);
g.addEdge(4,1);
g.addEdge(4,2);
g.addEdge(4,5);

g.fillWithZero();

g.print();

//Output

// [
//     [],
//     [ <1 empty item>, 0, 1, 0, 1, 1 ],
//     [ <1 empty item>, 1, 0, 0, 1, 0 ],
//     [ <1 empty item>, 0, 0, 0, 0, 1 ],
//     [ <1 empty item>, 1, 1, 0, 0, 1 ],
//     [ <1 empty item>, 1, 0, 1, 1, 0 ]
//   ]