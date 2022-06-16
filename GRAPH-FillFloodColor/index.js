/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

 var allDirection = (i,j,row,col,image,color,faceVal)=>{
    while(i>=0 && j>=0 && i<row && j<col){  //covering edges
        if(image[i][j] == faceVal){
             image[i][j] = color;
             console.log(i,j)
            allDirection(i+1,j,row,col,image,color,faceVal);
            allDirection(i-1,j,row,col,image,color,faceVal);
            allDirection(i,j+1,row,col,image,color,faceVal);
            allDirection(i,j-1,row,col,image,color,faceVal);
        }
        return image; 
    }  
 }
 var floodFill = function(image, sr, sc, color) {
     let x = sr;
     let y = sc;
     let faceVal = image[x][y];
     let row = image.length;
     let col = image[0].length;

     if(faceVal == color){return image;} //base case

     //let visited = Array(n).fill(false).map(()=>Array(n).fill(false));
     allDirection(x,y,row,col,image,color,faceVal);
     
     return image;
 }; 

const image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
console.log(image.length);
let res = floodFill(image,sr,sc,color);

console.log(res);