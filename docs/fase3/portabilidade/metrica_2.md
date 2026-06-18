# M2 - Índice de Equivalência Funcional por Navegador

## 1. Objetivo

Garantir que as três funcionalidades essenciais da aplicação funcionam com equivalência técnica em todos os navegadores homologados.

---

## 2. Casos de Teste

### CT-01 - Leitura de Histórico

Realizar o upload de um histórico acadêmico da UnB em PDF e verificar se os dados são extraídos corretamente.

### CT-02 - Visualização do Fluxograma

Interagir com o fluxograma verificando:

- Seleção de disciplinas.
- Dependências.
- Equivalências.
- Renderização gráfica.

### CT-03 - Chatbot

1. Abrir o assistente de IA.
2. Enviar uma mensagem de teste.
3. Verificar se uma resposta textual consistente é retornada.

Mensagem de teste:

```text
Quais matérias faltam para me formar?
```

---

## 3. Passo a Passo da Execução

1. Acessar o sistema utilizando o ambiente definido na matriz.
2. Executar o CT-01.
3. Registrar evidência.
4. Executar o CT-02.
5. Registrar evidência.
6. Executar o CT-03.
7. Registrar evidência.
8. Para cada caso de teste, atribuir:
   - **1** para sucesso.
   - **0** para falha.
9. Repetir o processo para todos os ambientes da matriz.

---

## 4. Entrada e Saída

**Entrada:**

- Três casos de teste padronizados.
- Ambientes homologados definidos na Fase 2.

**Saída:**

- Nota de funcionamento por funcionalidade dentro de cada ambiente.
- Lista de falhas por navegador ou sistema operacional.
- Evidências associadas a cada execução.

---

## 5. Fórmula de Cálculo

O cálculo deve ser realizado individualmente para cada ambiente.

```text
M2_Ambiente = (Nº de funcionalidades operantes ÷ 3) × 100
```

---

## 6. Critério de Julgamento Consolidado

<a id="tabela-105"></a>
**Tabela 105: Régua de julgamento da M2.**

| Classificação | Critério |
|---|---|
| Excelente | M2 = 100% em todos os ambientes |
| Satisfatório | M2 < 100% em apenas um ambiente |
| Insuficiente | M2 < 100% em mais de um ambiente |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 7. Registro de Coleta

<a id="tabela-106"></a>
**Tabela 106: Modelo de registro da M2.**

| Ambiente | Navegador | CT-01 | CT-02 | CT-03 | Percentual |
|---|---|---|---|---|---|

---

## Histórico de Versões

<a id="tabela-107"></a>
**Tabela 107: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 08/06/2026 | Separação da métrica M2 em página própria. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 07/06/2026 | Projeção da métrica M2 de Portabilidade. | Guilherme |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
