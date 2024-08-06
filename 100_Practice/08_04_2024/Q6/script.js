// Explain path module of java script in detail

// Path module is a built-in module in Node.js that provides a way of working with directories and file paths. It can be accessed using the require() function.

// The path module provides a number of useful methods for working with file paths, such as:

const path = require("path");

// path.join(): This method joins two or more path segments together, resolving any relative paths. For example:
const fullPath = path.join(__dirname, "file.txt");
console.log(fullPath);

// path.resolve(): This method resolves an absolute path. It takes a sequence of paths or path segments and resolves them into an absolute path. For example:
const resolvedPath = path.resolve("file.txt");
console.log(resolvedPath);

// path.basename(): This method returns the last portion of a path. For example:
const basename = path.basename("/path/to/file.txt");
console.log(basename);

// path.dirname(): This method returns the directory name of a path. For example:
const dirname = path.dirname("/path/to/file.txt");
console.log(dirname);

// path.extname(): This method returns the extension of a path. For example:
const extname = path.extname("/path/to/file.txt");
console.log(extname);

// path.parse(): This method returns an object containing the individual components of a path. For example:
const parsedPath = path.parse("/path/to/file.txt");
console.log(parsedPath);

// path.normalize(): This method normalizes a path, resolving any '..' and '.' segments. For example:
const normalizedPath = path.normalize("/path/to/../file.txt");
console.log(normalizedPath);