---
title: "Group Anagrams"
date: "2026-08-27"
excerpt: "Given an array of strings, group the anagrams together using a character frequency array and a hash map."
category: "Coding"
tags: ["coding", "dsa", "interview", "neetc-150"]
featured: false
coverImage: "https://res.cloudinary.com/dnmubeloc/image/upload/v1787811229/blog/group-anagrams_ivs8gq.png"
author: "M. Oly Mahmud"
-----------------------

# Group Anagrams

Problem Link: https://leetcode.com/problems/group-anagrams

## Problem

You are given an array of strings `strs`.

Your task is to group the strings that are anagrams of each other.

Two strings are anagrams if they contain the same characters with the same frequencies, but the characters can appear in a different order.

For example:

```text
"eat"
"tea"
"ate"
```

are all anagrams because they contain:

```text
a -> 1
e -> 1
t -> 1
```

The order is different, but the character frequencies are exactly the same.

---

# Example 1

Input:

```text
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
```

Output:

```text
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]
```

The order of the groups does not matter.

---

# Example 2

Input:

```text
strs = [""]
```

Output:

```text
[
    [""]
]
```

An empty string is also a valid string and forms its own group.

---

# Example 3

Input:

```text
strs = ["a"]
```

Output:

```text
[
    ["a"]
]
```

There is only one string, so it forms one group.

---

# Easy Explanation

The main challenge is figuring out:

How can we know that two strings are anagrams?

One simple approach would be to sort every string.

For example:

```text
"eat" -> "aet"
"tea" -> "aet"
"ate" -> "aet"
```

Since they all produce the same sorted string, we could use `"aet"` as the key.

But sorting takes time.

Instead, we can count how many times each character appears.

For lowercase English letters, there are only 26 possible characters:

```text
a b c d e f g h i j k l m
n o p q r s t u v w x y z
```

So we create an array of size `26`.

For example:

```text
"eat"
```

has:

```text
a -> 1
e -> 1
t -> 1
```

and every other character has frequency `0`.

The resulting array becomes the unique signature of the string.

---

# The Main Idea

For every string, create a frequency array:

```python
key_arr = [0] * 26
```

Initially:

```text
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

Each position represents a character.

For example:

```text
index 0  -> a
index 1  -> b
index 2  -> c
...
index 25 -> z
```

When we see a character, we increase its corresponding position.

---

# How Do We Find the Index of a Character?

Your solution uses:

```python
order = ord(letter.lower()) - 97
```

Let's understand this.

Python's `ord()` function converts a character into its ASCII value.

For example:

```python
ord('a') = 97
ord('b') = 98
ord('c') = 99
```

Therefore:

```python
ord('a') - 97 = 0
ord('b') - 97 = 1
ord('c') - 97 = 2
```

and so on.

So:

```python
ord(letter.lower()) - 97
```

converts a letter into an index between `0` and `25`.

For example:

```text
a -> 0
b -> 1
c -> 2
...
z -> 25
```

The `.lower()` makes the character lowercase before calculating the index.

---

# Example: Creating the Key for "eat"

Let's process:

```text
"eat"
```

Start with:

```text
key_arr =
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

First character:

```text
e
```

`e` corresponds to index `4`.

So:

```text
key_arr[4] += 1
```

Then:

```text
e -> 1
```

Next character:

```text
a
```

`a` corresponds to index `0`.

So:

```text
key_arr[0] += 1
```

Finally:

```text
t
```

`t` corresponds to index `19`.

So:

```text
key_arr[19] += 1
```

The final array represents:

```text
a -> 1
e -> 1
t -> 1
```

---

# Why Does This Work for Anagrams?

Consider:

```text
eat
tea
ate
```

The characters are arranged differently, but the frequencies are identical.

For all three strings:

```text
a -> 1
e -> 1
t -> 1
```

Therefore, all three strings produce the same frequency array.

So they receive the same key.

Conceptually:

```text
eat -> [1,0,0,0,1,...,1,...]
tea -> [1,0,0,0,1,...,1,...]
ate -> [1,0,0,0,1,...,1,...]
```

Because the keys are identical, they go into the same group.

This is the most important idea in the problem:

> Anagrams have the same character frequency signature.

---

# Using a Hash Map

Now that we can create a unique key for every group of anagrams, we need somewhere to store the strings.

That's where the hash map comes in:

```python
hmap = {}
```

The structure looks conceptually like:

```text
key                         values

frequency of "eat"    ->    ["eat", "tea", "ate"]

frequency of "tan"    ->    ["tan", "nat"]

frequency of "bat"    ->    ["bat"]
```

So the hash map groups strings based on their frequency signature.

---

# Why Convert the Array to a String?

Your solution does:

```python
key = str(key_arr)
```

The frequency array itself is a list.

Python lists cannot be used as dictionary keys because they are mutable.

For example:

```python
hmap[key_arr]
```

would not work as a dictionary key.

So we convert the list into a string:

```python
key = str(key_arr)
```

Now the key is hashable and can be used inside the dictionary.

For example:

```text
[1, 0, 0, 0, 1, ...]
```

becomes a string representation that can be used as a dictionary key.

---

# Step-by-Step Dry Run

Suppose:

```text
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
```

Initially:

```python
hmap = {}
```

### Step 1: Process `"eat"`

We create its frequency array.

```text
a -> 1
e -> 1
t -> 1
```

This becomes a key.

The map becomes:

```text
key(eat) -> ["eat"]
```

---

### Step 2: Process `"tea"`

Its character frequencies are:

```text
a -> 1
e -> 1
t -> 1
```

Therefore, it produces the same key.

The key already exists.

So:

```python
hmap[key].append("tea")
```

Now:

```text
key(eat) -> ["eat", "tea"]
```

---

### Step 3: Process `"tan"`

Character frequencies:

```text
a -> 1
n -> 1
t -> 1
```

This is different from `"eat"`.

So we create another group:

```text
key(eat) -> ["eat", "tea"]

key(tan) -> ["tan"]
```

---

### Step 4: Process `"ate"`

Its frequencies are:

```text
a -> 1
e -> 1
t -> 1
```

It matches the first group.

```text
key(eat) -> ["eat", "tea", "ate"]
```

---

### Step 5: Process `"nat"`

Its frequencies are:

```text
a -> 1
n -> 1
t -> 1
```

It matches `"tan"`.

```text
key(tan) -> ["tan", "nat"]
```

---

### Step 6: Process `"bat"`

Its frequencies are:

```text
a -> 1
b -> 1
t -> 1
```

This is a new key.

So:

```text
key(eat) -> ["eat", "tea", "ate"]

key(tan) -> ["tan", "nat"]

key(bat) -> ["bat"]
```

Finally, we return all the values:

```python
return [val for val in hmap.values()]
```

Result:

```text
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]
```

---

# Understanding the Code

Here is the complete solution:

```python
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hmap = {}

        for s in strs:
            key_arr = [0] * 26

            for letter in s:
                order = ord(letter.lower()) - 97
                key_arr[order] = key_arr[order] + 1

            key = str(key_arr)

            if hmap.get(key):
                hmap[key].append(s)
            else:
                hmap[key] = [s]

        return [val for val in hmap.values()]
```

Let's break it down.

---

### Step 1: Create the Hash Map

```python
hmap = {}
```

This dictionary will store:

```text
frequency signature -> list of anagrams
```

---

### Step 2: Process Every String

```python
for s in strs:
```

We process each string one by one.

For example:

```text
eat
tea
tan
ate
nat
bat
```

---

### Step 3: Create a Frequency Array

```python
key_arr = [0] * 26
```

Every string gets its own frequency array.

We start with 26 zeros because there are 26 lowercase English letters.

---

### Step 4: Count Characters

```python
for letter in s:
```

We inspect every character in the current string.

Then:

```python
order = ord(letter.lower()) - 97
```

converts the character into an index from `0` to `25`.

Then:

```python
key_arr[order] = key_arr[order] + 1
```

increments the frequency.

---

### Step 5: Create the Hashable Key

```python
key = str(key_arr)
```

The frequency array is converted into a string so it can be used as a dictionary key.

---

### Step 6: Add the String to Its Group

Your code checks:

```python
if hmap.get(key):
    hmap[key].append(s)
else:
    hmap[key] = [s]
```

If the key already exists, the string belongs to an existing anagram group.

So we append it:

```python
hmap[key].append(s)
```

Otherwise, we create a new group:

```python
hmap[key] = [s]
```

---

### Step 7: Return the Groups

Finally:

```python
return [val for val in hmap.values()]
```

The dictionary contains the frequency keys and their corresponding lists.

We only need the lists.

So we return all dictionary values.

---

# Why Not Just Compare Every String?

A naive approach might compare every string with every other string.

That can become expensive.

Another common solution is to sort every string:

```python
key = ''.join(sorted(s))
```

For example:

```text
eat -> aet
tea -> aet
ate -> aet
```

This works, but sorting a string of length `k` takes:

```text
O(k log k)
```

time.

Our frequency-counting approach only needs to scan each character:

```text
O(k)
```

for each string.

That makes the frequency-array approach more efficient.

---

# Alternative Sorting Approach

A common solution looks like this:

```python
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hmap = {}

        for s in strs:
            key = ''.join(sorted(s))

            if key not in hmap:
                hmap[key] = []

            hmap[key].append(s)

        return list(hmap.values())
```

This solution is easier to understand initially.

For example:

```text
"eat" -> "aet"
"tea" -> "aet"
"ate" -> "aet"
```

Same sorted string means same anagram group.

However, your frequency-array solution avoids sorting and is therefore preferable when the alphabet is fixed and small.

---

# Time Complexity

Let:

```text
n = number of strings
k = average length of a string
```

We process every character exactly once.

For every string, creating the frequency array takes:

```text
O(k)
```

Therefore, for `n` strings:

```text
O(n × k)
```

So the overall time complexity is:

```text
O(nk)
```

The conversion:

```python
key = str(key_arr)
```

also processes a fixed-size array of 26 elements.

Since `26` is constant, we can treat that as:

```text
O(1)
```

---

# Space Complexity

The hash map stores every string.

If there are `n` strings and the average string length is `k`, the stored input strings require:

```text
O(nk)
```

space.

The frequency array has only 26 elements:

```text
O(26) = O(1)
```

So the auxiliary frequency-array space is constant, while the hash map and output groups require:

```text
O(nk)
```

space overall.

---

# Important Detail About Your Code

Your code uses:

```python
if hmap.get(key):
```

This works here because every stored value is a non-empty list.

However, a cleaner and more conventional way to write this is:

```python
if key in hmap:
    hmap[key].append(s)
else:
    hmap[key] = [s]
```

Or even more simply:

```python
hmap.setdefault(key, []).append(s)
```

For learning purposes, I would recommend the `if key in hmap` version because it makes the logic very explicit.

---

# A Small Improvement to the Solution

Since the problem guarantees lowercase English letters, you technically do not need:

```python
letter.lower()
```

You can simply write:

```python
order = ord(letter) - ord('a')
```

This makes the intention clearer:

```python
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hmap = {}

        for s in strs:
            key_arr = [0] * 26

            for letter in s:
                order = ord(letter) - ord('a')
                key_arr[order] += 1

            key = str(key_arr)

            if key in hmap:
                hmap[key].append(s)
            else:
                hmap[key] = [s]

        return list(hmap.values())
```

The algorithm is exactly the same as your solution.

---

# Key Idea to Remember

When you see a problem asking you to group anagrams, remember:

> Anagrams have the same character frequencies.

So instead of caring about the order of characters:

```text
eat
tea
ate
```

count them:

```text
a -> 1
e -> 1
t -> 1
```

Then use that frequency information as the hash map key.

The overall pattern is:

```text
String
   ↓
Count characters
   ↓
Create frequency signature
   ↓
Use signature as hash map key
   ↓
Group strings with the same signature
```

For this problem, the most important pattern to remember is:

```text
Hash Map + Character Frequency Count
```

Once you recognize that anagrams have identical character frequency counts, the problem becomes much easier to solve.
