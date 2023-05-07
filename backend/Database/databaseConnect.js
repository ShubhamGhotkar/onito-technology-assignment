const mongoose = require("mongoose");
const DB = `mongodb+srv://shubham:Pass%40123@cluster0.ttxd35t.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(DB, {})
  .then(() => {
    console.log(`mongoDB connected Sucessfully`);
  })
  .catch(() => {
    console.log(`mongoDb not connected `);
  });
