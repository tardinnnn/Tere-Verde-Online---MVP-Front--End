REQUISITOS DA ÁREA RESTRITA

1. Telas da Área Administrativa
● Tela de Login / Página inicial administrativa
● Tela de Gerenciamento de Atrativos (Listagem)
● Tela de Cadastro e Edição de Atrativos

2. Requisitos Funcionais (RF)

RF01 - Autenticação do Administrador
● Prioridade: ALTA
● O sistema deve permitir login com usuário e senha válidos para acesso à área
restrita.

RF02 - Controle de Acesso
● Prioridade: ALTA
● A área administrativa e suas funcionalidades só podem ser acessadas após a
autenticação (Login).

RF03 - Visualização da Lista de Atrativos
● Prioridade: ALTA
● Exibir uma tabela contendo os atrativos cadastrados com as colunas: Nome,
Localização, Nível de Dificuldade, Status (Aberto/Fechado) e botões de Ação
(Editar/Excluir).

RF04 - Cadastro de Novo Atrativo
● Prioridade: ALTA
● O sistema deve permitir cadastrar um novo atrativo com os seguintes campos
simples:
○ Nome do Atrativo (Texto)
○ Horário de Funcionamento (Texto. Ex: "08h às 17h")
○ Localização (Texto)
○ Nível de Dificuldade (Seleção: Leve, Médio ou Difícil)
○ Situação Atual (Seleção: Aberto ou Fechado/Manutenção)
○ Imagem (Upload ou Link)
○ Descrição (Texto)

RF05 - Edição de Atrativo
● Prioridade: ALTA
● Permitir alterar todas as informações de um atrativo já existente (incluindo mudar a
Situação de "Aberto" para "Fechado").

RF06 - Exclusão de Atrativo
● Prioridade: MÉDIA
● Permitir excluir um atrativo da listagem, com uma mensagem de confirmação
simples antes de apagar.

RF07 - Salvamento de Dados
● Prioridade: ALTA
● Ao clicar em "Salvar" ou "Atualizar", o sistema deve gravar as informações no banco
de dados (ou LocalStorage para o MVP) e retornar para a lista.

RF08 - Exibição Pública da Situação
● Prioridade: ALTA
● A página pública (Home) deve ler o status cadastrado aqui (Aberto/Fechado) e exibir
para o visitante se a trilha está disponível.

RF09 - Logout
● Prioridade: BAIXA
● Permitir que o administrador saia da área restrita, retornando para a tela de login.

3. Requisitos Não Funcionais (RNF)

RNF01 - Usabilidade
● Prioridade: MÉDIA
● Interface simples e intuitiva, com botões claros para "Novo Cadastro", "Salvar" e
"Excluir".

RNF02 - Compatibilidade
● Prioridade: ALTA
● O sistema deve funcionar corretamente nos navegadores modernos (Chrome,
Firefox, Edge).

RNF03 - Responsividade
● Prioridade: MÉDIA
● A tabela de listagem e o formulário devem se ajustar para não "quebrar" em telas
menores (ajuste básico).

RNF04 - Desempenho
● Prioridade: BAIXA
● A listagem dos atrativos deve carregar rapidamente (até 2 segundos).

RNF05 - Consistência Visual
● Prioridade: MÉDIA
● Seguir as cores e fontes definidas no padrão visual do projeto (Terê Verde Online).

RNF06 - Armazenamento (MVP)
● Prioridade: ALTA
● Para fins de MVP acadêmico, os dados podem ser armazenados temporariamente
(LocalStorage ou JSON Server) se não houver Backend completo.

RNF07 - Segurança Básica
● Prioridade: ALTA
● O campo de senha no login deve ocultar os caracteres digitados.
