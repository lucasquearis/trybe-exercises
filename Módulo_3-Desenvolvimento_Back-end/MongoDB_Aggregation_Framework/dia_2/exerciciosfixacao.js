db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$from", "$$user_name"]
            }
          },
        },
        {
          $project: {
            _id: 0,
            from: 0,
            bank: 0
          }
        }
      ],
      as: "clientes_transactions"
    }
  },
]);

db.clients.aggregate([
  {
    $sort: {
      State: 1
    }
  },
  {
    $limit: 4
  },
  {
    $lookup: {
      from: "transactions",
      let: {
        user_name: "$name"
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$to", "$$user_name"]
            }
          }
        },
        {
          $project: {
            _id: false,
            to: false,
            bank: false,
          }
        }
      ],
      as: "transacoes_recebidas"
    }
  }
]);

db.clients.aggregate([
  {
    $match: {
      State: "Florida"
    },
  },
  {
      $lookup: {
        from: "transactions",
        let: {
          user_name: "$name"
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$to", "$$user_name"]
              }
            }
          },
          {
            $project: {
              _id: 0,
              to: 0,
              bank: 0,
            }
          }
        ],
        as: "transacoes_recebidas"
      }
  },
  {
    $project: {
      _id: 0,
    }
  }
]);

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        valor_total_produto: {
          $add: ["$purchase_price", "$taxes"]
        },
        sale_price: 1
      }
    }
  ]
);

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        lucro_venda: {
          $subtract: [
            "$sale_price", 
            {
              $add: ["$purchase_price", "$taxes"]
            }
          ]
        },
        valor_total_produto: {
          $add: ["$purchase_price", "$taxes"]
        },
        sale_price: 1
      }
    }
  ]
);

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        menor_preco: {
          $floor: "$sale_price"
        }
      }
    }
  ]
);

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        menor_preco: {
          $ceil: {
            $subtract: [
              "$sale_price",
              "$purchase_price"
            ]
          }
        }
      }
    }
  ]
);

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        menor_preco: {
          $abs: {
            $subtract: [
              "$sale_price",
              {
                $add: ["$taxes", "$purchase_price"]
              }
            ]
          }
        }
      }
    }
  ]
);

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        valor_total_estoque: {
          $multiply: ["$quantity", "$sale_price"]
        }
      }
    }
  ]
);

db.products.aggregate(
  [
    {
      $project: {
        _id: 0,
        name: 1,
        lucro_total_estoque: {
          $multiply: ["$quantity", {
            $subtract: ["$sale_price", {
              $add: ["$taxes", "$purchase_price"]
            }]
          }]
        }
      }
    }
  ]
);

db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      new_price: {
subtract: [
          "$sale_price", {
multiply: [{ $divide: [50, 100] }, "$sale_price"
            ]
          }
        ]
      }
    }
  }
]);

use('storage');
db.products.aggregate([
  {
addFields: {
      stock_total_value: {
multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);
