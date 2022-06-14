class Solution {
    
    isSolve(x,y,matrix,len,visited){
        if((x>=0 && x<len) && (y>=0 && y<len) && (visited[x][y]==false && matrix[x][y]==1)){
            return true;
        }else{
            return false;
        }
    }
    
    solve(x,y,matrix,len,visited,path,ans){
        if(x==len-1 && y == len-1){
           // console.log("path->",path)
            ans.push(path.toString())
            //console.log("ans->",ans)
            return;
        }
        
        visited[x][y] = true;
        
        //down
        let newx = x+1;
        let newy = y;
        if(this.isSolve(newx,newy,matrix,len,visited)){
            path.push('D');
            this.solve(newx,newy,matrix,len,visited,path,ans);
            path.pop('D')
        }
        //up
        newx = x-1;
        newy = y;
        if(this.isSolve(newx,newy,matrix,len,visited)){
            path.push('U');
            this.solve(newx,newy,matrix,len,visited,path,ans);
            path.pop('U')
        }
        //right
        newx = x;
        newy = y+1;
        if(this.isSolve(newx,newy,matrix,len,visited)){
            path.push('R');
            this.solve(newx,newy,matrix,len,visited,path,ans);
            path.pop('R')
        }
        //left
        newx = x;
        newy = y-1;
        if(this.isSolve(newx,newy,matrix,len,visited)){
            path.push('L');
            this.solve(newx,newy,matrix,len,visited,path,ans);
            path.pop('L')
        }
        
        
        visited[x][y] = false;
    }
    
    findPath(m,n){
        //console.log(m)
        
        let answer = [];
        let srcX = 0;
        let srcY = 0;
        let path = new Array();
        let finalResult = {
            answer,srcX,srcY,path
        }
        
        if(m[0][0]===0){return answer;}
        let visited =  Array(n).fill(false).map(() => Array(n).fill(false));
        
        this.solve(finalResult.srcX,finalResult.srcY,m,n,visited,finalResult.path,finalResult.answer);
        //console.log(finalResult);
        answer.sort((a, b) => a > b); //sorting in lexical order
        return answer;
    }
    
}
let s = new Solution();
const nm = [ [1 ,1, 1, 1 ,1], [1 ,1, 1, 1 ,1],[1 ,1, 1, 1 ,1],[1 ,1, 1, 1 ,1] , [1 ,1, 1, 1 ,1]];
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
const m = [ [ 1, 0, 0, 0 ], [ 1, 1, 0, 1 ], [ 1, 1, 0, 0 ], [ 0, 1, 1, 1 ] ];
//1 0 0 0 1 1 0 1 1 1 0 0 0 1 1 1
let res = s.findPath(nm,4);
console.log(res);