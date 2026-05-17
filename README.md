Game Backlog - Nintendo Switch Edition
Projeto mobile desenvolvido como parte do Projeto Multidisciplinar IV (5º Semestre) do curso de Ciência da Computação na UFBRA.
O objetivo é criar um gerenciador pessoal para catalogar e organizar o progresso de jogos (backlog), com foco inicial no ecossistema do Nintendo Switch.

🚀 Tecnologias e Ferramentas
Framework: React Native com Expo

Linguagem: JavaScript

Gerenciamento de Pacotes: NPM

Estilização e Ícones: @expo/vector-icons

🛠️ Estrutura Atual
O projeto conta com a infraestrutura de componentes para gerenciamento de estado e persistência em memória, com uma interface estilizada e alinhada à identidade visual do console (temática vermelha e preta).

Identificador: com.rafael.gamebacklog

📦 Como rodar o projeto
1. Clonar o repositório:
git clone https://github.com/seu-usuario/GameBacklog.git

2. Instalar as dependências:
npm install

3. Iniciar o servidor de desenvolvimento com limpeza de cache:
npx expo start -c

4. Executar no dispositivo:
Abra o aplicativo Expo Go no seu celular, aponte a câmera para o QR Code gerado no terminal e aguarde o carregamento.

📅 Histórico de Progresso
Mapeamento das Etapas e Entregas
Semana 2
[x] Configuração do ambiente Node/Expo.

[x] Vinculação ao repositório GitHub e versionamento inicial.

[x] Configuração do EAS Build e geração do Development Client.

[x] Implementação da interface e tela inicial.

Semana 4
[x] Implementação da listagem dinâmica de jogos com FlatList.

[x] Formulário para inserção de novos títulos à biblioteca.

[x] Funcionalidade para exclusão de jogos com confirmação de segurança (Alert).

[x] Refinamento inicial da interface gráfica (UI) utilizando componentes vetoriais.

Semana 5
[x] Desenvolvimento do sistema de abas para filtragem em tempo real (Todos / Quero Jogar / Jogando / Finalizado).

[x] Implementação de seletores (chips) no formulário para triagem prévia do status do jogo.

[x] Formatação visual condicional (renderização de cores específicas baseadas nas tags de status).

Semana 6
[x] Conclusão do ciclo CRUD com a operação de Update.

[x] Implementação do botão azul de rotação cíclica de status (handleToggleStatus) acoplado em cada card.

[x] Atualização completa e sincronização do repositório remoto via Git.
