

function removeDupes(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextDistinctNode = currentNode.next;
        while (nextDistinctNode !== null && currentNode.value === nextDistinctNode.value) {
            nextDistinctNode = nextDistinctNode.next;
        }
        currentNode.next  = nextDistinctNode;
        currentNode = nextDistinctNode;
    }
}