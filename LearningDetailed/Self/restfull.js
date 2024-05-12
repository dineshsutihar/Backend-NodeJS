// download a smaple data form https://www.mockaroo.com/
// perform these operation
// 1. get/  -> to retrive all the data from
// 2. get/id -> to retrive data of specific id
// 3. post/ -> ro create a new user
// 4. put/id -> to update the user detail
// 5. delete/id -> to delete specific id detials

const express = require("express");
const fs = require("fs");
const user = require("./customer.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return i;
    }
  }
  return -1;
}

app.get("/users", (req, res) => {
  res.json(user);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = user.find((user) => user.id == id);
  if (!data) res.status(411).send("User not found");
  res.json(data);
});

app.post("/user", (req, res) => {
  const newUser = {
    id: user.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
  };
  user.push(newUser);
  fs.writeFile("customer.json", JSON.stringify(user), (err) => {
    if (err) err;
  });
  res.send(`Sucessfull User Created`);
});

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const index = findIndex(user, id); //to find the index of array
  if (index == -1) {
    res.status(411).send("Data not found");
  } else {
    user[index] = {
        id:Number(req.params.id),
      first_name: req.body.first_name
        ? req.body.first_name
        : user[index].first_name,
      last_name: req.body.last_name
        ? req.body.last_name
        : user[index].last_name,
      email: req.body.email ? req.body.email : user[index].email,
      gender: req.body.gender ? req.body.gender : user[index].gender,
    };
    fs.writeFile("customer.json", JSON.stringify(user), (err) => {
      if (err) err;
    });

    res.send(`User successfully Modified of id ${id}`);
  }

//   Delete of id
  app.delete("/user/:id",(req,res)=>{
    const id = req.params.id;
    const index = findIndex(user, id); //to find the index of array
    if (index == -1) {
      res.status(411).send("Data not found");
    } else {
        console.log(user[index]);
        user.splice(index,1);
        fs.writeFile("customer.json", JSON.stringify(user), (err) => {
            if (err) err;
          });
          res.send(`User successfully Modified of id ${id}`);
    }
  })
});

app.listen(3001, () => {
  console.log("App is listining at port 3001: ");
});
