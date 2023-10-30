class Node {
    constructor(key, value, prev=null, next=null) {
      this.key = key;
      this.value = value;
      this.prev =prev;
      this.next = next;
    }
  }
  
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.head = new Node(null, null, null, null);
      this.tail = new Node(null, null, null, this.head);
      this.head.next = this.tail;
      this.cacheMap = new Map();
      
    }
    
    put(index, value) {
      console.log('Adding key value to the cache ' + value)
      console.log(this.capacity, this.cacheMap.size)
      if(this.capacity === this.cacheMap.size) {
        const leastUsed = this.tail.prev;
        this.tail.prev = leastUsed.prev;
        leastUsed.prev.next = this.tail;
        console.log('deleted' + leastUsed.key)
        this.cacheMap.delete(leastUsed.key)
      }
      const node  = new Node(index, value, this.head, this.head.next);
      this.head.next.prev = node;
      this.head.next = node;
      this.cacheMap.set(index, node)
      console.log(this.cacheMap)
    }
  
    
    get(index) {
      console.log('Fetching value from the cache for ' + index)
      const entry = this.cacheMap.get(index);
      if(!entry) {
        console.log('No value found in the cache');
        return;
      }
      console.log('Value present in cache' + entry.value);
      console.log(entry.next.value, entry.prev.value);
      entry.prev.next = entry.next;
      entry.next.prev = entry.prev;
      
      this.head.next.prev = entry;
      entry.prev = this.head;
      entry.next = this.head.next;
      this.head.next = entry;
      console.log(entry.next.value, entry.prev.value);
      console.log(this.cacheMap)
      
      return entry.value;
    }
  }
  
  
  
  // class LruCache {
    
  //   constructor(capacity) {
  //     this.capacity = capacity;
  //     this.valueMap = {} 
  //   }
    
  //   deleteRecentlyUsedValue() {
  //     let recentTime = Date.now();
  //     let recentlyUsedKey;
  //     for (let key in this.valueMap) {
  //       const { recentlyUsedTime } = this.valueMap[key];
  //       if(recentTime >= recentlyUsedTime) {
  //         recentTime = recentlyUsedTime;
  //         recentlyUsedKey = key;
  //       }
  //     }
  //     console.log("Deleting least recently used key "+ recentlyUsedKey);
  //     recentlyUsedKey && delete this.valueMap[recentlyUsedKey];
  //   }
    
  //   put(index, value) {
  //     console.log('Adding key value to the cache ' + value)
  //     if(Object.keys(this.valueMap).length >= this.capacity) {
  //       this.deleteRecentlyUsedValue();
  //     }
  //     this.valueMap[index] = {
  //       value,
  //       recentlyUsedTime : Date.now()
  //     }
  //   }
    
  //   get(index) {
  //     console.log('Fetching value from the cache for ' + index)
  //     const entry = this.valueMap[index];
  //     if(!entry) {
  //       console.log('No value found in the cache')
  //     }
  //     console.log('Value present ' + entry.value);
  //     this.valueMap[index] = {...entry, recentlyUsedTime: Date.now() }
  //     return entry.value;
  //   }
    
  // }
  
  const cache = new LRUCache(2)
  cache.put(1, '2')
  cache.put(2, '3')
  cache.get(1)
  cache.put(3, '4')
  cache.get(2)
  cache.get(1)
  cache.put(4, '5')
  
  