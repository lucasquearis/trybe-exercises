use PiecesProviders;
SELECT 
    Provider, Price
FROM
    PiecesProviders.Provides
WHERE
    Provider = 'RBT';
SELECT 
    *
FROM
    PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 5;
SELECT 
    Provider, Price
FROM
    PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 3;
SELECT 
    *
FROM
    PiecesProviders.Provides
WHERE
    Provider = 'HAL'
ORDER BY Price DESC;
SELECT 
    COUNT(Provider)
FROM
    PiecesProviders.Provides
WHERE
    Piece = 1;