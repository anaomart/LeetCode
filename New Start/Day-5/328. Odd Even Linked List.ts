
  class ListNode {
    val: number
     next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


  function oddEvenList(head: ListNode | null): ListNode | null {
    let t = head
    let e 
    let c = 0
    while(t !== null && e?.next !== null){
        e = t.next
        let eEnd = e;
        for(let i =0 ; i<c ; i++) eEnd=eEnd.next
        
        if(!eEnd?.next) return head
        
        let o = eEnd.next
        
        t.next = o
        eEnd.next =o.next
        o.next = e
        t=t.next
        c++
    }

    return head
};

const LinkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10))))))))))

console.log(oddEvenList(LinkedList))
