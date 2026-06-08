# M3 - Taxa de Consistência do Fluxograma, Equivalências e Pré-requisitos

## 1. Objetivo

Verificar se o fluxograma apresentado pelo **No Fluxo UnB** representa corretamente as disciplinas, equivalências, dependências e pré-requisitos do curso avaliado.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Definição da Métrica

**Tabela 1: Definição operacional da M3.**

| Campo | Definição |
|---|---|
| **Métrica** | Taxa de consistência do fluxograma, equivalências e pré-requisitos |
| **Tipo** | Quantitativa |
| **Entrada** | Itens curriculares esperados no fluxograma do curso avaliado |
| **Saída** | Percentual de itens curriculares exibidos corretamente |
| **Unidade** | Percentual |
| **Fonte de evidência** | Base curricular, documento oficial do fluxograma, tela gerada pelo sistema e planilha de verificação |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Itens Verificados

Para esta métrica, cada item curricular conferido deve ser classificado individualmente como correto ou incorreto.

**Tabela 2: Itens curriculares avaliados na M3.**

| Tipo de item | O que deve ser conferido | Resultado esperado |
|---|---|---|
| Disciplina | Código, nome, carga horária/créditos e semestre sugerido | A disciplina exibida corresponde à base curricular usada como oráculo |
| Pré-requisito | Relação de dependência entre disciplinas | A dependência exibida é igual à regra curricular esperada |
| Equivalência | Relação entre disciplinas equivalentes ou aproveitáveis | A equivalência exibida corresponde à base curricular |
| Estado no fluxograma | Disciplina cursada, pendente, disponível ou bloqueada | O estado exibido é coerente com o histórico usado no teste |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Preparação

Antes da execução, o avaliador deve preparar:

1. Histórico acadêmico em PDF usado como entrada.
2. Curso correspondente ao histórico avaliado.
3. Documento oficial ou base curricular de referência.
4. Planilha de verificação dos itens curriculares.
5. Pasta para armazenamento das evidências.

A planilha deve conter, no mínimo:

| ID | Tipo de item | Valor esperado | Valor obtido | Correto? | Observação | Evidência |
|---|---|---|---|---|---|---|

---

## 5. Passo a Passo da Execução

1. Acessar o No Fluxo UnB no ambiente definido para a avaliação.
2. Realizar login, caso necessário.
3. Fazer upload do histórico acadêmico de referência.
4. Aguardar o processamento do histórico.
5. Abrir a visualização do fluxograma do curso.
6. Conferir cada item da planilha contra o que é exibido na interface.
7. Registrar **1** para item correto e **0** para item incorreto.
8. Para cada divergência, registrar descrição, severidade e evidência.
9. Salvar capturas de tela seguindo o padrão definido na visão geral da Adequação Funcional.

---

## 6. Fórmula de Cálculo

```text
M3 = (Nº de disciplinas, equivalências, dependências e pré-requisitos exibidos corretamente
      ÷ Nº total de itens curriculares verificados) × 100
```

---

## 7. Critério de Julgamento

**Tabela 3: Régua de julgamento da M3.**

| Classificação | Critério |
|---|---|
| Excelente | M3 >= 98% |
| Satisfatório | 95% <= M3 < 98% |
| Insuficiente | M3 < 95% |

O limite mínimo satisfatório de 95% segue a hipótese H2 definida para a Adequação Funcional na Fase 2.

---

## 8. Classificação de Divergências

**Tabela 4: Severidade das divergências da M3.**

| Severidade | Critério |
|---|---|
| Crítica | Informação curricular incorreta pode induzir o estudante a planejar matrícula impossível ou academicamente inadequada |
| Alta | Disciplina, pré-requisito ou equivalência central é exibido de forma incorreta |
| Média | Informação secundária está incorreta, mas não bloqueia a interpretação geral do fluxograma |
| Baixa | Problema pontual de apresentação textual sem impacto direto na decisão acadêmica |

---

## 9. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Planilha preenchida com todos os itens verificados.
- Percentual final da M3.
- Lista de divergências encontradas.
- Evidências visuais associadas aos itens incorretos.
- Classificação final da métrica.

---

## Histórico de Versões

**Tabela 5: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação do plano de avaliação da métrica M3 de Adequação Funcional. | Lucas Guimarães |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
