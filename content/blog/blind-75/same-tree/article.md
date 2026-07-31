---
title: "Same Tree"
date: "2026-07-31"
excerpt: "Given the roots of two binary trees p and q, write a function to check if they are the same or not."
category: "Coding"
tags: ["coding", "dsa", "interview"]
featured: false
coverImage: "https://res.cloudinary.com/dnmubeloc/image/upload/v1785479741/blog/same-tree_yj8mfr.png"
author: "M. Oly Mahmud"
---

# Same Tree

**Problem Link:** [https://leetcode.com/problems/same-tree](https://leetcode.com/problems/same-tree)

## Problem

You are given the roots of two binary trees, `p` and `q`.

Your task is to determine whether the two trees are exactly the same.

Two binary trees are considered the same if:

* They have the **same structure**.
* Every corresponding node has the **same value**.

If both conditions are true, return `True`. Otherwise, return `False`.

---

# Example 1

```
Tree p:              Tree q:

      1                   1
     / \                 / \
    2   3               2   3
```

Output

```text
True
```

Both trees have the same structure and the same values.

---

# Example 2

```
Tree p:              Tree q:

      1                   1
     /                     \
    2                       2
```

Output

```text
False
```

The values are the same, but the structure is different.

---

# Example 3

```
Tree p:              Tree q:

      1                   1
     / \                 / \
    2   1               1   2
```

Output

```text
False
```

The structure is the same, but the node values are different.

---

# Easy Explanation

Imagine you are comparing two trees node by node.

At every step, you compare the current node from the first tree with the current node from the second tree.

There are only four possible situations.

### Case 1: Both nodes are `None`

```
p = None
q = None
```

This means both trees end here.

There is no difference.

Return `True`.

---

### Case 2: One node is `None`

```
p = None
q = 5
```

or

```
p = 5
q = None
```

One tree has a node while the other does not.

The structures are different.

Return `False`.

---

### Case 3: Both nodes exist, but values are different

```
p = 4
q = 7
```

Since the values are different, the trees cannot be the same.

Return `False`.

---

### Case 4: Both nodes exist and values are the same

```
p = 5
q = 5
```

The current nodes match.

Now we need to check:

* Are the left subtrees the same?
* Are the right subtrees the same?

This is exactly the same problem again.

So we use **recursion**.

---

# Why Recursion?

A binary tree is made of smaller binary trees.

If the current nodes are equal, then:

* Compare the left children.
* Compare the right children.

Each subtree is simply another "Same Tree" problem.

This makes recursion the perfect solution.

---

# Step-by-Step Dry Run

Suppose we have

```
Tree p:

      1
     / \
    2   3
```

and

```
Tree q:

      1
     / \
    2   3
```

We start with

```
isSameTree(1, 1)
```

The values are equal.

Now compare the left children.

```
isSameTree(2, 2)
```

The values are equal.

Compare their left children.

```
isSameTree(None, None)
```

Return `True`.

Compare their right children.

```
isSameTree(None, None)
```

Return `True`.

So,

```
Left subtree = True
```

Now compare the right children of the root.

```
isSameTree(3, 3)
```

Again,

```
Left -> True
Right -> True
```

Finally,

```
Left subtree  = True
Right subtree = True

True AND True = True
```

The trees are the same.

---

# Algorithm

1. If both nodes are `None`, return `True`.
2. If one node is `None`, return `False`.
3. If the node values are different, return `False`.
4. Recursively compare the left children.
5. Recursively compare the right children.
6. Return `True` only if both left and right subtrees are the same.

---

# Python Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p, q):
        # Case 1: Both nodes are None
        if p is None and q is None:
            return True

        # Case 2: One node is None
        if p is None or q is None:
            return False

        # Case 3: Values are different
        if p.val != q.val:
            return False

        # Case 4: Compare left and right subtrees
        return (
            self.isSameTree(p.left, q.left) and
            self.isSameTree(p.right, q.right)
        )
```

---

# Time Complexity

Each pair of corresponding nodes is visited only once.

**Time Complexity:**

```
O(n)
```

where `n` is the number of nodes in the tree.

---

# Space Complexity

The extra space comes from the recursion call stack.

If the height of the tree is `h`:

```
O(h)
```

* **Balanced tree:** `O(log n)`
* **Skewed tree:** `O(n)`

---

# Key Idea to Remember

At every recursive call, ask these four questions:

1. Are both nodes `None`? → Return `True`.
2. Is only one node `None`? → Return `False`.
3. Are the values different? → Return `False`.
4. Otherwise, recursively compare the **left subtree** and the **right subtree**.

If both subtrees are the same, then the entire trees are the same.
