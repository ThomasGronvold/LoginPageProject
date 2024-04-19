import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const API_URL = "http://localhost:5173";

app.get("/", async () => {
  try {
    const response = await axios.get(`${API_URL}/api/user`);
    console.log(response);
  } catch (err) {
    console.log(err);
    
  }
})

app.listen(port, () => {
  console.log(`Successfully started on port: ${port}`);
});
