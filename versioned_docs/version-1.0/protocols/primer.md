---
sidebar_position: 1
---

# Primer - What is a protocol?

In many object oriented programming language a protocol describes what an unknown type of object can do. The same way a Servable protocol describes what an unknown database object can do. 

A protocol always applies to a class, which is the Servable representation of a database table. 

By applying a protocol to a class we make it conform to the the protocol's schema, meaning the class' schema will be updated to include the extra fields the protocol needs to work. Even more, the protocol listens to all the events (triggers) sent to the class (beforeSave, afterSave, beforeDelete, afterDelete, ...) so that the class' behavior conforms to the protocol's behavior. The protocol does not cancel the class' own desired behavior, it gets executed in a chain alongside all the class' protocols triggers.

A class can have multiple protocols.
Every class can customize the way it uses a protocol to an extent (protocol parameters).
The same way a protocol can be applied to multiple classes.

A protocol has no knowledge of the class it's being applied to. It simply manipulates it according to the declared fields and parameters.


## A better way to group repeatable logic on a database object
Let's say you have an e-commerce application that enables user comments on a blog page and on a product page. You would probably create a table in your database that holds the comments, with a foreign key to the user who made the comment. For performance reasons you would keep the comments count on the object that is being commented, alongside a reference to a "relevant" comment. You would add those fields to both the blog page table and the product page. Every change you would make the comments system design would have to be manually updated to those two tables.

We can do much better by creating a protocol called *commentable* that will be responsible for:

- Defining the schema and creating the tables needed for the comment feature, ie CommentableEntry
- Adding the proper fields to every object that is *commentable*, we call them projected field, in this case they are named CommentableRelevantEntry, CommentableCount
- The security and ACL for the CommentableEntry table and the fields 
- For defining object level logic to its own object classes
- For reacting to object events, for example beforeSave, afterSave, beforeDelete, afterDelete and make sure the object is at all time coherent with the protocol rules

By doing so we have packaged the ability to comment into one component that can be reused easily across the project.

A protocol does not stop at the server. Some protocols have a client counterpart that acts in tandem with the server. If we consider the Commentable protocol, it can be distributed in a commentable-server npm package, alongside a commentable-react package that contains React components that can be called on any object that conforms to the protocol. The components include, for a commentable object:
- **CommentableList** that displays a paginated list of comments 
- **CommentableComment** that displays a paginated list of comments
- **CommentableCommentsCount** that displays the total number of comments 
- **CommentableCommentsExcerpt** that displays an excerpt

By making an object Commentable, you're adding not only database fields and server methods to it, you are also taking advantage of a front library made for its capacity.


## Lifecycle
```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#fff',
      'primaryTextColor': '#323232',
      'primaryBorderColor': '#323232',
      'lineColor': '#323232',
      'fontFamily': 'Space Grotesk'
    }
  }
}%%
stateDiagram
    [*] --> beforeInit
    beforeInit --> seed
    seed --> afterInit
    afterInit --> [*]
```