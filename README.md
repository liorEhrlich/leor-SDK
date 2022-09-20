  <h1 align="center">💍 Lord of the Rings SDK</h1>
  
<br />

# 💡 What is Lord of the Rings SDK?

This project is an SDK over the [Lord of the rings API V2](https://the-one-api.dev/).

<br />

# 🤸 Getting Started

## 💾 Installation
Install leor-lotr via [npm](https://www.npmjs.com/package/leor-lotr):

```shell
npm i leor-lotr
```

## 🏇 First run

First we create a new instance of the exported class. This instance will have all the methods for fetching current data on LOTR.

```javascript
const LOTRClient = require("leor-lotr");
const client = new LOTRClient("API_KEY");

const getAllLOTRBooks = async () => {
  const books = await client.books.get();
  console.log("These are all the LOTR books: ", books);
};

getAllLOTRBooks();
```

<br />


 # 🧪 Tests

```shell

npm run test

```

<br />


 # 📚 Supported features
 
 ## The available routes
 
Method  | Response
------------- | -------------
``` books.get() ```  | List of all "The Lord of the Rings" books
``` books.get({id: ID}) ``` | Request one specific book
``` books.get({id: ID, include_child: true}) ``` | Request all chapters of one specific book
``` movies.get() ```  | List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
``` movies.get({id: ID}) ``` | Request one specific movie
``` movies.get({id: ID, include_child: true}) ``` | Request all movie quotes for one specific movie (only working for the LotR trilogy)
``` characters.get() ```  | List of characters including metadata like name, gender, realm, race and more
``` characters.get({id: ID}) ``` | Request one specific character
``` characters.get({id: ID, include_child: true}) ``` | Request all movie quotes of one specific character
``` quote.get() ```  | List of all movie quotes
``` quote.get({id: ID}) ``` | Request one specific movie quote
``` chapter.get() ```  | List of all book chapters
``` chapter.get({id: ID}) ``` | Request one specific book chapter

 ## Pagination
 
Method  | Response
------------- | -------------
``` books.get({ limit: 1 }) ```  | Limit number of results
``` books.get({ offset: 1 }) ```  | Get results with offset
``` books.get({ page: 1 }) ```  | Get first page of results

## Sorting
 
Method  | Response
------------- | -------------
``` books.get({ sort: {field: string, dir: 'asc' or 'desc' } }) ```  | Sort by field in ascending or descending order
  
<br />

# 🗺 Roadmap

This is Lord of the rings SDK at its first version. There are still many features ahead.
You can stay update with our roadmap in this [Trello board](https://trello.com/b/b2asakZV/lord-of-the-rings-sdk)

