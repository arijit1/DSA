class Solution
{   isValid(x,y,n,visited){
    if(x>=0 && x<n && y>=0 && y<n && visited[x][y] == false){
        return true;
    }
    return false;
}
    //Function to find out minimum steps Knight needs to reach target position.
	minStepToReachTarget(KnightPos, TargetPos, N)
	{
        let x = KnightPos[0]-1;
        let y = KnightPos[1]-1;

        let tx = TargetPos[0]-1;
        let ty = TargetPos[1]-1;
        let n = N;
        let ans = 0;

        if (x==tx && y==ty) return ans;
        

        let visited  = Array(n).fill(false).map(()=>Array(n).fill(false))
        let queue = [];
        
        visited[x][y] = true;
        queue.push({x,y});
        while(queue.length!=0){
            ans++;
            let size = queue.length;
            while(size!=0){

                let currNode = queue.shift();
                let nx = currNode.x;
                let ny = currNode.y;

                let ax = [-1,1,-1,1,2,2,-2,-2];
                let ay = [2,2,-2,-2,-1,1,-1,1];

                for(let i=0;i<8;i++){
                    let x = nx + ax[i];
                    let y = ny + ay[i];

                    if(x == tx && y == ty) return ans;

                    if(this.isValid(x,y,n,visited)){
                        visited[x][y] = true;
                        queue.push({x,y});
                    }
                }

                size--;
            }
        }
    }
}
const KnightPos =[ 4, 5 ];
const TargetPos = [ 1, 1 ];
const len = 6;

const s = new Solution();
let res = s.minStepToReachTarget(KnightPos,TargetPos,len);

console.log(res);