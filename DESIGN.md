# Design Strategy

The LOTR API consists repetitive routes pattern. 
In order to avoid code repetition, I created a prototype class that will support these routes.
In case there is a new route to support in the API, all we need to do is the add it the the exported Client properties, add tests, and all fetching and pagination options will be supported.

# Project Components

### src/index.js

The exported Client class, that holds the following properties:
- Movies
- Books
- Chapters
- Characters
- Quotes

### src/Controller.js

The prototype class that hold the methods for fetching data, and pagination support.

### tests

The tests are written in Jest, and cover all integration tests. 
