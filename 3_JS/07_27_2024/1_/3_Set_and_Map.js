            // Set
// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(1);   // Ignoring 1 because it is already exists

// console.log(set);

// console.log(typeof set);

// console.log(set.size);



            // Map



// Map => we have key-value pair in map also
// Map is a collection of key-value pairs where keys are unique and can be of any data type

// Object is a collection of key-value pairs where keys are strings and values can be of any data




let map = new Map();
map[1] = 'a'; 
map[2] = 'b'; 
map[3] = 'c'; 
map['a'] = 4; 
map['b'] = '5'; 
console.log(map);

let obj1= {'fName' : 'Pranjal'};
let obj2 = {'fName' : 'Ram'};

map[obj1] = 'object'
console.log(map);
// why size is coming as zero in map
// because map is not storing the object as it is, it is storing the reference of the object so when we are doing map[obj1] = 'object' it is storing the reference of obj1 in map and not the object itself
console.log(typeof map);

console.log(map[55]);

map.set(1,'a');
console.log(map);
// Now size is coming why
// because set is storing the value and not the reference of the value so when we are doing map

console.log(map.has(1));

console.log(map.get(1));

console.log(map);


if(map.has(1)){
    console.log(map.get(1));
}

map.delete(1);

// Explain Map methods in detail
// Map methods are used to perform various operations on a Map object.
// Here are some of the most commonly used Map methods:
// 1. set(key, value): This method adds a new key-value pair to the Map
// 2. get(key): This method returns the value associated with the given key
// 3. has(key): This method returns a boolean indicating whether the Map contains the given key
// 4. delete(key): This method removes the key-value pair with the given key from the
// 5. clear(): This method removes all key-value pairs from the Map
// 6. keys(): This method returns an iterator over the keys in the Map
// 7. values(): This method returns an iterator over the values in the Map
// 8. entries(): This method returns an iterator over the key-value pairs in the Map