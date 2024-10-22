const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const recipeList = [
  {
    name: "Biryani",
    ingredients:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, officia.",
    time: "45 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
  {
    name: "Matar Paneer",
    ingredients:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, officia.",
    time: "45 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
  {
    name: "Tandoori Paneer",
    ingredients:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, officia.",
    time: "45 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
  {
    name: "Afghani Paneer",
    ingredients:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, officia.",
    time: "45 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
  {
    name: "Maggi",
    ingredients:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, officia.",
    time: "2 minutes",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique laboriosam quod aliquid laborum doloremque ex, necessitatibus fuga, cumque aut est quam harum sapiente reiciendis ratione animi perspiciatis consequuntur distinctio! Ipsam, aperiam. Distinctio ab soluta fugiat adipisci quis in dolorem!",
  },
];

app.get("/api/getter", (req, res) => {
  res.json(recipeList);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
