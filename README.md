Game Backlog - Nintendo Switch Edition
Projeto mobile desenvolvido como parte do Projeto Multidisciplinar IV (5º Semestre) do curso de Ciência da Computação na UFBRA. 
O objetivo é criar um gerenciador pessoal para catalogar e organizar o progresso de jogos (backlog), com foco inicial no ecossistema do Nintendo Switch.

🚀 Tecnologias e Ferramentas
Framework: React Native com Expo

Build/Deploy: EAS (Expo Application Services)

Linguagem: JavaScript

Gerenciamento de Pacotes: NPM

🛠️ Estrutura Atual
O projeto já conta com a infraestrutura de desenvolvimento profissional configurada, incluindo:

Development Client: Build nativa personalizada para Android.

EAS Integration: Vinculação com serviços cloud da Expo para automação de builds.

Identificador: com.rafael.gamebacklog

📦 Como rodar o projeto
Clonar o repositório:

Bash
git clone https://github.com/seu-usuario/GameBacklog.git
Instalar as dependências:

Bash
npm install
Iniciar o servidor de desenvolvimento:

Bash
npx expo start
Executar no dispositivo:
Como este projeto utiliza um Development Client customizado, é necessário instalar o arquivo .apk gerado na última build ou realizar uma nova build via EAS para testar as funcionalidades nativas.

📅 Progresso (Semana 2)
[x] Configuração do ambiente Node/Expo.

[x] Vinculação ao repositório GitHub e versionamento inicial.

[x] Configuração do EAS Build e geração do Development Client.

[x] Implementação da interface inicial (Home/Splash).

[ ] Implementação da listagem dinâmica de jogos (Próxima etapa).

[ ] Persistência de dados local com AsyncStorage.
