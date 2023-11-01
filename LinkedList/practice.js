class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    createList(){
        let head = new Node(1), count = 2;
        let currNode = head;
        while(count<=10){
            currNode.next = new Node(count);
            currNode = currNode.next;
            count++;
        }
        return head;
    }
    printList(list){
        let res = [];
        while(list!=null){
            res.push(list.data);
            list = list.next;
        }
        console.log(res);
    }
    reverse(curr){
        if(curr == null || curr.next ==null){
            return curr;
        }
        let headNode = this.reverse(curr.next);
        
        let temp = curr.next;
        curr.next = null;
        temp.next = curr;

        return headNode;
    }
    reverseWhile(list){
        let prev = null , curr = list , next = null;
        while(curr!=null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    reverseByGroup(list, k){
        let prev = null   , next = null , count = 1;
        while(count!=k && list!=null){
            next = list.next;
            list.next = prev;
            prev = list;
            list = next;
            count++;
        }
        if(next!=null){
            list.next = this.reverseByGroup(next,count);
        }
        return prev;
    }
}
let ll = new LinkedList();
let list = ll.createList();
ll.printList(list);

let rev = ll.reverseWhile(list);
ll.printList(rev);

let revgroup = ll.reverseByGroup(rev,3);
ll.printList(revgroup);