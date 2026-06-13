# Plano de Avaliação - Portabilidade

## 1. Introdução

Esta seção operacionaliza a execução da avaliação para as métricas da subcaracterística de **Adaptabilidade (Portabilidade)** do sistema **No Fluxo UnB**.

O objetivo é fornecer um roteiro executável e padronizado para que qualquer membro da equipe consiga executar os testes, coletar evidências e aplicar os critérios de julgamento estabelecidos na [Fase 2](../../fase2/02_obj_portabilidade.md), cobrindo todas as métricas previstas para Portabilidade.

---

## 2. Objetivos da Avaliação de Portabilidade

- Garantir a consistência visual da interface do No Fluxo UnB diante da variação de resoluções de tela.
- Validar o comportamento uniforme das três funcionalidades centrais nos ambientes web homologados.
- Padronizar as saídas e relatórios das execuções para auditoria da disciplina de Qualidade de Software 1.

---

## 3. Métricas Projetadas

**Tabela 1: Métricas de Portabilidade projetadas na Fase 3.**

| Código | Métrica | Questão GQM | Página |
|---|---|---|---|
| **M1** | Taxa de conformidade de layout responsivo | Q1 | [M1 - Layout responsivo](metrica_1.md) |
| **M2** | Índice de equivalência funcional por navegador | Q2 | [M2 - Equivalência funcional por navegador](metrica_2.md) |
| **M3** | Defeitos Críticos de Adaptabilidade | Q3 | [M3 - Defeitos Críticos de Adaptabilidade](metrica_3.md) |
| **M4** | Defeitos Visuais | Q2 | [M4 - Defeitos Visuais](metrica_4.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Método de Avaliação

**Tabela 2: Método de avaliação.**

| Etapa | Descrição | Responsável | Evidência |
|---|---|---|---|
| Preparação | Dispositivos, navegadores e ferramentas de inspeção conforme a matriz de ambientes. | Equipe | Checklist de ambiente validado |
| Execução | Rodar os roteiros de varredura visual (M1) e os casos de teste funcionais (M2), analisar comportamentos críticos(M3) e fluxos de navegação(M4). | Avaliadores | Prints de tela e vídeos |
| Registro | Documentar o resultado de cada ambiente/resolução no documento padrão. | Avaliadores | Linhas preenchidas no documento central |
| Cálculo | Aplicar as fórmulas de taxa de conformidade e índice de equivalência, e contar defeitos crítico e falhas visuais menores | Avaliadores | Documento preenchido com os percentuais |
| Julgamento | Confrontar os percentuais obtidos com as réguas de aceitação da Fase 2. | Equipe | Relatório com a classificação e anexos |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 5. Preparação

### 5.1 Artefatos de Suporte Exigidos

O documento de coleta deverá conter, no mínimo, as seguintes colunas:

| Métrica | Cenário/Resolução | Resultado |
|---|---|---|

Ou videos as evidências devem ser armazenadas no [drive](https://drive.google.com/drive/folders/16Rx9M1ijRTBGD_JeQYjL-t-EpIURQula?usp=drive_link).

### 5.2 Ferramentas Homologadas para Inspeção

Caso o avaliador não possua o dispositivo físico listado na matriz de ambientes, fica autorizado o uso das seguintes ferramentas de simulação:

- DevTools do Google Chrome ou Microsoft Edge.
- Modo **Responsive Design Mode**.
- Configuração manual das dimensões informadas na matriz de ambientes.

### 5.3 Arquivo de Teste

Será utilizado o arquivo fictício:

```text
historico_guilherme.pdf
```

O arquivo deve estar disponível no [drive](https://drive.google.com/drive/folders/16Rx9M1ijRTBGD_JeQYjL-t-EpIURQula?usp=drive_link).

---

## 6. Cronograma e Atividades

**Tabela 3: Cronograma de execução de Portabilidade.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Montagem do documento centralizado de registros e distribuição dos ambientes físicos. | Guilherme e Vinícius |
| 11/06/2026 | Execução dos testes de M1 e M2 nos ambientes homologados. | Avaliadores |
| 12/06/2026 | Consolidação das evidências, cálculo dos percentuais e classificação final. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## Histórico de Versões

**Tabela 4: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.2` | 11/06/2026 | links do drive | Guilherme |
| `1.1` | 08/06/2026 | Separação da projeção de Portabilidade em páginas por métrica. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 07/06/2026 | Projeção das métricas M1 e M2. | Guilherme |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
