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
        console.log(curr);
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
}
let ll = new LinkedList();
ll.callRecursiveReverseNodes();