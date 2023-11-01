class Solution {
    //Function to rotate a linked list. 1->2->3->4->5->6
    rotate(head, k)
    {
        if(k==0){
            return head;
        }
        let count = 1, curr = head;
        while(count<k && curr!=null){
            curr = curr.next;
            count++;
        }
        if(curr == null){
            return;
        }
        let kthNode = curr;
        while(curr.next!=null){
            curr = curr.next;
        }
        curr.next = head;
        head = kthNode.next;
        kthNode.next = null;
        return head;
    }
}