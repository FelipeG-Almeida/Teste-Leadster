<h1 align="center" id="title">Teste Leadster</h1>

<p align="center"><img src="https://socialify.git.ci/FelipeG-Almeida/Teste-Leadster/image?description=1&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;theme=Light" alt="project-image"></p>

<p align="center"><img src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="shields"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" alt="shields"></p>

<h2>🚀 Demo</h2>

[https://teste-leadster-deploy.vercel.app/](https://teste-leadster-deploy.vercel.app/)

  
  
<h2>🧐 Funcionalidades</h2>

Algumas das funcionalidades do projeto:

*   Exibe o cabeçalho, sessão de webnários, call to action e rodapé
*   O usuário pode navegar entre diversos webnários através dos botões de paginação da sessão
*   Ao clicar em um card será exibido um modal com título, descrição e vídeo do webnário.

<h2>🛠️ Passos de Instalação:</h2>

<p>1. Clone o repositório usando o comando git clone seguido do link do repositório:</p>

```
git clone https://github.com/FelipeG-Almeida/Teste-Leadster.git
```

<p>2. Acesse a pasta do projeto recém-clonado:</p>

```
cd Teste-Leadster
```

<p>3. Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar a instalação digitando o seguinte comando no terminal:</p>

```
node -v
```

<p>4. Em seguida instale as dependências do projeto executando o comando:</p>

```
npm install
```

<p>5. Execute o seguinte comando para iniciar o servidor de desenvolvimento do Next.js:</p>

```
npm run dev
```

<p>6. O servidor de desenvolvimento será iniciado e você poderá acessar a landing page no navegador através do seguinte endereço: http://localhost:3000.</p>

  
  
<h2>💻 Construído com:</h2>

Tecnologias e métodologias útilizadas no projeto:

*   NextJs
*   React
*   Styled-Components
*   Design Responsivo

<h2> ⁉️ Decisões tomadas:</h2>

<p>Conforme modelo disponibilizado, percebi que cada modal teria um vídeo e conteúdos diferentes, assim criei um arquivo .json com títulos, descrições e links para diversos Ted Talks, que foram usados como template para a renderização dos componentes webinarios e botões de paginação. No demais, as decisões mais relevantes do projeto foram: 1º entre quais componentes usaria flexbox e quais usaria grid, ou então ambos. 2º como passar os props entre os dados do json e os componentes que consumiriam esses dados: card e modal</p>

<h2>📑 Organização do Projeto:</h2>

<p>Mantive a organização do projeto o mais simples e o mais próximo possível da organização inicial do template nextjs, criei uma pasta components, e para cada componente/sessão da página criei uma pasta para o componente com arquivo component.tsx e style.ts com os estílos através do styled-components</p>
