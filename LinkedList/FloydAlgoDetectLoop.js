 class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    //FLoyd Algo , use slow pointer and fast pointer
    detectLoop(head)
    {
        let slow = head , fast = head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return slow;
            }
        }
        return null;
    }
    detectLoopNode(head){
        let start = head;
       let met = this.detectLoop(head);
        if(met == null){
            return -1; // no loop;
        }
        while(start!=met){
            start = start.next;
            met = met.next;
        }
        return start;
    }
    
}