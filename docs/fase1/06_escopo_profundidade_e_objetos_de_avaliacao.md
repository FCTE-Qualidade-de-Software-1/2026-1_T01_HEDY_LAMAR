# 6. Escopo e Profundidade de Avaliação

O escopo e a profundidade de avaliação são definidos a fim de direcionar os alvos de avaliação e o quão serão detalhados, baseados na finalidade de uso do software, no caso de app NoFluxo, a base são suas funções principais.

## 6.1 Escopo de Avaliação

O escopo declara características a serem avaliadas e o domínio do software a se considerar na avaliação.

- **Características**: Portabilidade e análise funcional(justificadas pela matriz Impacto x Risco);
- **Domínio de aplicação**: Aplicação web, dedicado ao apoio de alunos em uma única organização(UnB);
- **Modelo de negócio**: Customizado para alunos da UnB(FD), usado um formato modificado, o fluxograma (MOTS), disponível para self-host e em domínio web;
- **Ambientes de uso**: Navegadores Web;

---

## 6.2 Profundidade de Avaliação

- **Objetivos da avaliação**: 
	- Assegurar o funcionamento base do serviço a um estudante da UnB, de acordo com os requisitos;
	- Assertar a melhora de qualidade na tarefa em que se propõe a ajudar o aluno;
	- Comparar o desempenho entre diferentes navegadores;
	- Considera-se demanda baixa no momento;

| Caracteristica      | Ênfase(1-5)          |
| ------------------- | -------------------- |
| Adequação Funcional | 5 – Grande interesse |
| Portabilidade       | 4 – Largo interesse  |
| Compatibilidade     | 3 – Médio interesse  |
| Segurança           | 3 – Médio interesse  |
| Confiabilidade      | 3 – Médio interesse  |
| Eficiência          | 2 – Baixo interesse  |
| Manutenibilidade    | 2 – Baixo interesse  |

- O software trata de dados de sensibilidade baixa, contudo, são dados que orientam futuros cronogramas de estudantes, uma informação que deve ter seu controle de forma consentida e segura. Logo, segurança não é uma qualidade que invalidaria o produto ao cliente caso faltasse, mas o valorizaria caso tratado, por isso não é tratado como prioridade no momento.
- Apesar de uma recente migração de tecnologias usadas e uma adaptação quanto a testabilidade em andamento, o software documenta os planos de migração, e segue com atualizações recorrentes. Vale citar a intenção de integrar o software pelo ecossistema da Universidade de Brasília, não além deste escopo. Logo, o repositório possui um ambiente de colaboração ativo e, dado o limite do escopo, o software requer manutenibilidade suficiente para manter a colaboração ativa, por isso manutenibilidade é suficiente para desconsiderar.
-  Avaliar compatibilidade é considerar que o software se integraria ao ecossistema da UnB, o que pode acontecer, porém não há valor atual em considerar a possibilidade agora.
- Consideramos baixa demanda ao avaliar o software, ainda que reconhecemos eventuais queixas de gargalos em momentos de pico(e.g.: período de matrículas) no site SIGAA, onde são feitas inscrições de matérias na UnB. Logo, foi decida a lógica de priorizar avaliação de um público menor e mais focado na experiência em si e avaliações de alta demanda, considerando eficiência e confiabilidade, não são prioridade no momento.

---

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
