# 🎉 Galaxy Project.

# 🚀 How to get started

1. Run in your cmd: `git clone https://github.com/elik56a/galaxy`
2. Install all packages with `yarn install-dev`
3. Finally , run code with `yarn dev`

---

## Application Conventions

- Functions and variables names ( [lower camel-case](https://en.wikipedia.org/wiki/Camel_case 'lower camel-case') )

```javascript
// functions
const myCoolFunction = () => {};

// vars
const myObject = { hellow: 'world' };
const myString = 'hello world';
const myArray = [1, 2, 3];
```

- Config Objects/Arrays ( upper-case )
  > when creating config objects - the convention is to use all upper case characters

```javascript
const APP_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
  },
};
```

- Files names (kabab - case)

> 1.  File name speared by comma , with lower case characters -> my-file.entity.ts.
> 2.  All files with typescript extension (ts).
> 3.  After file name , add the file entity(store, controller. etc..) , before the extension

Examples:

> auth.store.ts

> auth.controller.ts

> db-connection.plugin.ts

---
