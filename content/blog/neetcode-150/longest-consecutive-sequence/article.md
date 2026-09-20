---

title: "Longest Consecutive Sequence"
date: "2026-09-20"
excerpt: "Given an unsorted array of integers, find the length of the longest consecutive sequence using a hash set."
category: "Coding"
tags: ["coding", "dsa", "interview", "neetc-150"]
featured: false
coverImage: "https://res.cloudinary.com/dnmubeloc/image/upload/v1789888100/blog/longest-consecutive-sequence_vjj4dz.png"
author: "M. Oly Mahmud"
---

# Longest Consecutive Sequence

Problem Link: https://leetcode.com/problems/longest-consecutive-sequence

## Problem

You are given an unsorted array of integers `nums`.

Your task is to find the length of the longest consecutive elements sequence.

A consecutive sequence means numbers that come one after another without any gaps.

For example:

```text
1, 2, 3, 4
```

is a consecutive sequence because every number comes directly after the previous number.

The numbers do not need to be next to each other in the original array.

---

# Example 1

Input:

```text
nums = [100, 4, 200, 1, 3, 2]
```

Output:

```text
4
```

Explanation:

The longest consecutive sequence is:

```text
1, 2, 3, 4
```

There are `4` numbers in this sequence.

---

# Example 2

Input:

```text
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
```

Output:

```text
9
```

Explanation:

The longest consecutive sequence is:

```text
0, 1, 2, 3, 4, 5, 6, 7, 8
```

There are `9` numbers.

Notice that the original array is not sorted:

```text
[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
```

But we can still find the consecutive sequence.

---

# Example 3

Input:

```text
nums = []
```

Output:

```text
0
```

There are no numbers, so the longest consecutive sequence has length `0`.

---

# Easy Explanation

The first thing we need to understand is that we are looking for numbers that come one after another.

Suppose we have:

```text
[100, 4, 200, 1, 3, 2]
```

The consecutive sequence is:

```text
1, 2, 3, 4
```

The answer is:

```text
4
```

A simple idea would be to sort the array:

```text
[100, 4, 200, 1, 3, 2]
```

becomes:

```text
[1, 2, 3, 4, 100, 200]
```

Then we could easily find:

```text
1, 2, 3, 4
```

But sorting takes:

```text
O(n log n)
```

time.

The problem asks us to solve it in:

```text
O(n)
```

time.

So we need a better approach.

---

# The Main Idea

The main idea is to use a `set`.

```python
nums_set = set(nums)
```

A set allows us to quickly check whether a number exists.

For example:

```python
if 5 in nums_set:
```

This check is very fast.

Now we can ask:

> Is the next number present?

For example, if we have:

```text
1
```

we can check:

```text
2 exists?
3 exists?
4 exists?
5 exists?
```

This lets us build the consecutive sequence.

---

# The Most Important Trick

There is one very important idea in this solution:

> Only start counting when we find the beginning of a sequence.

Suppose the set contains:

```text
1, 2, 3, 4
```

We should start counting from:

```text
1
```

Why?

Because `1 - 1 = 0`, and `0` does not exist.

But if we are looking at:

```text
3
```

we can see that:

```text
3 - 1 = 2
```

and `2` exists.

That means `3` is not the beginning.

The sequence already started at `1`.

So we skip `3`.

---

# Finding the Beginning of a Sequence

Your solution uses:

```python
if (num - 1) in nums_set:
    continue
```

Let's understand this carefully.

Suppose:

```text
num = 3
```

We check:

```text
num - 1
```

which is:

```text
2
```

If `2` exists in the set, then `3` is not the beginning of the sequence.

So we skip it:

```python
continue
```

For example:

```text
1, 2, 3, 4
```

When we reach `3`:

```text
3 - 1 = 2
```

Since `2` exists, we know:

```text
1 → 2 → 3 → 4
```

already started before `3`.

Therefore, we do not start another search from `3`.

---

# Why Is This Important?

Imagine we did not use this check.

For:

```text
1, 2, 3, 4
```

we might do:

```text
Start at 1:
1 → 2 → 3 → 4

Start at 2:
2 → 3 → 4

Start at 3:
3 → 4

Start at 4:
4
```

We would repeatedly check the same numbers.

That is unnecessary.

Instead, we only start from `1`:

```text
1 → 2 → 3 → 4
```

This is what allows the solution to run in linear time.

---

# Creating the Set

The first line is:

```python
nums_set = set(nums)
```

Suppose:

```text
nums = [100, 4, 200, 1, 3, 2]
```

Then:

```text
nums_set = {100, 4, 200, 1, 3, 2}
```

Now we can quickly check whether a number exists.

For example:

```python
2 in nums_set
```

returns:

```text
True
```

And:

```python
5 in nums_set
```

returns:

```text
False
```

---

# Keeping Track of the Longest Sequence

Next, we create:

```python
longest = 0
```

This variable stores the longest sequence we have found so far.

Initially:

```text
longest = 0
```

As we find sequences, we update it.

For example:

```text
Sequence: 100
Length: 1
```

So:

```text
longest = 1
```

Later we find:

```text
1, 2, 3, 4
```

Its length is:

```text
4
```

So:

```text
longest = 4
```

---

# Going Through Every Number

Your solution uses:

```python
for num in nums_set:
```

This means:

> Look at every number in the set.

For example:

```text
100
4
200
1
3
2
```

The exact order does not matter because we are using a set.

---

# Starting a New Sequence

For every number, we first create:

```python
current_longest = 0
```

This keeps track of the length of the sequence we are currently checking.

Then we check:

```python
if (num - 1) in nums_set:
    continue
```

If the previous number exists, we skip the current number.

Otherwise, we have found the beginning of a sequence.

---

# Starting From the First Number

Suppose:

```text
num = 1
```

We check:

```text
0 exists?
```

No.

So `1` is the beginning of a sequence.

Now we do:

```python
current_longest += 1
```

So:

```text
current_longest = 1
```

Then:

```python
current_num = num
```

So:

```text
current_num = 1
```

Now we are ready to look for the next number.

---

# Finding the Next Numbers

Your solution uses:

```python
while (current_num + 1) in nums_set:
```

This means:

> Keep going as long as the next number exists.

Suppose:

```text
current_num = 1
```

We check:

```text
1 + 1 = 2
```

Does `2` exist?

Yes.

So:

```python
current_longest += 1
current_num += 1
```

Now:

```text
current_longest = 2
current_num = 2
```

Next:

```text
2 + 1 = 3
```

`3` exists.

So:

```text
current_longest = 3
current_num = 3
```

Next:

```text
3 + 1 = 4
```

`4` exists.

So:

```text
current_longest = 4
current_num = 4
```

Next:

```text
4 + 1 = 5
```

But `5` does not exist.

So the loop stops.

We found:

```text
1, 2, 3, 4
```

The length is:

```text
4
```

---

# Updating the Longest Sequence

Now we have:

```python
longest = max(longest, current_longest)
```

Suppose:

```text
longest = 1
current_longest = 4
```

Then:

```python
max(1, 4)
```

gives:

```text
4
```

So:

```text
longest = 4
```

This keeps the largest sequence we have found.

---

# Step-by-Step Dry Run

Let's walk through the complete example:

```text
nums = [100, 4, 200, 1, 3, 2]
```

First:

```python
nums_set = set(nums)
```

We get:

```text
{100, 4, 200, 1, 3, 2}
```

Initially:

```text
longest = 0
```

---

## Number = 100

Check:

```text
100 - 1 = 99
```

Does `99` exist?

```text
No
```

Therefore, `100` is the beginning of a sequence.

Start counting:

```text
100
```

Check:

```text
101 exists?
```

No.

So:

```text
current_longest = 1
```

Update:

```text
longest = max(0, 1)
```

Therefore:

```text
longest = 1
```

---

## Number = 4

Check:

```text
4 - 1 = 3
```

Does `3` exist?

```text
Yes
```

Therefore, `4` is not the beginning.

Skip it.

---

## Number = 200

Check:

```text
200 - 1 = 199
```

Does `199` exist?

```text
No
```

So `200` is the beginning of a sequence.

Check:

```text
201 exists?
```

No.

Length:

```text
1
```

`longest` remains:

```text
1
```

---

## Number = 1

Check:

```text
1 - 1 = 0
```

Does `0` exist?

```text
No
```

So `1` is the beginning.

Now we keep looking forward:

```text
1 → 2
```

`2` exists.

Then:

```text
2 → 3
```

`3` exists.

Then:

```text
3 → 4
```

`4` exists.

Then:

```text
4 → 5
```

`5` does not exist.

So we have:

```text
1, 2, 3, 4
```

Length:

```text
4
```

Now:

```python
longest = max(1, 4)
```

Therefore:

```text
longest = 4
```

---

## Number = 3

Check:

```text
3 - 1 = 2
```

`2` exists.

So skip `3`.

---

## Number = 2

Check:

```text
2 - 1 = 1
```

`1` exists.

So skip `2`.

---

# Final Answer

At the end:

```python
return longest
```

returns:

```text
4
```

---

# Understanding the Complete Code

Here is your solution with simple comments:

```python
from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        # Put all numbers into a set
        # so we can quickly check if a number exists
        nums_set = set(nums)

        # Store the longest sequence found so far
        longest = 0

        # Check every number
        for num in nums_set:

            # Length of the current sequence
            current_longest = 0

            # If the previous number exists,
            # this number is not the beginning
            if (num - 1) in nums_set:
                continue

            # This is the beginning of a sequence
            current_longest += 1

            # Start from the current number
            current_num = num

            # Keep looking for the next number
            while (current_num + 1) in nums_set:
                current_longest += 1
                current_num += 1

            # Keep the larger of the two values
            longest = max(longest, current_longest)

        return longest
```

---

# Understanding the Algorithm in Simple Words

The algorithm can be summarized in four steps:

### Step 1: Put everything into a set

```python
nums_set = set(nums)
```

This lets us quickly check whether a number exists.

### Step 2: Find the beginning

For every number:

```python
if (num - 1) in nums_set:
    continue
```

If the previous number exists, this is not the beginning.

### Step 3: Count forward

If it is the beginning, keep checking:

```text
num + 1
num + 2
num + 3
...
```

until the sequence ends.

### Step 4: Save the largest length

```python
longest = max(longest, current_longest)
```

At the end, return:

```python
longest
```

---

# Why Does This Solution Work?

The key observation is:

> Every consecutive sequence has exactly one starting number.

For:

```text
1, 2, 3, 4
```

the starting number is:

```text
1
```

because `0` is not present.

Every other number has a previous number:

```text
2 has 1
3 has 2
4 has 3
```

So we only need to start counting from `1`.

This prevents us from checking the same sequence repeatedly.

---

# Why Use a Set?

Without a set, checking:

```python
if 5 in nums:
```

could require searching through the entire array.

With a set:

```python
if 5 in nums_set:
```

the lookup is approximately:

```text
O(1)
```

on average.

Since we perform many existence checks, using a set is the key to achieving the efficient solution.

---

# What About Duplicate Numbers?

Consider:

```text
nums = [1, 2, 2, 3, 4]
```

There are two `2`s.

But when we create the set:

```python
nums_set = set(nums)
```

we get:

```text
{1, 2, 3, 4}
```

The duplicate disappears.

This is actually useful because duplicates should not increase the length of a consecutive sequence.

The answer is still:

```text
4
```

because the sequence is:

```text
1, 2, 3, 4
```

---

# Why Not Sort the Array?

A common solution would be:

```text
[100, 4, 200, 1, 3, 2]
```

Sort it:

```text
[1, 2, 3, 4, 100, 200]
```

Then find the longest consecutive sequence.

That works, but sorting takes:

```text
O(n log n)
```

time.

Our set-based solution does not sort the array.

Instead, it checks whether each next number exists.

So the intended time complexity is:

```text
O(n)
```

---

# Time Complexity

Let's understand why this is `O(n)`.

Creating the set:

```python
nums_set = set(nums)
```

takes:

```text
O(n)
```

We then loop through the numbers:

```python
for num in nums_set:
```

The important part is that we only start the `while` loop for the **beginning** of a sequence.

For example:

```text
1, 2, 3, 4
```

Only `1` starts the search.

We do not separately scan:

```text
2 → 3 → 4
3 → 4
4
```

Therefore, across the entire algorithm, each number is involved in the forward scanning only as part of a sequence that starts at its beginning.

So the overall time complexity is:

```text
O(n)
```

on average.

---

# Space Complexity

We create a set containing the numbers:

```python
nums_set = set(nums)
```

The set can contain up to `n` numbers.

Therefore, the space complexity is:

```text
O(n)
```

---

# Complete Complexity

```text
Time Complexity:  O(n) average
Space Complexity: O(n)
```

This is why this approach is commonly used for the **Longest Consecutive Sequence** problem.

---

# The Pattern to Remember

When you see a problem asking:

> Find the longest consecutive sequence.

Think:

```text
Array
  ↓
Convert to Set
  ↓
Find sequence starting points
  ↓
Count forward
  ↓
Keep the maximum
```

The most important line is:

```python
if (num - 1) in nums_set:
    continue
```

This tells us:

> "If the previous number exists, don't start here."

Then:

```python
while (current_num + 1) in nums_set:
```

means:

> "Keep going while the next number exists."

Together, these two ideas solve the problem efficiently.

---

# Final Takeaway

The entire solution can be remembered with just three ideas:

### 1. Use a set

```python
nums_set = set(nums)
```

So we can quickly check whether numbers exist.

### 2. Only start from the beginning

```python
if (num - 1) in nums_set:
    continue
```

If the previous number exists, skip the current number.

### 3. Keep moving forward

```python
while (current_num + 1) in nums_set:
```

Keep counting until the consecutive sequence ends.

So for:

```text
[100, 4, 200, 1, 3, 2]
```

we find:

```text
1 → 2 → 3 → 4
```

and return:

```text
4
```

The core idea is simple:

> **Use a set to quickly find numbers, start only from numbers that have no predecessor, and count forward to find the longest sequence.**
