# Tarefa 2 - Tabela de Jogos - Descodificadas

## Desenvolva o seguinte programa que manipula listas de dados a serem armazenados em vetores.

1. Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato.
2. O programa deve conter três funções (a serem executadas no evento click de cada botão) para:

- Validar o preenchimento, adicionar um clube ao vetor e listar os clubes;
- Listar os clubes (se houver);
- Montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante.
- Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.

## Algoritmo

1. **Verificação inicial**:

   - Primeiro, o código verifica se há clubes na lista e se o número de clubes é par. Se não houver clubes na lista ou se o número de clubes não for par, uma mensagem de erro é exibida.

2. **Iteração para montar os jogos**:
   - Se houver clubes suficientes na lista e o número for par, o código entra em uma iteração para montar os jogos.
   - Sabemos que, para um número par de clubes, teremos exatamente metade do número total de jogos. Por exemplo, se tivermos 8 clubes, teremos 4 jogos.
3. **Criação das linhas da tabela**:
   - Para cada jogo, criamos uma nova linha (`<tr>`) na tabela. Cada jogo é representado por uma linha na tabela de jogos.
4. **Atribuição dos times da casa e visitantes**:
   - Para cada jogo, selecionamos o clube da casa e o clube visitante.
   - O clube da casa é simplesmente o clube na posição atual da iteração (`clubes[i]`), enquanto o clube visitante é selecionado da extremidade oposta da lista de clubes (`clubes[clubes.length - 1 - i]`).
5. **Criação das células da tabela**:

   - Para cada jogo, criamos três células (`<td>`) na linha da tabela: uma para o clube da casa, outra para exibir "X" e a última para o clube visitante.
   - Essas células são preenchidas com os nomes dos clubes correspondentes.

6. **Adição das linhas à tabela**:
   - Após criar as células para cada jogo, adicionamos a linha completa à tabela de jogos.

Essencialmente, este algoritmo itera através da metade dos clubes (porque cada jogo envolve dois clubes), e para cada iteração, seleciona o clube da casa e o clube visitante correspondente, garantindo que o primeiro clube jogue contra o último, o segundo contra o penúltimo, e assim por diante.
