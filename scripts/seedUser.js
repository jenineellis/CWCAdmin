const mongoose = require("mongoose");
const db = require("../models");

// This file deletes the existing users and creates new ones

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CDCDB", { useNewUrlParser: true }
);

const seedUser = [
  {
    email: "jenine.ellis@gmail.com",
    password: "Test1234",
    userType: "Admin"
  },
  {
    email: "2@gmail.com",
    password: "Test1234",
    userType: "Admin"
  },
  {
    email: "3@gmail.com",
    password: "Test1234",
    userType: "Admin"
  },
  {
    email: "jenine.ellis+Producer1@gmail.com",
    password: "Test1234",
    userType: "Producer"
  },
  {
    email: "jenine.ellis+Producer2@gmail.com",
    password: "Test1234",
    userType: "Producer"
  },
  {
    email: "jenine.ellis+Producer3@gmail.com",
    password: "Test1234",
    userType: "Producer"
  },
  {
    email: "jenine.ellis+Producer4@gmail.com",
    password: "Test1234",
    userType: "Producer"
  },
  {
    email: "jenine.ellis+Caymus@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Silver.Oak.Alexander.Valley@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Silver.Oak.Nappa.Valley@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Hall@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Martin.Ray@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Screaming.Eagle@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Robert.Mondavi@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Quilt@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Flowers@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+Meiomi@gmail.com",
    password: "Test1234",
    userType: "User"
  },
  {
    email: "jenine.ellis+O'Shaughnessy@gmail.com",
    password: "Test1234",
    userType: "User"
  },
];



const seedAPI = async () => {
  try {
    const isDelete = await db.User.remove({})
    if (isDelete) {
      seedUser.map(user => {
        db.User.create(user)
        return user;
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}
seedAPI();
