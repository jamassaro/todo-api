const express = require("express");
const app = express();
const cors = require("cors");
const { default: helmet } = require("helmet");
const  privateRouter  = require("./routes/private-routes");

require("dotenv").config();
app.use(helmet({}));
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.status(204).end())
app.use('/api', privateRouter)




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});