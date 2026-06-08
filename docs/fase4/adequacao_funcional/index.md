# Fase 4 - Execução e Resultados da Avaliação (Adequação Funcional)

## 1. Introdução

Nesta fase, foram executados os procedimentos definidos no [Plano de Avaliação da Fase 3](../../fase3/adequacao_funcional/index.md) para a característica **Adequação Funcional** do **No Fluxo UnB**.

O foco da execução foi validar, com base em evidências objetivas, a consistência das informações curriculares exibidas na aplicação e a confiabilidade dos resultados apresentados ao estudante durante o planejamento acadêmico.

---

## 2. Ambiente de Execução

Os testes foram executados em ambiente controlado, com os seguintes parâmetros:

| Item                          | Detalhe                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Versão do software avaliado** | No Fluxo UnB - release `qualidade-de-software` |
| **URL da aplicação** | [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/) |
| **Navegador principal** | Google Chrome (versão 149.0.7827.53) |
| **Sistema operacional** | Ubuntu 24.04 |
| **Artefatos de apoio** | Histórico acadêmico de referência ([historico_lucas.pdf](../../assets/historico_lucas.pdf)), base curricular oficial, capturas de tela e planilha de conferência |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Resultados por Métrica

### 3.1 M3 - Taxa de Consistência do Fluxograma, Equivalências e Pré-requisitos

**Objetivo:** Verificar se o fluxograma do curso exibido pelo sistema representa corretamente disciplinas, dependências e equivalências em relação à base curricular de referência.

**Resultado consolidado da métrica:**

| Métrica | Itens verificados | Itens corretos | Divergências | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|
| M3 | 25 | 24 | 1 | 96% | Satisfatório | [M3 - Consistência do Fluxograma](metrica_3.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

$$
M3 = \left(\frac{24}{25}\right) \times 100 = 96\%
$$

**Julgamento M3:** **Satisfatório**

O resultado obtido foi de 96%, considerando 24 itens exibidos corretamente em um total de 25 itens curriculares verificados. Esse percentual atende ao limite mínimo definido para aceitação da métrica, que exige M3 >= 95%.

Dessa forma, a métrica M3 foi classificada como **Satisfatória**, indicando que o fluxograma gerado pelo sistema manteve aderência ao oráculo utilizado na avaliação, apesar de uma divergência pontual relacionada a equivalência.

Para o detalhamento completo da execução, incluindo planilha de verificação e evidência em vídeo, consulte: [M3 - Consistência do Fluxograma](metrica_3.md).

## 4. Conclusão Parcial da Adequação Funcional

Com base na métrica executada nesta etapa (M3), o **No Fluxo UnB** apresentou comportamento funcional consistente para a visualização curricular, com apenas uma divergência pontual identificada no conjunto de itens verificados.

Esse resultado reforça a hipótese de que o sistema oferece suporte confiável ao planejamento acadêmico, mantendo alinhamento com as regras curriculares oficiais na maior parte dos casos avaliados.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
| ------ | ---- | --------- | ----- |
| `1.0` | 08/06/2026 | Criação da página de execução da Fase 4 para Adequação Funcional, com consolidação inicial da métrica M3. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
