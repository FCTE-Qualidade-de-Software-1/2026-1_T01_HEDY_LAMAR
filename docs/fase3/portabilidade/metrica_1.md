# M1 - Taxa de Conformidade de Layout Responsivo

## 1. Objetivo

Verificar se a interface do **No Fluxo UnB** se adapta visualmente às resoluções críticas sem:

- Quebras de layout.
- Sobreposição de elementos.
- Desaparecimento de componentes essenciais.
- Perda de legibilidade ou navegabilidade.

---

## 2. Páginas-Alvo da Inspeção

**Tabela 102: Páginas avaliadas na M1.**

| ID | Página-alvo | Elementos observados |
|---|---|---|
| P1 | Tela de login | Campos de autenticação, botões e mensagens |
| P2 | Painel do fluxograma | Disciplinas, conexões, legendas e rolagem |
| P3 | Interface de upload de histórico escolar | Área de upload, feedback visual e botões |
| P4 | Janela do chatbot | Campo de mensagem, histórico de conversa e botões |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Passo a Passo da Execução

1. Abrir o navegador em um dos ambientes da matriz ou utilizar a ferramenta de simulação correspondente.
2. Configurar a resolução definida para o ambiente em teste.
3. Navegar pelas quatro páginas-alvo.
4. Em cada página, verificar:
   - Textos cortados ou sobrepostos.
   - Botões visíveis e clicáveis.
   - Inputs acessíveis.
   - Menus funcionais.
   - Barras de rolagem que prejudiquem a navegação.
5. Capturar uma imagem da tela se encontrar falha.
6. Salvar a evidência utilizando o padrão:

```text
M1_ENV[ID]_[PAGINA]_[RESOLUCAO].png
```

7. Repetir o procedimento para todas as resoluções previstas.
8. Registrar **Sucesso** caso nenhuma anomalia seja encontrada.
9. Registrar **Falha** caso seja observada qualquer inconsistência visual.

---

## 4. Entrada e Saída

**Entrada:**

- Universo das resoluções críticas definidas na matriz de ambientes.
- Quatro páginas-alvo da inspeção.

**Saída:**

- Número de resoluções que mantiveram integridade visual total.
- Lista de inconsistências visuais encontradas.
- Evidências associadas a cada ambiente.

---

## 5. Fórmula de Cálculo

```text
M1 = (Nº de resoluções sem quebra ÷ Nº total de resoluções testadas) × 100
```

---

## 6. Critério de Julgamento

**Tabela 103: Régua de julgamento da M1.**

| Classificação | Critério |
|---|---|
| Excelente | M1 > 90% das resoluções testadas sem quebras visuais |
| Satisfatório | 80% <= M1 <= 90% das resoluções testadas |
| Insuficiente | M1 < 80% das resoluções testadas |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## Histórico de Versões

**Tabela 104: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 08/06/2026 | Separação da métrica M1 em página própria. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 07/06/2026 | Projeção da métrica M1 de Portabilidade. | Guilherme |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
