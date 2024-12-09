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

function pairSum(head: ListNode | null): number {

    let temp = head 
    let secondHalf:ListNode ; 
    let max = 0 
    // get the size 
    let size = 0
    while(temp) {
        temp= temp.next
        size++
    }
    temp =head

    for(let i =0 ; i< size/2 ; i++){
        temp=temp.next
    }
    secondHalf = reverseLinkedList( temp ) 
    temp = head

    for(let i =0 ; i<size / 2 ; i++){
        if((secondHalf.val + temp.val) > max ) { max = secondHalf.val + temp.val }     
            secondHalf = secondHalf.next
            temp = temp.next     
    }
    return max
};

function reverseLinkedList(head:ListNode | null ):ListNode {
    let prev = null 
    let temp = head 
    while(temp){
        let nxt = temp.next
        temp.next = prev
        prev= temp
        temp = nxt
    }
    
return prev

}