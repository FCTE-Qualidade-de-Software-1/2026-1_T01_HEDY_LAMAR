# M3 - Defeitos Críticos de Adaptabilidade

## 1. Objetivo

Contabilizar defeito como M3, somente se:

- O comportamento é **diferente entre ambientes** (não é bug geral)
- A funcionalidade principal fica **inacessível ou quebrada** naquele ambiente
- É **reprodutível** (acontece consistentemente, não é falha aleatória)


## 2. Critérios de Severidade

Definir os critérios **antes** de iniciar os testes para evitar subjetividade na classificação.

**Tabela 108: Critérios de severidade.**

| Nível | Critério objetivo |
|---|---|
| **Crítico** | Funcionalidade principal inacessível ou quebrada naquele ambiente |

## 3. Passo a Passo da Execução

1. Fechar a lista de cenários de teste
    
    Antes de executar, listar os fluxos críticos do sistema, que correspondem às funcionalidade principais, a serem verificados em cada ambiente.

2. Executar os cenários por ambiente

    Para cada ambiente descrito, percorrer os fluxos correspondentes às funcionalidades principais.

3. Critério de decisão para cada anomalia encontrada

    Use a seguinte pergunta:

    > *"O usuário consegue completar o fluxo neste ambiente?"*

    - **Não consegue** → registrar como candidato a M3 (Crítico)

4. Verificar se é defeito de adaptabilidade

    Confirmar que o problema é específico ao ambiente antes de registrar. Se o mesmo comportamento ocorre em todos os ambientes, é bug geral — não entra em M3.


## 4. Resultado esperado

Uma contagem inteira por ambiente e um total geral.

**Tabela 109: Resultado esperado**

| ID Ambiente | Descrição | Quantidade de Defeitos |
|---|---|---|
| ENV-01 | Chrome — Windows 11 — Desktop | |
| ENV-02 | Edge — Windows 11 — Desktop | |
| ENV-03 | Firefox — Linux Ubuntu — Desktop | |
| ENV-04 | Chrome — Linux Ubuntu — Desktop | |
| ENV-05 | Chrome — Android 16 — Mobile | |
| ENV-06 | Safari Mobile — iOS 15 — Mobile | |
| **Total** | | |

> **H3 é confirmada** se o total de M3 = 0.  
> **H3 é refutada** se M3 ≥ 1 em qualquer ambiente.

## Resposta a Q3 e Verificação de H3

Ao final da execução, consolidar os dados para responder Q3:

1. **Somar M3 por ambiente** — identificar se algum ecossistema específico tem defeito crítico.
2. **Verificar H3:**
   - M3 total = 0 → H3 **confirmada**.
   - M3 total ≥ 1 → H3 **refutada**, descrever qual ambiente e qual fluxo foram afetados.
3. **Descrever o impacto** (resposta a Q3): quantos defeitos, em quais ambientes, afetando quais funcionalidades.

---

## Histórico de Versões

**Tabela 110: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 12/06/2026 | Escrita da fase 3 usando M3 | [Vinícius de Jesus](https://github.com/UnderwaterVillager) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
