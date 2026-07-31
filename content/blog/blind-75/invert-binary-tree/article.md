---
title: "Invert Binary Tree"
date: "2026-07-31"
excerpt: "Given the root of a binary tree, invert the tree by swapping the left and right child of every node, and return the root of the inverted tree."
category: "Coding"
tags: ["coding", "dsa", "interview", "Blind75"]
featured: false
coverImage: "https://res.cloudinary.com/dnmubeloc/image/upload/v1785480285/blog/invert-binary-tree_r8yj3f.png"
author: "M. Oly Mahmud"
---

# 226. Invert Binary Tree

**Problem Link:** https://leetcode.com/problems/invert-binary-tree/

## Problem Statement

Given the `root` of a binary tree, invert the tree and return its root.

Inverting a binary tree means **swapping the left and right child of every node**.

### Example 1

```
Input:
        4
      /   \
     2     7
    / \   / \
   1   3 6   9

Output:
        4
      /   \
     7     2
    / \   / \
   9   6 3   1
```

### Example 2

```
Input:
    2
   / \
  1   3

Output:
    2
   / \
  3   1
```

### Example 3

```
Input:
[]

Output:
[]
```

---

# Easy Explanation

The problem is much simpler than it looks.

For every node in the tree, we only need to do one thing:

- Swap its left child with its right child.

That's it!

Since every node also has its own left and right subtrees, we repeat the same process for those subtrees.

This makes recursion a perfect solution.

---

# Understanding with an Example

Suppose we have the following tree:

```
        4
      /   \
     2     7
    / \   / \
   1   3 6   9
```

### Step 1

Swap the children of node `4`.

```
        4
      /   \
     7     2
    / \   / \
   6   9 1   3
```

Notice that the root is swapped, but the subtrees themselves are not inverted yet.

---

### Step 2

Go to node `7`.

Current subtree:

```
    7
   / \
  6   9
```

Swap its children.

```
    7
   / \
  9   6
```

---

### Step 3

Go to node `2`.

Current subtree:

```
    2
   / \
  1   3
```

Swap its children.

```
    2
   / \
  3   1
```

---

Now the entire tree becomes

```
        4
      /   \
     7     2
    / \   / \
   9   6 3   1
```

This is exactly the expected answer.

---

# Why Recursion Works

Think about one node.

To invert the tree rooted at this node:

1. Swap its left and right child.
2. Invert the left subtree.
3. Invert the right subtree.

Since every subtree is also a binary tree, we solve the same problem again.

This is exactly what recursion does.

---

# Algorithm

```
invertTree(root)

If root is NULL
    return NULL

Swap root.left and root.right

invertTree(root.left)

invertTree(root.right)

Return root
```

---

# Dry Run

Input

```
    2
   / \
  1   3
```

### First Call

```
invertTree(2)
```

Swap left and right.

```
    2
   / \
  3   1
```

Now recursively visit node `3`.

It has no children, so nothing changes.

Then recursively visit node `1`.

It also has no children.

Return the root.

Final tree:

```
    2
   / \
  3   1
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
    def invertTree(self, root):
        if root is None:
            return None

        # Swap left and right child
        root.left, root.right = root.right, root.left

        # Invert both subtrees
        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
```

---

# Complexity Analysis

### Time Complexity

```
O(n)
```

We visit every node exactly once.

---

### Space Complexity

```
O(h)
```

where `h` is the height of the tree.

- Best/Average Case (Balanced Tree): **O(log n)**
- Worst Case (Skewed Tree): **O(n)**

The extra space comes from the recursion call stack.

---

# Key Takeaways

- Invert means swapping the left and right child of every node.
- Every subtree is also a binary tree.
- Recursion naturally solves this problem.
- The solution is only three simple steps:
  1. Swap.
  2. Invert the left subtree.
  3. Invert the right subtree.
- Each node is visited only once, making the solution very efficient.
