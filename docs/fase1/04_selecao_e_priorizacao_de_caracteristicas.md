# 4. Seleção e Priorização das Características

No presente trabalho, foram analisadas diferentes características de qualidade definidas pela norma ISO/IEC 25010 (SQuaRE), com o objetivo de selecionar e priorizar aquelas mais relevantes para a avaliação do software **No Fluxo UnB**.

## 4.1 Seleção das Características

O **No Fluxo UnB** é um sistema web de apoio acadêmico que depende diretamente da correta interpretação de históricos acadêmicos em PDF, da consistência das informações curriculares da universidade e da disponibilidade da plataforma em diferentes dispositivos e navegadores.

Considerando esse contexto, foram inicialmente consideradas as seguintes características da norma ISO/IEC 25010:

- **Adequação Funcional:** capacidade do sistema de fornecer funções corretas, completas e apropriadas às necessidades do usuário.

- **Eficiência de Desempenho:** relação entre o desempenho do sistema e a quantidade de recursos utilizados durante sua execução.

- **Compatibilidade:** capacidade do sistema de compartilhar ambientes e trocar informações adequadamente com outros sistemas.

- **Confiabilidade:** capacidade do sistema de executar corretamente suas funções de forma consistente e estável.

- **Segurança:** capacidade do sistema de proteger informações e dados contra acessos indevidos.

- **Manutenibilidade:** facilidade com que o sistema pode ser corrigido, modificado ou evoluído.

- **Portabilidade:** capacidade do sistema de funcionar adequadamente em diferentes ambientes e plataformas.

---

## 4.2 Método de Priorização: Matriz Impacto × Risco

Para priorizar as características de qualidade, foi utilizada a metodologia da Matriz Impacto × Risco, atribuindo valores de 1 (baixo) a 5 (alto) para cada dimensão avaliada.

- **Impacto**: representa o grau em que a característica influencia diretamente a experiência do usuário e a utilidade do sistema.

- **Risco**: representa a probabilidade de falhas ou limitações nessa característica comprometerem o funcionamento adequado do software.

A prioridade final foi calculada utilizando a fórmula:

```text
Prioridade = Impacto × Risco
```

Essa abordagem permite tornar o processo de priorização mais objetivo, quantitativo e reproduzível.

### Tabela 1 — Matriz Impacto × Risco

| Característica | Impacto | Risco | Prioridade (I × R) |
|---|---|---|---|
| Adequação Funcional | 5 | 5 | 25 |
| Portabilidade | 4 | 4 | 16 |
| Compatibilidade | 4 | 3 | 12 |
| Segurança | 4 | 3 | 12 |
| Confiabilidade | 3 | 3 | 9 |
| Eficiência de Desempenho | 3 | 2 | 6 |
| Manutenibilidade | 2 | 2 | 4 |

Os valores atribuídos na matriz foram definidos de forma colaborativa pelos integrantes do grupo. Cada participante atribuiu notas de impacto e risco para cada característica de qualidade, considerando o contexto e as funcionalidades do **No Fluxo UnB**. Posteriormente, foi realizada a média das avaliações individuais para obtenção dos valores finais apresentados na tabela.

A matriz demonstra que **Adequação Funcional** e **Portabilidade** obtiveram as maiores prioridades dentro do contexto do **No Fluxo UnB**, justificando sua seleção para a avaliação.

---

## 4.3 Justificativa da Priorização

### Adequação Funcional

A característica Adequação Funcional apresentou a maior prioridade (25 pontos), pois representa o núcleo operacional do **No Fluxo UnB**.

O sistema depende diretamente da correta leitura e interpretação dos históricos acadêmicos enviados pelo estudante. Falhas nessa característica comprometem funcionalidades essenciais da plataforma, como:

- leitura de disciplinas concluídas;
- identificação de pré-requisitos;
- visualização correta do fluxograma acadêmico.

Além disso, o motor responsável pela leitura e integração dos dados curriculares da API de disciplinas da UnB alimenta diretamente as funcionalidades centrais do sistema. Caso essas informações sejam interpretadas ou processadas de forma incorreta, o fluxograma acadêmico, os pré-requisitos e as simulações exibidas ao estudante tornam-se inconsistentes, comprometendo a confiabilidade da plataforma.

---

### Portabilidade

A característica Portabilidade obteve a segunda maior prioridade (16 pontos), refletindo a necessidade de que o sistema esteja acessível em diferentes ambientes computacionais.

O **No Fluxo UnB** é disponibilizado como uma aplicação web gratuita, acessada por estudantes utilizando diferentes dispositivos, navegadores e sistemas operacionais. Dessa forma, a capacidade do sistema de funcionar adequadamente em múltiplos contextos de uso é essencial para garantir acessibilidade e continuidade de uso.

A avaliação dessa característica será importante para verificar:

- funcionamento em diferentes navegadores;
- adaptação da interface em dispositivos móveis;
- execução em diferentes sistemas operacionais;
- compatibilidade com diferentes resoluções de tela;

A portabilidade também é relevante devido à natureza acadêmica do sistema, já que os estudantes frequentemente acessam a plataforma por dispositivos móveis durante o acompanhamento da graduação.

---

## 4.4 Trade-offs

A priorização realizada demonstra que o foco principal da avaliação estará em Adequação Funcional e Portabilidade. Isso implica que outras características de qualidade receberão menor profundidade de análise durante esta etapa do projeto.

Características como Segurança, Compatibilidade e Confiabilidade também apresentam relevância para o sistema, porém foram consideradas secundárias no contexto atual da avaliação, pois possuem menor impacto imediato sobre o objetivo central da plataforma: fornecer ao estudante uma representação acadêmica correta e acessível.

Da mesma forma, Eficiência de Desempenho e Manutenibilidade receberam menor prioridade, não por serem irrelevantes, mas porque falhas nessas características tendem a comprometer menos diretamente o uso principal do sistema em comparação com falhas funcionais.

Como consequência desse trade-off:

- questões de otimização de desempenho poderão receber menor atenção nesta fase;
- aspectos avançados de manutenção e evolução do sistema não serão foco principal da avaliação;
- mecanismos adicionais de segurança poderão ser aprofundados em avaliações futuras.

Ainda assim, a priorização adotada garante que a avaliação esteja alinhada ao propósito central do **No Fluxo UnB**: auxiliar estudantes da Universidade de Brasília no planejamento acadêmico de forma correta, confiável e acessível.

---

## 4.5 Relação das Características com o Propósito da Avaliação

As características selecionadas possuem relação direta com os objetivos da avaliação do **No Fluxo UnB**.

| Propósito da Avaliação | Característica Relacionada |
|---|---|
| Verificar a precisão da leitura do histórico acadêmico | Adequação Funcional |
| Avaliar a corretude da geração do fluxo acadêmico do curso | Adequação Funcional |
| Garantir funcionamento adequado em diferentes ambientes | Portabilidade |
| Validar acessibilidade multiplataforma do sistema | Portabilidade |

Dessa forma, a seleção de Adequação Funcional e Portabilidade está diretamente alinhada ao propósito da avaliação e ao contexto de uso do software.

## Referências

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. *ISO/IEC 25010:2011 — Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models*. Geneva: ISO, 2011.

PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: Uma Abordagem Profissional*. 8. ed. Porto Alegre: AMGH, 2016.
