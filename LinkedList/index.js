class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    createNodes() {
        let nodeHead = new Node(11);
        nodeHead.next = new Node(22);
        nodeHead.next.next = new Node(33);
        nodeHead.next.next.next = new Node(22);
        nodeHead.next.next.next.next = new Node(11);
        return nodeHead;
    }
    reverseNodes() {
        let node = this.createNodes();
        let prev = null, curr = node;
        while (curr != null) {
            let tempNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNode;
        }
        console.log(prev);
    }
    RecursivelyReverseNodes(curr) {
        if (curr == null || curr.next == null) {
            return curr;
        }
        let headNode = this.RecursivelyReverseNodes(curr.next);
        //console.log(curr);
        let tempNode = curr.next;
        tempNode.next = curr;
        curr.next = null;
        return headNode;
    }
    callRecursiveReverseNodes() {
        let node = this.createNodes();
        let result = this.RecursivelyReverseNodes(node);
        console.log(result);
    }

    isLinkedListPallindrome() {
        let node = this.createNodes();
        let slow = node, fast = node;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        let mid = slow.data; //slow reached mid point of linked list.
        console.log('mid', mid);
        let reverse = this.RecursivelyReverseNodes(slow.next);
        let flag = true;
        while(reverse!=null){
            if(node.data !== reverse.data){
               flag = false;
            }
            node = node.next;
            reverse = reverse.next;
        }
        console.log(flag);
        return flag;
    }
}
let ll = new LinkedList();
ll.isLinkedListPallindrome();