db.movies.updateOne(
  { title: "Batman" },
  {
    $addToSet: {
      category: "superhero"
    }
  }
);

db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      category: {
        $each: [
          "villain",
          "comic-based"
        ]
      }
    }
  }
);

db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: {
      category: -1
    }
  }
);

use('exercicios_update');
db.movies.updateMany(
  { title: "Batman" },
  {
    $pull: {
      category: "adventure"
    }
  }
);

db.movies.updateMany(
  { title: "Batman" },
  {
    $pop: {
      category: 1
    }
  }
);

db.movies.updateMany(
  { title: "Batman" },
  {
    $addToSet: {
      category: "action"
    }
  }
);

db.movies.updateMany(
  {
    title: {
      $in: [
        "Batman",
        "Home Alone"
      ]
    }
  },
  {
    $addToSet: {
      category: "90's"
    }
  }
);

db.movies.updateOne(
  { title: "Home Alone" },
  {
    $addToSet: {
      cast: {
        $each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin"
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry"
          },
          {
            "actor": "Daniel Stern"
          }
        ]
      }
    }
  }
);


db.movies.updateOne(
  { title: "Home Alone", "cast.actor": "Daniel Stern" },
  {
    $set: {
      "cast.$.character": "Marv"
    }
  }
);


