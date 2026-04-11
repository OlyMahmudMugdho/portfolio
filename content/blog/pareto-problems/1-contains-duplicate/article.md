---
title: "1. Contains Duplicate"
date: "2026-04-11"
excerpt: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct."
category: "Coding"
tags: ["coding", "dsa", "interview"]
featured: false
coverImage: "cover.png"
author: "M. Oly Mahmud"
---

# Problem
[https://leetcode.com/problems/contains-duplicate/](https://leetcode.com/problems/contains-duplicate/)

# Problem Summary

You are given an array of numbers.

You need to check:

* **Does any number repeat at least once?**
* If yes → return **true**
* If no → return **false**


# Core Idea (easy explanation)

As you go through the array:

* Keep a **set** to store numbers you have already seen.
* For each number:

  * If it’s **already in the set**, then it's a duplicate → return **true**
  * Otherwise, add it to the set and continue

If you finish the loop and found no duplicates → return **false**


# Why a Set?

A **set** ignores duplicates and checking if something exists in a set is very fast (O(1)).


# Step-by-Step Explanation

Let’s take:
`nums = [1, 2, 3, 1]`

1. Start with an empty set: `{}`
2. Look at `1` → not in set → add it → set becomes `{1}`
3. Look at `2` → not in set → add it → `{1, 2}`
4. Look at `3` → not in set → add it → `{1, 2, 3}`
5. Look at `1` again → this time **1 is already in the set**
6. So return **true**



# 🧠 Time and Space Complexity

* **Time:** O(n)
* **Space:** O(n)


# 📝 Pseudocode

```
create empty set seen

for each number in nums:
    if number is in seen:
        return true
    add number to seen

return false
```


# 🐍 Python Solution

```python
class Solution:
    def containsDuplicate(self, nums):
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
```



# ☕ Java Solution

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();

        for (int num : nums) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }

        return false;
    }
}
```
