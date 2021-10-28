db.transactions.aggregate(
  [
    {
      $match : {
      from : "Dave America"
      }
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $match : {
        $or: [
          {
            value: {
              $gt: 700,
              $lt: 6000,
            }
          },
          {
            to: "Lisa Simpson"
          }
        ]
      }
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $match: {
        value: {
        $gt: 1000
        }
      }
    },
    {
      $limit: 3
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $group: {
        _id: '$bank'
      }
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        "total transaçoes": {
          $sum: '$value'
        },
        "quantia transações": {
          $sum: 1
        }
      }
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        "total transações": {
          $sum: "$value"
        }
      }
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        "total transações": {
          $sum: "$value"
        }
      }
    },
    {
      $match: {
        "total transações": {
          $gt: 1000
        }
      }
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $lookup: {
        from: "clients",
        localField: "name",
        foreignField: "from",
        as: "transações"
      }
    }
  ]
);

db.transactions.aggregate(
  [
    {
      $lookup: {
        from: "clients",
        localField: "name",
        foreignField: "to",
        as: "transações"
      }
    },
    {
      $limit: 4
    }
  ]
);

db.clients.aggregate(
  [
    {
      $match: {
        State: "Florida"
      }
    },
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "transações"
      }
    }
  ]
);
