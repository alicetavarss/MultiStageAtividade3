# MultiStageDockerfile 🐳

Repositório criado para a atividade prática de Docker Multi-Stage Builds da disciplina de 

---

## Estrutura do Projeto

A organização dos arquivos no repositório segue exatamente a estrutura exigida:

minha-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── index.js
├── package.json
├── package-lock.json
└── .dockerignore

### Especificações do Dockerfile

O arquivo Dockerfile foi construído em dois estágios distintos para garantir o menor tamanho possível da imagem final, cumprindo os seguintes pontos:

Estágio 1: Build (builder)

    Imagem base utilizada: node:20-alpine

    Diretório de trabalho configurado: /app

    Otimização de cache: Cópia dos arquivos package.json e package-lock.json realizada antes do restante do código

    Instalação de dependências limpa: Executada através do comando npm ci

    Cópia do restante do código-fonte da aplicação

    Geração dos arquivos de produção: Executado através do comando npm run build

Estágio 2: Produção (production)

    Imagem base utilizada: nginx:stable-alpine

    Transferência de arquivos: Cópia da pasta de build (dist/) do estágio anterior diretamente para o diretório padrão do Nginx (/usr/share/nginx/html)

    Porta exposta: Porta 80

    Comando de inicialização configurado: nginx -g 'daemon off;'


# Como executar: 

