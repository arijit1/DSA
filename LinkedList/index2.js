//create , print , reverse , delete , reverseGroupBy , detect loop ,rotate
class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}

class LinkedList {
    createList() {
        // let head = new Node(1);
        // let currentNode = head;
        // for(let i=2;i<6;i++){
        //     currentNode.next = new Node(i);
        //     currentNode = currentNode.next;
        // }
        // return head;
        let head = new Node(1);
        head.next = new Node(10);
        head.next.next = new Node(7);
        head.next.next.next = new Node(8);
        return head;
    }

    printList(list) {
        let set = [];
        while (list.next != null) {
            set.push(list.head);
            list = list.next;
        }
        set.push(list.head);
        return set;
    }

    deleteNode(head, val) {
        val=8;
        
        while (head !== null && head.head === val) {
            head = head.next;
        }
        let curr = head, prev = head;
        while(curr!=null){
            if(curr.head == val){
                prev.next = curr.next;
            }else{
                prev = curr;
            }
            curr = curr.next;
            
        }
        return head;
    }

    reverseTheList(list) {
        if (list == null || list.next == null) {
            return list;
        }
        let listHead = this.reverseTheList(list.next);

        let temp = list.next;
        list.next = null;
        temp.next = list;
        return listHead;
    }
    reverseTheListByGroup(list, k) {
        //1->2->3->4->5
        let prev = null, next = null, count = 1;
        while (list != null && count != k) {
            count++;
            next = list.next;
            list.next = prev;
            prev = list;
            list = next;
        }

        if (next != null) {
            list.next = this.reverseTheListByGroup(next, count);
        }
        return prev;


    }
    rotate(head, k) {
        if (k == 0) {
            return head;
        }
        let count = 1, curr = head;
        while (count < k && curr != null) {
            curr = curr.next;
            count++;
        }
        let kthNode = curr;
        if (curr == null) {
            return curr;
        }
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = head;
        head = kthNode.next;
        kthNode.next = null;
        return head;
    }
}
let obj = new LinkedList();
let list = obj.createList();
console.log(obj.printList(list));
let rev = obj.reverseTheList(list);
console.log(obj.printList(rev));
//let groupRev = obj.reverseTheListByGroup(list,1);
//console.log(obj.printList(groupRev));
//let rotate = obj.rotate(rev,3);
let del = obj.deleteNode(rev, 10);
console.log(del);