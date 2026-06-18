# 1. Propósito da Avaliação

O propósito desta avaliação é analisar a qualidade do software **No Fluxo UnB** sob as perspectivas de **Adequação Funcional** e **Portabilidade**, conforme a norma **ISO/IEC 25010 (SQuaRE)**. A análise busca fornecer uma visão estruturada e baseada em evidências sobre a qualidade do produto, identificando pontos fortes e fragilidades nessas áreas, de modo a apoiar decisões técnicas e de evolução do sistema.

O **No Fluxo UnB** é uma aplicação web gratuita desenvolvida pela Squad 03 do MDS 2025/1 (FGA/UnB), cujo núcleo funcional consiste em (i) ler históricos acadêmicos em PDF emitidos pela UnB, (ii) cruzar essas informações com o fluxograma do curso e a base de disciplinas da universidade e (iii) apresentar visualmente o progresso acadêmico do estudante, com apoio de um assistente de IA. Como o sistema substitui consultas manuais a múltiplos sistemas oficiais, falhas funcionais e de acesso multiplataforma têm impacto direto sobre o usuário final.

---

## 1.1 Por que avaliar

A avaliação se justifica por três motivos centrais:

- **Risco de erro com alto impacto acadêmico:** uma leitura incorreta do histórico ou um cruzamento mal feito com o fluxograma pode levar o estudante a tomar decisões equivocadas (matricular-se em uma disciplina sem ter o pré-requisito, deixar de cumprir carga horária complementar, ou planejar uma colação de grau inviável). A acurácia mínima exigida pelo próprio sistema é de 95%, o que torna a verificação da Adequação Funcional uma necessidade — não uma preferência.
- **Diversidade de contextos de uso:** estudantes da UnB acessam a plataforma de notebooks, desktops e, principalmente, smartphones, em diferentes navegadores e sistemas operacionais. Garantir Portabilidade é condição para que o sistema cumpra sua função para todo o público-alvo, e não apenas para um subconjunto de usuários.
- **Ausência de avaliação externa prévia:** o No Fluxo UnB não passou por uma avaliação independente baseada em norma de qualidade. Estabelecer um marco inicial (baseline) permite acompanhar a evolução do produto e fundamentar decisões futuras com dados, e não apenas com percepção.

---

## 1.2 Para quem se avalia

A avaliação é direcionada a três públicos:

- **Equipe avaliadora (Grupo Hedy Lamarr):** atua como avaliador independente, no contexto da disciplina FGA0315 — Qualidade de Software 1 (T01/2026.1), conduzida pela Profa. Cristiane Ramos. A equipe é responsável pela execução do método e pela elaboração do relatório técnico.
- **Equipe de desenvolvimento do No Fluxo UnB (Squad 03 — MDS 2025/1):** principal destinatária dos resultados acionáveis, especialmente os achados sobre o parser de PDF, a consistência do fluxograma e o comportamento da aplicação em diferentes ambientes.
- **Comunidade acadêmica da UnB (estudantes de graduação):** beneficiária indireta, uma vez que melhorias decorrentes da avaliação aumentam a confiabilidade e o alcance do produto que utiliza no dia a dia.

---

## 1.3 Uso pretendido dos resultados

Os resultados desta avaliação serão utilizados para apoiar decisões concretas, e não apenas para gerar diagnósticos descritivos. As decisões previstas, e os respectivos responsáveis, são apresentados na Tabela 3.

<a id="tabela-3"></a>
**Tabela 3: Uso pretendido dos resultados da avaliação.**

| Decisão a ser apoiada | Quem decide | Insumo fornecido pela avaliação |
|---|---|---|
| Priorizar correções no motor de leitura do histórico em PDF | Equipe de desenvolvimento (Squad 03) | Lista de falhas de Adequação Funcional encontradas, com severidade |
| Definir o conjunto mínimo de navegadores/dispositivos a serem suportados oficialmente | Equipe de desenvolvimento (Squad 03) | Matriz de Portabilidade com resultados por ambiente |
| Decidir se o sistema está apto a uma divulgação ampla entre os estudantes da UnB | Equipe de desenvolvimento (Squad 03) | Avaliação consolidada das duas características priorizadas |
| Orientar o escopo de avaliações futuras (ex.: Segurança, Confiabilidade) | Equipe avaliadora e equipe de desenvolvimento | Limites de validade dos resultados e itens excluídos do escopo atual |
| Fornecer feedback construtivo à equipe de desenvolvimento | Equipe avaliadora (Grupo Hedy Lamarr) | Relatório técnico final e evidências auditáveis no repositório |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

Além disso, a avaliação fornecerá um **baseline auditável**: todos os dados brutos e consolidados serão mantidos no repositório do projeto, permitindo que avaliações futuras comparem a evolução do produto de forma objetiva.

---

## 1.4 Alinhamento com as características priorizadas

O propósito declarado orienta diretamente a seleção das características de qualidade que serão avaliadas em profundidade (ver [Seção 4](04_selecao_e_priorizacao_de_caracteristicas.md)):

- **Adequação Funcional** responde à pergunta *"o No Fluxo UnB faz corretamente aquilo que se propõe a fazer?"*, que está no centro do risco acadêmico associado ao sistema.
- **Portabilidade** responde à pergunta *"o No Fluxo UnB faz isso para todos os estudantes que precisam usá-lo, independentemente do dispositivo ou navegador?"*, que está no centro do alcance do sistema.

Características como Segurança, Confiabilidade e Manutenibilidade são reconhecidas como relevantes, porém ficam fora do escopo desta avaliação por decisão explícita de priorização, e não por desconhecimento (ver [Seção 6](06_escopo_profundidade_e_objetos_de_avaliacao.md)).

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 03/06/2026 | Revisão e ajustes de acordo com a avaliação da Fase 1 feita pelos alunos da disciplina que avaliaram o Grupo Hedy Lamarr | [Lucas Guimarães](https://github.com/lcsgborges) |
