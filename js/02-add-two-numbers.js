function addTwoNumbers(l1, l2) {
    if(!l1 || !l2) return null

    let head = new ListNode(0, undefined)
    let current = head
    let carry = 0
    while(l1 || l2) {
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0
        const sum = x + y + carry
        current.next = new ListNode(sum % 10, undefined)
        current = current.next
        carry = sum / 10 | 0
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if(carry > 0) current.next = new ListNode(carry % 10, undefined)
    return head.next
};