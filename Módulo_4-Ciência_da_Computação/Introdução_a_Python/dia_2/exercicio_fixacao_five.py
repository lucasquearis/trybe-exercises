import json

with open("pokemons.json", mode='r') as file:
  content = file.read()
  pokemons = json.loads(content)["results"]

print(pokemons[12])