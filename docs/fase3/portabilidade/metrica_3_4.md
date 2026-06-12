# M3, M4 — Defeitos Críticos de Adaptabilidade e Defeitos Visuais

## Objetivo

Contabilizar defeito como M3, somente se:

- O comportamento é **diferente entre ambientes** (não é bug geral)
- A funcionalidade principal fica **inacessível ou quebrada** naquele ambiente
- É **reprodutível** (acontece consistentemente, não é falha aleatória)

E defeito como M4, apenas se:
s
- É visualmente perceptível mas a funcionalidade **continua acessível**
- Exemplos: texto cortado, sobreposição de elementos, espaçamento incorreto, imagem quebrada, scroll horizontal indesejado, layout não responsivo

## Critérios de Severidade

Definir os critérios **antes** de iniciar os testes para evitar subjetividade na classificação.

| Nível | Critério objetivo | Métrica |
|---|---|---|
| **Crítico** | Funcionalidade principal inacessível ou quebrada naquele ambiente | M3 |
| **Alto** | Anomalia em navegão que não quebra funcionalidade | M4 |
| **Médio** | Anomalia visual que afeta compreensão do conteúdo | M4 |
| **Baixo** | Anomalia estética sem impacto funcional | M4 |

---

## Passo a Passo da Execução

1. Fechar a lista de cenários de teste

Antes de executar, listar os fluxos críticos do sistema, que correspondem às funcionalidade principais, a serem verificados em cada ambiente.

2. Executar os cenários por ambiente

Para cada ambiente descrito, percorrer os fluxos correspondentes às funcionalidades principais.

3. Critério de decisão para cada anomalia encontrada

É possível usar uma checklist fixa, para assegurar elementos visuais básicos conformes à M4:

- [ ] Textos estão legíveis e sem corte?
- [ ] Botões e campos estão dentro do grid?
- [ ] Imagens carregam corretamente?
- [ ] Não há scroll horizontal indesejado?
- [ ] Elementos não se sobrepõem?
- [ ] Layout responde corretamente ao viewport? 

E usar a seguinte pergunta:

> *"O usuário consegue completar o fluxo neste ambiente?"*

- **Não consegue** → registrar como candidato a M3 (Crítico ou Alto)
- **Consegue com dificuldade** → registrar como M4
- **Qualquer diferença perceptível** -> registrar como candidato a M4.


4. Verificar se é defeito de adaptabilidade

Confirmar que o problema é específico ao ambiente antes de registrar. Se o mesmo comportamento ocorre em todos os ambientes, é bug geral — não entra em M3.

### Resultado esperado - M3

Uma contagem inteira por ambiente e um total geral.

| ID Ambiente | Descrição | Defeitos M3 |
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

### Resultado esperado - M4

Uma contagem por tela e por ambiente.

| Tela | ENV-01 | ENV-02 | ENV-03 | ENV-04 | ENV-05 | ENV-06 |
|---|---|---|---|---|---|---|
| Tela 1 | | | | | | |
| Tela 2 | | | | | | |
| ... | | | | | | |
| **Total** | | | | | | |

---

## Registro Unificado dos Defeitos

Utilizar uma planilha com as seguintes colunas para registrar todos os defeitos encontrados:

| Campo | Descrição |
|---|---|
| **ID** | Identificador sequencial (ex: 001, 002) |
| **Métrica** | M3 ou M4 |
| **Ambiente** | Navegador + SO + Dispositivo + Viewport |
| **Tela/Fluxo** | Onde o defeito foi encontrado |
| **Descrição** | O que acontece de errado |
| **Severidade** | Crítico / Alto / Médio / Baixo |
| **Reprodutível** | Sim / Não |
| **Print** | Evidência anexada (Sim/Não) |

### Exemplo de preenchimento

| ID | Métrica | Ambiente | Tela/Fluxo | Descrição | Severidade | Reprodutível | Print |
|---|---|---|---|---|---|---|---|
| 001 | M3 | Safari/iOS/Mobile | Login | Botão de entrar não responde ao toque | Crítico | Sim | Sim |
| 002 | M4 | Firefox/Win/Desktop | Dashboard | Logo cortada no header | Baixo | Sim | Sim |

---

## Resposta a Q3 e Verificação de H3

Ao final da execução, consolidar os dados para responder Q3:

1. **Somar M3 por ambiente** — identificar se algum ecossistema específico tem defeito crítico
2. **Somar M4 por ambiente e por tela** — identificar concentrações de anomalias visuais
3. **Verificar H3:**
   - M3 total = 0 → H3 **confirmada**
   - M3 total ≥ 1 → H3 **refutada**, descrever qual ambiente e qual fluxo foram afetados
4. **Descrever o impacto** (resposta a Q3): quantos defeitos, de que severidade, em quais ambientes, afetando quais funcionalidades