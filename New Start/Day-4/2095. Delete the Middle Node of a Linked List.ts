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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let temp = head
    let size = 0
    // get size
    if(!head.next){
        head = null
        return head
    }
    while(temp){
        size++
        temp = temp.next
    }

    temp = head
    let counter = 0
    while((Math.floor(size / 2 )-1) != counter) {
        temp = temp.next
        counter++
    }
    temp.next = temp.next?.next
    return head
    
};