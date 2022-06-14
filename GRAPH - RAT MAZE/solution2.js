//Optimized approach
//time complexity O(4 ^ ( m* n) )
//space complexity O( m * n )

class Solution {
    
    // isSolve(x,y,matrix,len,visited){
    //     if((x>=0 && x<len) && (y>=0 && y<len) && (visited[x][y]==false) && matrix[x][y]==1){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    
    solve(i,j,matrix,n,visited,path,ans,di,dj){
        
        if(i==n-1 && j == n-1){
            //let final = path.join("");
            ans.push(path)
            return;
        }
        
       
        let dir = "DLRU";
        
        for(let ind=0;ind<4;ind++){
            let nexti = i + di[ind];
            let nextj = j + dj[ind];
            if(nexti>=0 && nextj >=0 && nexti<n && nextj < n && !visited[nexti][nextj]
            && matrix[nexti][nextj] == 1
            ){
                 visited[i][j] = true;
                 this.solve(nexti,nextj,matrix,n,visited,path+dir[ind],ans,di,dj);
                visited[i][j] = false;
                
            }
        }
        
        // //down
        // let newx = x+1;
        // let newy = y;
        // if(this.isSolve(newx,newy,matrix,len,visited)){
        //     path.push('D');
        //     this.solve(newx,newy,matrix,len,visited,path,ans);
        //     path.pop()
        //     //path.slice(0, -1);
        // }
        // //up
        // newx = x-1;
        // newy = y;
        // if(this.isSolve(newx,newy,matrix,len,visited)){
        //     path.push('U');
        //     this.solve(newx,newy,matrix,len,visited,path,ans);
        //     path.pop()
        // }
        // //right
        // newx = x;
        // newy = y+1;
        // if(this.isSolve(newx,newy,matrix,len,visited)){
        //     path.push('R');
        //     this.solve(newx,newy,matrix,len,visited,path,ans);
        //     path.pop()
        // }
        // //left
        // newx = x;
        // newy = y-1;
        // if(this.isSolve(newx,newy,matrix,len,visited)){
        //     path.push('L');
        //     this.solve(newx,newy,matrix,len,visited,path,ans);
        //     path.pop()
        // }
        
        
        // visited[x][y] = false;
    }
    
    findPath(m,n){
        //console.log(m)
        let answer = [];
        let visited =  Array(n).fill(false).map(() => Array(n).fill(false));
        let di = [1,0,0,-1];
        let dj = [0,-1,1,0]
        
        if(m[0][0]===1){
            this.solve(0,0,m,n,visited,"",answer,di,dj);
        }
        //answer.sort((a, b) => a > b); //sorting in lexical order
        return answer;
    }
    
}
let s = new Solution();
const nm = [ [1 ,1, 1, 1 ,1], [1 ,1, 1, 1 ,1],[1 ,1, 1, 1 ,1],[1 ,1, 1, 1 ,1] , [1 ,1, 1, 1 ,1]];
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
const m = [ [ 1, 0, 0, 0 ], [ 1, 1, 0, 1 ], [ 1, 1, 0, 0 ], [ 0, 1, 1, 1 ] ];
//1 0 0 0 1 1 0 1 1 1 0 0 0 1 1 1
let res = s.findPath(m,4);
console.log(res);