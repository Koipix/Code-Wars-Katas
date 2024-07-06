var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            map.set(target - nums[i], i);
        }
    }
    return 'No match found'
};

console.log(twoSum([1,2,3,4,9,7], 6)) // [1,3] = 6
console.log(twoSum([1,2,3,4,9,7], 3))
console.log(twoSum([1,2,3,4,9,7], 4))
console.log(twoSum([1,2,3,4,9,7], 5))
console.log(twoSum([1,2,3,4,9,7], 15))