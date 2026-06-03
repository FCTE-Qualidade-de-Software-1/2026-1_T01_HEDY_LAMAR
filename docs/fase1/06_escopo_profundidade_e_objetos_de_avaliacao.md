# 6. Escopo e Profundidade de Avaliação

O escopo e a profundidade de avaliação são definidos para direcionar os alvos avaliados e o nível de detalhe da análise. No caso do No Fluxo UnB, a avaliação parte de suas funções principais de apoio ao planejamento acadêmico.

## 6.1 Escopo de Avaliação

O escopo declara características a serem avaliadas e o domínio do software a se considerar na avaliação.

- **Características**: Portabilidade e Adequação Funcional, justificadas pela matriz Impacto × Risco;
- **Domínio de aplicação**: aplicação web dedicada ao apoio de alunos em uma única organização, a Universidade de Brasília (UnB);
- **Modelo de negócio**: software sob demanda para alunos da UnB, disponível em domínio web;
- **Ambientes de uso**: navegadores web.

---

## 6.2 Profundidade de Avaliação

- **Objetivos da avaliação**:
	- Assegurar o funcionamento base do serviço a um estudante da UnB, de acordo com os requisitos;
	- Verificar a qualidade da tarefa em que o sistema se propõe a ajudar o aluno;
	- Comparar o desempenho entre diferentes navegadores;
	- Considera-se demanda baixa no momento;

**Tabela 1: Ênfase por característica de qualidade no escopo da avaliação.**

| Característica      | Ênfase (1-5)         |
| ------------------- | -------------------- |
| Adequação Funcional | 5 – Grande interesse |
| Portabilidade       | 4 – Largo interesse  |
| Compatibilidade     | 3 – Médio interesse  |
| Segurança           | 3 – Médio interesse  |
| Confiabilidade      | 3 – Médio interesse  |
| Eficiência          | 2 – Baixo interesse  |
| Manutenibilidade    | 2 – Baixo interesse  |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026), com base na priorização apresentada na Seção 4.*

- O software trata de dados de sensibilidade baixa, contudo, são dados que orientam futuros cronogramas de estudantes, uma informação que deve ter seu controle de forma consentida e segura. Logo, segurança não é uma qualidade que invalidaria o produto ao cliente caso faltasse, mas o valorizaria caso tratado, por isso não é tratado como prioridade no momento.
- Apesar de uma recente migração de tecnologias usadas e uma adaptação quanto a testabilidade em andamento, o software documenta os planos de migração, e segue com atualizações recorrentes. Vale citar a intenção de integrar o software pelo ecossistema da Universidade de Brasília, não além deste escopo. Logo, o repositório possui um ambiente de colaboração ativo e, dado o limite do escopo, o software requer manutenibilidade suficiente para manter a colaboração ativa, por isso manutenibilidade é suficiente para desconsiderar.
- Avaliar compatibilidade é considerar que o software se integraria ao ecossistema da UnB, o que pode acontecer, porém não há valor atual em considerar a possibilidade agora.
- Consideramos baixa demanda ao avaliar o software, ainda que reconheçamos eventuais gargalos em momentos de pico, como o período de matrículas no SIGAA. Logo, foi decidida a lógica de priorizar a avaliação de um público menor e mais focado na experiência em si; avaliações de alta demanda, considerando eficiência e confiabilidade, não são prioridade no momento.

---

## 6.3 Objetos de Avaliação

Os objetos da avaliação definem as partes concretas do software que serão analisadas. Para o No Fluxo UnB, foram considerados:

*Nome do Produto:* No Fluxo UnB

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

Assim, o No Fluxo UnB será avaliado de acordo com:

- *Escopo:* funcionalidades essenciais de upload e processamento do histórico acadêmico em PDF, visualização do fluxograma interativo e compatibilidade da interface web em diferentes dispositivos e navegadores.
- *Profundidade:* ênfase nas características prioritárias definidas pela equipe, com foco nas funções que mais impactam diretamente a confiabilidade do sistema — especialmente a acurácia do motor de leitura do histórico, da qual dependem o cálculo do IRA, a detecção de trancamentos e a correta exibição do fluxograma.
- *Objetos:* motor de leitura e processamento do histórico em PDF, módulo de visualização do fluxograma interativo, interface web responsiva e infraestrutura de implantação (Vercel + DigitalOcean + Supabase).

Esse alinhamento entre teoria e prática fortalece a credibilidade da avaliação e garante que os resultados obtidos possam ser aplicados tanto em decisões técnicas quanto acadêmicas.

---

## 6.5 Limites de Validade e Avaliações Futuras

Os resultados desta avaliação serão válidos para a versão, os ambientes e os objetos definidos nesta seção. Alterações relevantes no parser de PDF, na base de dados curricular, na infraestrutura de implantação ou na interface web podem exigir nova rodada de testes, pois podem modificar o comportamento observado.

Nesta etapa, a avaliação não generaliza resultados para todos os cursos da UnB, todos os modelos possíveis de histórico acadêmico ou todos os dispositivos disponíveis no mercado. A cobertura será concentrada nos cursos, navegadores, sistemas operacionais e dispositivos definidos pela equipe como representativos para o contexto de uso do No Fluxo UnB.

Como plano de cobertura progressiva, recomenda-se que avaliações futuras aprofundem:

- **Segurança da informação:** autenticação, persistência de dados e proteção de informações acadêmicas do estudante;
- **Eficiência de desempenho:** tempo de resposta em períodos de maior uso e processamento de históricos maiores;
- **Confiabilidade:** comportamento em falhas de rede, indisponibilidade de serviços externos e erros no upload de arquivos;
- **Manutenibilidade:** facilidade de evolução do parser, da base curricular e dos componentes de interface.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 03/06/2026 | Revisão e ajustes de acordo com a avaliação da Fase 1 feita pelos alunos da disciplina que avaliaram o Grupo Hedy Lamarr | [Lucas Guimarães](https://github.com/lcsgborges) |
