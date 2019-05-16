## O que é CONTAINERS?
Containers são agrupamentos de componentes que representam um grande fragmento de visualização de seu sistema ja aplicado em contexto e estados.

## Para que serve?
Para que você não suje ou crie componentes grandes demais os Containers são estes conjuntos de componentes ja pensado para uma aplicação visual estilo view(como uma página). 

## Boas Práticas :)
- Lembre-se que os containers são conjuntos de componentes. Então mantenha ele nesta função.
- Nem todo agrupamento de componentes pode ser reaproveitado em seu sistema então neste caso aplique diretamente nas views.
- Containers podem ficar complexo, distribua suas operações com ordem.
- Caso perceba que um container esta sendo utilizado muitas vezes repare se ele não deve ser transformado em um componente. Pode ser o caso.
- Projetos que possuem muitos containers podem apresentar problemas de estrutura ágil. Tome cuidado.

## Lista do Não >:(
- NÃO crie um container com propriedades de component
- NÃO crie um container com propriedades de Views (páginas)


