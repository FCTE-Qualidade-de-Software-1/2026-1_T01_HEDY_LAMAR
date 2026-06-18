# M4 - Defeitos Visuais

## 1. Objetivo

Contabilizar defeito como M4, somente se:

- É visualmente perceptível mas a funcionalidade **continua acessível**
- Exemplos: texto cortado, sobreposição de elementos, espaçamento incorreto, imagem quebrada, scroll horizontal indesejado, layout não responsivo

## 2. Critérios de Severidade

Definir os critérios **antes** de iniciar os testes para evitar subjetividade na classificação.

**Tabela 111: Critérios de severidade.**

| Nível | Critério objetivo |
|---|---|
| **Alto** | Anomalia em navegação que não quebra funcionalidade |
| **Médio** | Anomalia visual que afeta compreensão do conteúdo |
| **Baixo** | Anomalia estética sem impacto funcional |

---

## 3. Passo a Passo da Execução

1. Fechar a lista de cenários de teste
   
      Antes de executar, listar os fluxos críticos do sistema, que correspondem às funcionalidades principais, a serem verificados em cada ambiente.

2. Executar os cenários por ambiente

      Para cada ambiente descrito, percorrer os fluxos correspondentes às funcionalidades principais.

3. Critério de decisão para cada anomalia encontrada

      É possível usar uma checklist fixa, para assegurar elementos visuais básicos conformes à M4:

      - Textos estão legíveis e sem corte?
      - Botões e campos estão dentro do grid?
      - Imagens carregam corretamente?
      - Não há scroll horizontal indesejado?
      - Elementos não se sobrepõem?
      - Layout responde corretamente ao viewport?

      Considerando a navegação e experiência no geral, se o usuário:

      - Consegue concluir a tarefa, mas com dificuldade → registrar como impacto Médio ou Alto.
      - Encontra qualquer diferença perceptível, sem prejuízo relevante da navegação → registrar como impacto Baixo.

4. Verificar se é defeito de adaptabilidade

      Confirmar que o problema é específico ao ambiente antes de registrar. Se o mesmo comportamento ocorre em todos os ambientes, trata-se de um bug geral e não deve ser contabilizado em M4.

## 4. Resultado esperado

**Tabela 112: Resultado esperado.**

| Tela | ENV-01 | ENV-02 | ENV-03 | ENV-04 | ENV-05 | ENV-06 |
|---|---|---|---|---|---|---|
| Tela 1 | | | | | | |
| Tela 2 | | | | | | |
| ... | | | | | | |
| **Total** | | | | | | |

## Resposta a Q3 e Verificação de H3

Ao final da execução, consolidar os dados para responder Q3:

1. **Somar M4 por ambiente** — mostrar concentração defeitos visuais em ambiente ou fluxo;
2. **Avaliar satisfação:**
    - Excelente: Contagem total ≤ 2 defeitos leves no somatório de todos os testes.
    - Satisfatório:	3 ≤ Contagem total ≤ 5 de defeitos leves.
    - Insuficiente:	Contagem total > 5 defeitos leves.
3. **Descrever o impacto** (resposta a Q3): descrever impacto na experiência geral e refletir sobre a consequência do design atual.

---

## Histórico de Versões

**Tabela 113: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 12/06/2026 | Escrita da fase 3 usando M4 | [Vinícius de Jesus](https://github.com/UnderwaterVillager) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
