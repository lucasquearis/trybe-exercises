db.superheroes.find();

db.superheroes.find({ "aspects.height": { $gt: 180 } });

db.superheroes.find({ "aspects.height": { $lt: 180 } }).count();

db.superheroes.find({ "aspects.height": { $gte: 180 } }).count();

db.superheroes.findOne({ "aspects.height": { $gte: 200 } });

db.superheroes.find({ "aspects.height": { $gte: 200 } }).count();

db.superheroes.find({ "aspects.eyeColor": "green" });

db.superheroes.find({ "aspects.hairColor": { $in: ["No Hair", "Black"] } });

db.superheroes.find({ "aspects.hairColor": { $in: ["No Hair", "Black"] } }).count();

db.superheroes.find({ "aspects.hairColor": { $nin: ["No Hair", "Black"] } }).count();

db.superheroes.find({ "aspects.height": { $not: { $gt: 180 } } }).count();

db.superheroes.find(
  {
     $nor: [
       {race: "Human"},
       {"aspects.height": { $gt: 180 } }
       ] 
  }
);

db.superheroes.find(
  {
    $and: [
      {
        "aspects.weight": {
      $gte: 80, $lte: 100
    }
    },
      {
        race: {
          $in: [ "Human", "Mutant" ]
        }
      },
      {
        publisher: {
          $ne: "DC Comics"
        }
      }
    ]
  }
);

db.superheroes.find({
  race: {
    $exists: false
    }
}).count();

db.superheroes.find({
  "aspects.hairColor": {
    $exists: true
  }
}).count();

db.superheroes.deleteOne({ publisher: "Sony Pictures" });

db.superheroes.deleteMany({
  publisher: "George Lucas"
});