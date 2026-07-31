---
title: "Maximum Depth of Binary Tree"
date: "2026-07-31"
excerpt: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct."
category: "Coding"
tags: ["coding", "dsa", "interview"]
featured: false
coverImage: "https://res.cloudinary.com/dnmubeloc/image/upload/v1785475681/blog/maximum-depth-of-binary-tree_gdnwzq.png"
author: "M. Oly Mahmud"
---

# Maximum Depth of Binary Tree

**Problem Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

---

# Problem

You are given the **root** of a binary tree.

Your task is to find the **maximum depth** of the tree.

**Maximum Depth** means the number of nodes on the longest path from the root to the farthest leaf node.

A **leaf node** is a node that has no left or right child.

---

## Example
<div align="center">

```
        3
       / \
      9   20
         / \
        15  7
```
</div>

The longest paths are:

```
3 → 20 → 15
```

or

```
3 → 20 → 7
```

Both paths contain **3 nodes**.

**Answer = 3**

---

# Key Idea

To know the depth of a node, we need to know:

* the depth of its left subtree
* the depth of its right subtree

Then we simply choose the larger one.

So,

```
Depth of a node
=
1 + max(left depth, right depth)
```

The **1** represents the current node.

---

# Base Case

If there is no node (`None`), its depth is **0**.

```
if root is None:
    return 0
```

---

# Recursive Formula

For every node:

```
depth(node)
=
1 + max(
    depth(node.left),
    depth(node.right)
)
```

This is the only formula you need to remember.

---

# Step-by-Step Example

Consider this tree:

```
        3
       / \
      9   20
         / \
        15  7
```

### Step 1

Go to node **15**.

```
15
```

It has no children.

```
left = 0
right = 0

depth = 1 + max(0,0)
      = 1
```

---

### Step 2

Go to node **7**.

```
7
```

It is also a leaf.

```
depth = 1
```

---

### Step 3

Now calculate node **20**.

```
      20
     /  \
   15    7
```

We already know

```
depth(15) = 1
depth(7) = 1
```

So

```
depth(20)

= 1 + max(1,1)

= 2
```

---

### Step 4

Node **9** is a leaf.

```
depth(9) = 1
```

---

### Step 5

Now calculate the root.

```
        3
       / \
      9   20
```

```
left depth = 1

right depth = 2
```

Therefore

```
depth(3)

= 1 + max(1,2)

= 3
```

Final answer:

```
3
```

---

# Algorithm

1. If the current node is `None`, return **0**.
2. Find the depth of the left subtree.
3. Find the depth of the right subtree.
4. Return

```
1 + max(left depth, right depth)
```

---

# Algorithm (Pseudocode)

```text
function maxDepth(node)

    if node is None
        return 0

    leftDepth = maxDepth(node.left)

    rightDepth = maxDepth(node.right)

    return 1 + max(leftDepth, rightDepth)
```

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
    def maxDepth(self, root):
        if root is None:
            return 0

        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)

        return 1 + max(left, right)
```

---

# Dry Run

Tree:

```
        1
       / \
      2   3
     /
    4
```

### Calculate node 4

```
left = 0
right = 0

return 1
```

---

### Calculate node 2

```
left = 1
right = 0

return 2
```

---

### Calculate node 3

```
left = 0
right = 0

return 1
```

---

### Calculate node 1

```
left = 2
right = 1

return 1 + max(2,1)

= 3
```

Output:

```
3
```

---

# Why Does Recursion Work?

Each node asks the same question:

> "What is the maximum depth of my left subtree?"
>
> "What is the maximum depth of my right subtree?"

Once it gets both answers, it simply returns:

```
1 + max(left depth, right depth)
```

Since every node follows the same rule, recursion is a natural solution.

---

# Time Complexity

We visit every node exactly once.

```
Time Complexity: O(n)
```

where **n** is the number of nodes in the tree.

---

# Space Complexity

The extra space comes from the recursion call stack.

* **Worst case (skewed tree):** `O(n)`
* **Balanced tree:** `O(log n)`

---

# Key Formula to Remember

```
Base Case:
if node is None:
    return 0

Recursive Formula:
depth(node)
=
1 + max(
    depth(node.left),
    depth(node.right)
)
```

This single formula is enough to solve the problem. The recursion first computes the depth of the left and right subtrees, then adds **1** for the current node and returns the larger depth.
