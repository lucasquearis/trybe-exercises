db.restaurants.find({ borough: {$in: ["Queens", "Staten Island", "Bronx"]} }).count();

db.restaurants.find({cuisine: {$ne: "American"}}).count();

db.restaurants.find({rating: { $gte: 8 }}).count();

db.restaurants.find({rating: { $lt: 4 }}).count();

db.restaurants.find({rating: { $in: [5, 6, 7] }}).count();

db.restaurants.find({ rating: { $not: { $lte: 5 } } }).count();

db.restaurants.find( {$or: [ {rating: { $gte: 6 }}, { borough: "Brooklyn"} ] }).count();

db.restaurants.find({$and: [{borough: {$in: ["Queens", "Staten Island", "Brooklyn"]}}, { rating: { $gt: 4 } }]}).count();

db.restaurants.find({$nor: [{ rating: 1 }, { cuisine: "American" }]}).count();

db.restaurants.find(
  { 
    $and: [
      {
        $or: [{ rating: {$gt: 6, $lt: 10}} ]
      },
      {
        $or: [{ borough: "Brooklyn" }, { cuisine: "Delicatessen" }]
      }
    ]
  }
).count();

db.restaurants.find().sort({name: 1});

db.restaurants.find().sort({rating: -1});

db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });

db.restaurants.deleteMany({ cuisine: "American" });