//create , print , reverse , delete , reverseGroupBy , detect loop ,rotate
class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}

class LinkedList {
    createList() {
        let node = new Node(1);
        node.next = new Node(2);
        node.next.next = new Node(3);
        node.next.next.next = new Node(4);
        node.next.next.next.next = new Node(5);
        node.next.next.next.next.next = new Node(6);

        return node;
    }
    createList2() {
        let node = new Node(9);

        return node;
    }
    print(list) {
        let res = [];
        while (list != null) {
            res.push(list.head);
            list = list.next;
        }
        console.log(res);
    }
    //reverse
    reverse(list) {
        if (list == null || list.next == null) {
            return list;
        }
        let headNode = this.reverse(list.next);

        let temp = list.next;
        list.next = null;
        temp.next = list;

        return headNode;
    }
    reverseByWhile(head) {
        let prev = null, curr = head, next = null;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    reverseByGroup(n, head) {
        let prev = null, curr = head, next = null, count = 0;
        while (curr != null && count != n) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }
        if (next != null) {
            head.next = this.reverseByGroup(count, next);
        }
        //prev.next = curr;
        return prev;
    }
    moveLastElementToFirst(curr) {
        if (curr == null || curr.next == null) {
            return curr;
        }
        let head = curr;
        let last = head, seclast = null;
        while (last.next != null) { //1,2,3,4,5,6,7,null
            seclast = last;
            last = last.next;
        }
        seclast.next = null;
        last.next = head;
        return last;
    }

    intersection(head1,head2){
        let newNode , resultHead =null;
        let curr2  = head2 ;
        let curr1  = head1;
        
        while(curr1!=null && curr2!=null){
            if(curr1.head == curr2.head){
                if(newNode == undefined){
                    newNode = new Node(curr1.head);
                    resultHead = newNode;
                    curr1 = curr1.next;
                    curr2 = curr2.next;
                }else{
                    while(newNode.next!=null){
                        newNode = newNode.next;
                    }
                    newNode.next = new Node(curr1.head);
                    
                    curr1 = curr1.next;
                    curr2 = curr2.next;
                }
            }else{
                if(curr1.head<curr2.head){
                    curr1 = curr1.next;
                }else{
                    curr2 = curr2.next;
                }
            }
        }
        this.print(resultHead);
    }
}
let list = new LinkedList();
let ll = list.createList();
list.print(ll);
let rev = list.reverse(ll);
list.print(rev);
let revwhile = list.reverseByWhile(rev);
list.print(revwhile);
let revGroup = list.reverseByGroup(2, revwhile);
console.log('-----x-current list-x-----');
list.print(revGroup);
console.log('----------');
let movelastfirst = list.moveLastElementToFirst(revGroup);
list.print(movelastfirst);

console.log("========================================");
//---------//
let list1 =  list.createList();
let list2 = list.createList2();
list.print(list1);
list.print(list2);
list.intersection(list1,list2);