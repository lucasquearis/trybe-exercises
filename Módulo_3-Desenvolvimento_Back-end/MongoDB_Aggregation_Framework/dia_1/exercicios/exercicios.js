db.clientes.aggregate(
  [
    {
      $match: {
        sexo: "MASCULINO"
      }
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $match: {
        sexo: "FEMININO",
        dataNascimento: {
          $gte: ISODate('1995-01-01'),
          $lte: ISODate('2005-12-31')
        }
      }
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $match: {
        sexo: "FEMININO",
        dataNascimento: {
          $gte: ISODate('1995-01-01'),
          $lte: ISODate('2005-12-31')
        }
      }
    },
    {
      $limit: 5
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $match: {
        "endereco.uf": "SC"
      }
    },
    {
      $group: {
        _id: "SC",
        count: {
          $sum: 1
        }
      }
    },
  ]
);

db.clientes.aggregate(
  [
    {
      $group: {
        _id: "$sexo",
        total: {
          $sum: 1
        }
      }
    }
  ]
);

db.clientes.aggregate(
  [
    {
      $group: {
        _id: {
          sexo: "$sexo",
          uf: "$endereco.uf"
          },
        total: {
          $sum: 1
        }
      }
    },
  ]
);

db.vendas.aggregate(
  [
    {
      $match: {
        status: {
          $in: ["ENTREGUE", "EM SEPARACAO"]
        }
      }
    },
    {
      $lookup: {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "vendas_cliente"
      }
    },
    {
      $group: {
        _id: {
          total: "$valorTotal",
          nome: "$vendas_cliente.nome"
        }
      }
    }
  ]
);

db.vendas.aggregate(
  [
    {
      $match: {
        status: {
          $in: ["ENTREGUE", "EM SEPARACAO"]
        }
      }
    },
    {
      $lookup: {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "vendas_cliente"
      }
    },
    {
      $unwind: "$vendas_cliente"
    },
    {
      $group: {
        _id: {
          total: "$valorTotal",
          nome: "$vendas_cliente.nome"
        }
      }
    },
    {
      $sort: {
        valorTotal: -1
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
      $match: {
        status: {
          $in: ["ENTREGUE", "EM SEPARACAO"]
        },
        dataVenda: {
          $gte: ISODate('2019-01-01'),
          $lte: ISODate('2019-12-31')
        }
      }
    },
    {
      $lookup: {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "vendas_cliente"
      }
    },
    {
      $unwind: "$vendas_cliente"
    },
    {
      $group: {
        _id: {
          total: "$valorTotal",
          nome: "$vendas_cliente.nome"
        }
      }
    },
    {
      $sort: {
        valorTotal: -1
      }
    },
    {
      $limit: 10
    }
  ]
);

use('erp');
db.clientes.find();
db.vendas.aggregate(
  [
    {
      $match: {
        status: {
          $in: ["ENTREGUE", "EM SEPARACAO"]
        }
      }
    },
    {
      $lookup: {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "vendas_clientes"
      }
    },
    {
      $unwind: "$vendas_clientes"
    },
    {
      $group: {
        _id: "$vendas_clientes.nome",
        numeroTotalCompras: {
          $sum: 1
        }
      }
    },
    {
      $match: {
        numeroTotalCompras: {
          $gt: 5
        }
      }
    }
  ]
);

db.vendas.aggregate(
  [
    {
      $match: {
        status: {
          $in: ["ENTREGUE", "EM SEPARACAO"]
        },
        dataVenda: {
          $gte: ISODate('2020-01-01'),
          $lte: ISODate('2020-03-31')
        }
      }
    },
    {
      $lookup: {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "vendas_clientes"
      }
    },
    {
      $unwind: "$vendas_clientes"
    },
    {
      $group: {
        _id: "$vendas_clientes.nome",
        numeroTotalCompras: {
          $sum: 1
        }
      }
    },
    {
      $match: {
        numeroTotalCompras: {
          $lt: 3
        }
      }
    }
  ]
);

db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'clientes_vendas'
    },
  },
  {
    $match: {
      "clientes_vendas.dataVenda": {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-12-31")
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      totalVendas: {
        $sum: 1
      },
    }
  },
  {
    $sort: {
      totalVendas: -1
    }
  },
  {
    $limit: 3
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  },
]);

db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'clientes_vendas'
    },
  },
  {
    $unwind: "$clientes_vendas"
  },
  {
    $match: {
      "clientes_vendas.dataVenda": {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      totalVendas: {
        $sum: 1,
      },
      mediaVendas: {
        $avg: "$clientes_vendas.valorTotal",
      }
    }
  },
  {
    $sort: {
      uf: 1
    }
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1,
      mediaVendas: 1
    }
  },
]);
