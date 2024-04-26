// FileSystem Module in Node.js is used to perform read/write operations on files.
// We can include the File System module by using the require() method.

const fs = require('fs');

// Create a file
fs.writeFile('Hey.txt', 'Hello this is Dinesh Kumar Sutihar \n',(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('File Created Successfully');
    }
})


// Append Data to the file
fs.appendFile('Hey.txt', 'I am a Software Developer', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Data Appended Successfully');
    }
})

// Read Data from the file
fs.readFile('Hey.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})

// Rename a file
fs.rename('Hey.txt', 'Hello.txt', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('File Renamed Successfully');
    }
})


//Copy a file
fs.copyFile('Hello.txt', './copy/HelloCopy.txt', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('File Copied Successfully');
    }
})


// Delete a file
fs.unlink('./copy/HelloCopy.txt', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('File Deleted Successfully');
    }
})

//RM Dir
fs.rm('./copy',{recursive:true}, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Directory Deleted Successfully');
    }
}
)
