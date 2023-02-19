---
sidebar_position: 1
---

# Configurations
Let's say you have an e-commerce application that enables user comments on a blog page and on a product page. You would probably create a table in your database that holds the comments, with a foreign key to the user who made the comment. For performance reasons you would keep the comments count on the object that is being commented, alongside a reference to a "relevant" comment. You would add those fields to both the blog page table and the product page. Every change you would make the comments system design would have to be manually updated to those two tables.



We can do much better by creating a protocol called *commentable* that will be responsible for:

- Defining the schema and creating the tables needed for the comment feature, ie CommentableEntry
- Adding the proper fields to every object that is *commentable*, we call them projected field, in this case they are named CommentableRelevantEntry, CommentableCount
- The security and ACL for the CommentableEntry table and the fields 
- For defining object level behaviour to its own object classes
- For reacting to object events, for example beforeSave, afterSave, beforeDelete, afterDelete and make sure the object is at all time coherent with the protocol rules

By doing so we have packaged the ability to comment into one component that can be reused easily across the project.