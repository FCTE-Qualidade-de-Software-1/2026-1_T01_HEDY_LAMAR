## 6.3 Objetos de Avaliação

Os objetos da avaliação definem as partes concretas do software que serão analisadas. Para o NoFluxoUNB, foram considerados:

*Nome do Produto:* NoFluxoUNB

*Versão Avaliada:* V2.3.0 (release estável de julho de 2025)

*Componentes Avaliados:*

- *Módulo de Visualização do Fluxograma:* exibição interativa das matérias equivalentes no fluxograma oficial do curso, permitindo ao estudante identificar dependências e equivalências entre disciplinas.
- *Módulo de Leitura e Processamento do Histórico:* extração e interpretação dos dados contidos no PDF do histórico acadêmico oficial do aluno (disciplinas cursadas, aprovadas e reprovadas).
- *Interface Web Responsiva:* acesso pela aplicação web hospedada em no-fluxo.crianex.com, avaliada em navegadores desktop e dispositivos móveis.
- *Backend e Infraestrutura:* serviços hospedados na DigitalOcean com frontend implantado via Vercel e banco de dados gerenciado pelo Supabase.

*Usuários-alvo da Avaliação:*

- Estudantes de graduação da Universidade de Brasília (usuários finais diretos).
- Coordenadores e orientadores acadêmicos (usuários indiretos, beneficiados pela melhoria no planejamento dos alunos).
- Desenvolvedores e mantenedores do projeto (comunidade open source, dado que o código é licenciado sob GPL-3.0).

A definição clara dos objetos assegura que a avaliação será direcionada, consistente e reproduzível, evitando ambiguidades sobre o que foi ou não avaliado.

---

## 6.4 Justificativa

A delimitação do escopo, profundidade e objetos de avaliação garante que o processo seja conduzido de forma sistemática, atendendo às expectativas do requisitante e alinhando-se às práticas recomendadas pela ISO/IEC 25010 e pelos referenciais teóricos apresentados em sala (Ramos, 2025).

Assim, o NoFluxoUNB será avaliado de acordo com:

- *Escopo:* funcionalidades essenciais de upload e processamento do histórico acadêmico em PDF, visualização do fluxograma interativo e compatibilidade da interface web em diferentes dispositivos e navegadores.
- *Profundidade:* ênfase nas características prioritárias definidas pela equipe, com foco nas funções que mais impactam diretamente a confiabilidade do sistema — especialmente a acurácia do motor de leitura do histórico, da qual dependem o cálculo do IRA, a detecção de trancamentos e a correta exibição do fluxograma.
- *Objetos:* motor de leitura e processamento do histórico em PDF, módulo de visualização do fluxograma interativo, interface web responsiva e infraestrutura de implantação (Vercel + DigitalOcean + Supabase).

Esse alinhamento entre teoria e prática fortalece a credibilidade da avaliação e garante que os resultados obtidos possam ser aplicados tanto em decisões técnicas quanto acadêmicas.
