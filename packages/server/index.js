const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = 4000;

mongoose.connect(
  `mongodb://localhost:27017/YOUR-DB-NAME`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to mongo")
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:3000" }));

app.use((err, _, res) => {
  console.log(err);
  res.send({ error: err.message });
});

app.listen(PORT, console.log(`server running on ${PORT}`));
