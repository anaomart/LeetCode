/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeNodes(head: ListNode | null): ListNode | null {
   
    let temp = head 
    let curr = temp.next
    let counter = 0 
     do {
        if(curr.val) {
            counter = counter + curr.val
            curr= curr.next
     }else {
             curr.val = counter
             counter = 0 
             temp.next =curr
             temp = curr
             curr = curr.next
        }
    }while(temp.next)


        return head.next
    }

