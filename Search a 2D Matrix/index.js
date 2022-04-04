/**
 * 
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 
 * 
 */
//Time Complexity O(n*m)
var searchMatrix = function(matrix, target) {
    let flag = false;
    //console.log(matrix.length)
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++)
            if(matrix[i][j]===target){
                return true;
            }
    }
    return flag;
};

