db.movies.updateMany( { title: "Batman" }, { $set: { imdbRating: 7.7 } });

db.movies.update(
  { title: "Godzilla" },
  {
    $set: {
      budget: 1
    }
  }
);

db.movies.update(
  { title: "Home Alone" },
  {
    $set: {
        budget: 15 ,
        imdbRating: 5.5
    }
  }
);

db.movies.update(
  { title: "Batman" },
  {
    $inc: {
      imdbRating: 2
    }
  }
);

db.movies.update(
  { title: "Home Alone" },
  {
    $inc: {
      imdbRating: 5
    }
  }
);

db.movies.update(
  { title: "Batman" },
  {
    $mul: {
      imdbRating: 4
    }
  }
);

db.movies.update(
  { title: "Batman" },
  {
    $rename: {
      budget: "estimatedBudget"
    }
  }
);

db.movies.update(
  { title: "Home Alone" },
  {
    $min: {
      budget: 5
    }
  }
);

db.movies.update(
  { title: "Godzilla" },
  {
    $max: {
      imdbRating: 8.6
    },
    $set: {
      "category.1": "thriller"
    }
  }
);

db.movies.updateOne(
  { title: "Home Alone" },
  {
    $currentDate: {
      lastUpdated: { $type: "timestamp" }
    }
  }
);

db.movies.updateMany(
  {},
  {
    $set: {
      sequels: 0
    }
  }
);

db.movies.updateMany(
  {},
  {
    $unset: {
      budget: "",
      estimatedBudget: ""
    }
  }
);

db.movies.updateMany(
  {
    $or: [
    { title: "Batman" },
    { title: "Home Alone" }
    ]
  },
  {
    $max: {
      imdbRating: 17
    }
  }
);

db.xmen.updateMany(
  { class: "unknown" },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    },
    $unset: {
      class: ""
    }
  }
);

db.xmen.updateMany(
  {},
  {
    $rename: {
      name: "hero_name",
      true_name: "full_name"
    },
    $set: {
      power: 100
    },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    },
  }
);

db.xmen.updateMany(
  { class: {
    $in: ["omega", "gama"]
  } },
  {
    $max: {
      power: 500
    },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);

db.xmen.updateMany(
  { class: "gama" },
  {
    $min: {
      power: 300
    },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);

db.xmen.updateMany(
  { $exists: {
    class: false
  } },
  {
    $inc: {
      power: -100
    },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);

db.xmen.updateMany(
  {
    $or: [
      { occupation: "Senior Staff", power: { $gt: 100 } },
      { occupation: "Junior Staff", power: { $gt: 200 } }
    ]
  },
  {
    $set: {
      areas: ["Students Room"]
    },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);

db.xmen.updateMany(
  {
    occupation: "Junior Staff"
  },
  {
    $set: {
      areas: ["Outside"]
    },
    $currentDate: {
      lastUpdate: { $type: "timestamp" }
    }
  }
);