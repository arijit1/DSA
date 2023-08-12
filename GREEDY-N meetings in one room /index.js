//https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1#

class Solution 
{
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    
    maxMeetings(start, end, n)
    {   let count = 1;
        let map = new Map();
        let meet = [];
        //let e = end[0];
        for(let i=0;i<n;i++){
           map.set(i,[start[i],end[i]]);
        }
       let sortedMap = new Map([...map].sort((a,b)=>a[1]-b[1]));
       
       console.log(sortedMap)
       let limit = sortedMap.get(0)[1];
       for(let m=1;m<n;m++){
           if(sortedMap.get(m)[0]>limit){
               count++;
               
               limit=sortedMap.get(m)[1];
           }
       }
       console.log(meet)
        return meet.length;
    }
}

let s  = new Solution();
let start = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];
let end = [112960, 114515, 81825 ,93424, 54316, 35533, 73383, 160252];
let k= 8;
//8
//75250 50074 43659 8931 11273 27545 50879 77924
//112960 114515 81825 93424 54316 35533 73383 160252
let result = s.maxMeetings(start,end,k);
console.log(result)