use PecasFornecedores;
SELECT 
    *
FROM
    PecasFornecedores.Pecas
WHERE
    name LIKE 'gr%';
SELECT 
    *
FROM
    PecasFornecedores.Fornecimentos
WHERE
    peca = 2
ORDER BY Fornecedor ASC;
SELECT 
    peca, Preco, Fornecedor
FROM
    PecasFornecedores.Fornecimentos
WHERE
    Fornecedor LIKE '%n%';
SELECT 
    *
FROM
    PecasFornecedores.Fornecedores
WHERE
    name LIKE '%ltda%'
ORDER BY name DESC;
SELECT 
    *
FROM
    PecasFornecedores.Fornecedores
WHERE
    code LIKE '%f%';
SELECT 
    *
FROM
    PecasFornecedores.Fornecimentos
WHERE
    Preco BETWEEN 15 AND 40
ORDER BY Preco ASC;
SELECT 
    *
FROM
    PecasFornecedores.Vendas
WHERE
    order_date BETWEEN DATE('2018-04-15') AND DATE('2019-07-30')
ORDER BY order_date ASC;