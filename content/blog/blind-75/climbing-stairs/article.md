---
title: "Climbing Stairs"
date: "2026-07-31"
excerpt: "You are climbing a staircase. Each time you can climb either 1 or 2 steps. Return the total number of distinct ways to reach the top."
category: "Coding"
tags: ["coding", "dsa", "interview"]
featured: false
coverImage: "https://res.cloudinary.com/dnmubeloc/image/upload/v1785480924/blog/climbing-stairs_kgfi1a.png"
author: "M. Oly Mahmud"
---

# Climbing Stairs

**Problem Link:** https://leetcode.com/problems/climbing-stairs/

## Problem Statement

You are climbing a staircase.

It takes **`n`** steps to reach the top.

Each time, you can climb either:

- **1 step**
- **2 steps**

Your task is to return the total number of **different ways** to reach the top.

---

## Example 1

<div align="center">

```text
Input: n = 2

Output: 2
```

</div>

There are two ways:

<div align="center">

```text
1 + 1
2
```

</div>

---

## Example 2

<div align="center">

```text
Input: n = 3

Output: 3
```

</div>

There are three ways:

<div align="center">

```text
1 + 1 + 1
1 + 2
2 + 1
```

</div>

---

# Easy Intuition

Let's think about how we can reach the **last stair**.

Suppose we want to reach stair **`n`**.

There are only two possibilities.

### Option 1

The last move was **1 step**.

That means before taking the last step, we were standing on stair:

<div align="center">

```text
n - 1
```

</div>

The number of ways to reach `n - 1` is already known.

---

### Option 2

The last move was **2 steps**.

That means before taking the last jump, we were standing on:

<div align="center">

```text
n - 2
```

</div>

The number of ways to reach `n - 2` is also already known.

---

Since these are the only two possibilities,

the total number of ways becomes:

<div align="center">

```text
ways(n) = ways(n-1) + ways(n-2)
```

</div>

This is the main idea behind the solution.

---

# Dynamic Programming Idea

Let

<div align="center">

```text
dp[i] = Number of different ways to reach stair i
```

</div>

From the previous observation,

<div align="center">

```text
dp[i] = dp[i-1] + dp[i-2]
```

</div>

This is our DP transition.

---

# Base Cases

Before filling the DP array, we need two starting values.

### Stair 1

There is only one way.

<div align="center">

```text
1
```

</div>

So,

<div align="center">

```text
dp[1] = 1
```

</div>

---

### Stair 2

There are two ways.

<div align="center">

```text
1 + 1

2
```

</div>

So,

<div align="center">

```text
dp[2] = 2
```

</div>

---

# DP Table Example

Suppose

<div align="center">

```text
n = 5
```

</div>

Then our DP table looks like this.

| Stair | Ways |
|------:|----:|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 5 |
| 5 | 8 |

---

Let's see how these values are calculated.

For stair **3**

<div align="center">

```text
dp[3]

= dp[2] + dp[1]

= 2 + 1

= 3
```

</div>

---

For stair **4**

<div align="center">

```text
dp[4]

= dp[3] + dp[2]

= 3 + 2

= 5
```

</div>

---

For stair **5**

<div align="center">

```text
dp[5]

= dp[4] + dp[3]

= 5 + 3

= 8
```

</div>

---

Notice something interesting?

The sequence becomes

<div align="center">

```text
1
2
3
5
8
13
21
...
```

</div>

This is exactly the **Fibonacci pattern**.

---

# Algorithm

1. If `n` is 1 or 2, return `n`.
2. Create a DP array of size `n + 1`.
3. Set:
   - `dp[1] = 1`
   - `dp[2] = 2`
4. Loop from `3` to `n`.
5. For each stair,

<div align="center">

```text
dp[i] = dp[i-1] + dp[i-2]
```

</div>

6. Return `dp[n]`.

---

# Python Solution (DP)

<div align="center">

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n

        dp = [0] * (n + 1)

        dp[1] = 1
        dp[2] = 2

        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[n]
```

</div>

---

# Dry Run

Suppose

<div align="center">

```text
n = 5
```

</div>

Initially

<div align="center">

```text
dp = [0, 1, 2, 0, 0, 0]
```

</div>

---

### i = 3

<div align="center">

```text
dp[3] = dp[2] + dp[1]

      = 2 + 1

      = 3
```

</div>

Now

<div align="center">

```text
dp = [0, 1, 2, 3, 0, 0]
```

</div>

---

### i = 4

<div align="center">

```text
dp[4] = dp[3] + dp[2]

      = 3 + 2

      = 5
```

</div>

Now

<div align="center">

```text
dp = [0, 1, 2, 3, 5, 0]
```

</div>

---

### i = 5

<div align="center">

```text
dp[5] = dp[4] + dp[3]

      = 5 + 3

      = 8
```

</div>

Final DP array

<div align="center">

```text
[0, 1, 2, 3, 5, 8]
```

</div>

Answer

<div align="center">

```text
8
```

</div>

---

# Space Optimization

If you look carefully,

To calculate

<div align="center">

```text
dp[i]
```

</div>

we only need

<div align="center">

```text
dp[i-1]
```

</div>

and

<div align="center">

```text
dp[i-2]
```

</div>

So we don't actually need the whole DP array.

We only need two variables.

---

# Optimized Python Solution

<div align="center">

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n

        prev2 = 1
        prev1 = 2

        for _ in range(3, n + 1):
            current = prev1 + prev2
            prev2 = prev1
            prev1 = current

        return prev1
```

</div>

---

# Dry Run (Optimized)

Initially

<div align="center">

```text
prev2 = 1
prev1 = 2
```

</div>

---

For stair 3

<div align="center">

```text
current = 2 + 1 = 3

prev2 = 2
prev1 = 3
```

</div>

---

For stair 4

<div align="center">

```text
current = 3 + 2 = 5

prev2 = 3
prev1 = 5
```

</div>

---

For stair 5

<div align="center">

```text
current = 5 + 3 = 8

prev2 = 5
prev1 = 8
```

</div>

Final answer

<div align="center">

```text
8
```

</div>

---

# Complexity Analysis

## DP Solution

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`

---

## Space Optimized Solution

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

# Key Takeaway

Whenever you want to reach a stair, your **last move** must be one of these:

- A **1-step jump** from the previous stair.
- A **2-step jump** from two stairs before.

Therefore,

<div align="center">

```text
dp[i] = dp[i-1] + dp[i-2]
```

</div>

This simple observation turns the problem into one of the most classic **Dynamic Programming** problems, following the famous **Fibonacci sequence** pattern.
