db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
          $divide: [
            {
              $subtract: [new Date(), "$dataNascimento"]
            },
            {
              $multiply: [86400000, 365]
            }
          ]
          }
        }
      }
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
          $divide: [
            {
              $subtract: [new Date(), "$dataNascimento"]
            },
            {
              $multiply: [86400000, 365]
            }
          ]
          }
        }
      }
    },
    {
      $match: {
        idade: {
          $gte: 18,
          $lte: 25
        }
      }
    },
    {
      $count: 'totalClientes'
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
          $divide: [
            {
              $subtract: [new Date(), "$dataNascimento"]
            },
            {
              $multiply: [86400000, 365]
            }
          ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        let: { clienteId: "$clienteId" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$clienteId", "$$clienteId"]
              }
            }
          },
        ],
        as: "compras"
      }
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
          $divide: [
            {
              $subtract: [new Date(), "$dataNascimento"]
            },
            {
              $multiply: [86400000, 365]
            }
          ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        let: { clienteId: "$clienteId" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$clienteId", "$$clienteId"]
              }
            }
          },
        ],
        as: "compras"
      }
    },
    {
      $match: {
        "compras.dataVenda": {
          $gte: ISODate('2019-06-01'),
          $lte: ISODate('2020-03-31')
        }
      }
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
          $divide: [
            {
              $subtract: [new Date(), "$dataNascimento"]
            },
            {
              $multiply: [86400000, 365]
            }
          ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        let: { clienteId: "$clienteId" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$clienteId", "$$clienteId"]
              }
            }
          },
        ],
        as: "compras"
      }
    },
    {
      $match: {
        "compras.dataVenda": {
          $gte: ISODate('2019-06-01'),
          $lte: ISODate('2020-03-31')
        }
      }
    }
  ]
).itcount();

db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
          $divide: [
            {
              $subtract: [new Date(), "$dataNascimento"]
            },
            {
              $multiply: [86400000, 365]
            }
          ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        let: { clienteId: "$clienteId" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$clienteId", "$$clienteId"]
              }
            }
          },
        ],
        as: "compras"
      }
    },
    {
      $match: {
        "compras.dataVenda": {
          $gte: ISODate('2019-06-01'),
          $lte: ISODate('2020-03-31')
        }
      }
    },
    {
      $group: {
        _id: "$endereco.uf",
        quantia: { $sum: 1 }
      }
    },
    {
      $sort: {
        quantia: -1
      }
    },
    {
      $limit: 5
    }
  ]
);

db.vendas.aggregate(
  [
    {
      $unwind: "$itens"
    },
    {
      $match: {
        "itens.nome": "QUEIJO PRATO"
      }
    },
    {
      $group: {
        _id: "$clienteId",
        total: { $sum: "$itens.quantidade" }
      }
    },
    {
      $sort: { total: -1 }
    },
    {
      $lookup: {
        from: "clientes",
        localField: "_id",
        foreignField: "clienteId",
        as: "cliente"
      }
    },
    {
      $unwind: "$cliente"
    },
    {
      $project: {
        nomeCliente: "$cliente.nome",
        uf: "$cliente.endereco.uf",
        totalConsumido: "$total",
        _id: 0
      }
    },
    {
      $sort: {
        totalConsumido: -1
      }
    },
    {
      $limit: 1
    }
  ]
);

