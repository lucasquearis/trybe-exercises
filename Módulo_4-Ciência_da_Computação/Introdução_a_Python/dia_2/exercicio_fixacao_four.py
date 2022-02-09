aluno_recuperacao = []

with open("alunos.txt", mode="r") as file:
  for lines in file:
    listNotes = lines.split(' ')
    if int(listNotes[1]) < 6:
      aluno_recuperacao.append(listNotes[0])

for aluno in aluno_recuperacao:
  print(f"{aluno} está em recuperação")