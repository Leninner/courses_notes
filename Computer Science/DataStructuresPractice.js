// Linked Lists

// Linked List Node

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

// Linked List

class LinkedList {
  head = null
  tail = null

  addToTail (data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
    }
    if (this.tail) {
      this.tail.next = node
    }
    this.tail = node
  }

  size () {
    let size = 0
    let current = this.head
    while (current) {
      size++
      current = current.next
    }
    return size
  }

  isEmpty () {
    return !this.head
  }

  valueAt (index) {
    let cont = 0
    let current = this.head

    while (cont !== index) {
      if (!current) throw new Error('Index out of bounds!')
      cont++
      current = current.next
    }

    return current.data
  }

  pushFront (data) {
    const temp = this.head
    this.head = data
    this.head.next = temp
  }

  popFront () {
    this.head = this.head.next
  }

  pushBack (data) {
    this.tail = data
    let current = this.head

    while (current) {
      if (!current.next) {
        this.tail = data
        current.next = this.tail
        return
      }
      current = current.next
    }
  }

  popBack () {
    let current = this.head

    while (current) {
      if (!current.next.next) {
        current.next = null
        this.tail = current
        return
      }

      current = current.next
    }
  }

  front () {
    return this.head.data
  }

  back () {
    let current = this.head

    while (current) {
      if (!current.next) {
        return current.data
      }

      current = current.next
    }
  }

  insert (index, data) {
    let cont = 0
    let current = this.head

    if (index === 0) {
      this.pushFront(data)
      return
    }

    while (current) {
      if (cont === index - 1) {
        const temp = current.next
        current.next = data
        current.next.next = temp
        return
      }

      current = current.next
      cont++
    }
  }

  erase (index) {
    let cont = 0
    let current = this.head

    if (index === 0) {
      this.popFront()
      return
    }

    while (current) {
      if (cont === index - 1) {
        const temp = current.next
        current.next = temp.next
        return
      }

      current = current.next
      cont++
    }
  }

  valueNFromEnd (index) {
    const indexFromStart = this.size() - index - 1
    return this.valueAt(indexFromStart)
  }

  reverse () {
    let current = this.head
    const tailFromHead = this.head
    let previous = null
    let next = null

    while (current) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.head = previous
    this.tail = tailFromHead
  }

  removeValue (value) {
    let current = this.head
    let cont = 0

    while (current) {
      if (current.data === value) {
        return this.erase(cont)
      }

      cont++
      current = current.next
    }
  }
}

const list = new LinkedList()
list.addToTail(90)
list.pushBack(new Node(50))
list.pushBack(new Node(374864))
list.insert(1, new Node(9))
list.removeValue(9)

console.log(list)
