# DoseDay - Landing Page

Uma landing page moderna e responsiva para o DoseDay, o primeiro café da beleza do Brasil, desenvolvida com Next.js 15, TypeScript e Material-UI (MUI).

## 🚀 Tecnologias Utilizadas

- **Next.js 15.3.5** - Framework React com App Router e Turbopack
- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5** - Tipagem estática para JavaScript
- **Material-UI (MUI) 6.1.8** - Biblioteca de componentes React
- **Emotion** - CSS-in-JS para estilização
- **ESLint 9** - Linting e formatação de código

## 🎨 Características

- **Design Responsivo** - Adaptável a todos os dispositivos (mobile-first)
- **Tema Personalizado** - Cores e tipografia da marca DoseDay
- **Componentes Modulares** - Arquitetura componentizada e reutilizável
- **Animações Suaves** - Transições e efeitos visuais com Fade e Material-UI
- **SEO Otimizado** - Meta tags e estrutura semântica
- **TypeScript** - Tipagem completa para melhor desenvolvimento
- **FAQ Interativo** - Seção de perguntas frequentes com acordeão animado

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd doseday-webapp
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
src/
├── @types/                 # Definições de tipos TypeScript
│   └── QuestionData.ts    # Interface para dados das perguntas FAQ
├── app/                   # App Router do Next.js 15
│   ├── favicon.ico       # Ícone da aplicação
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal da aplicação
│   ├── page.module.css   # Estilos específicos da página inicial
│   └── page.tsx          # Página inicial
├── components/           # Componentes React organizados por contexto
│   ├── default/         # Componentes padrão/genéricos
│   ├── pre-sale/        # Componentes específicos da pré-venda
│   │   └── SixthSection.tsx  # Seção FAQ com acordeão interativo
│   └── theme/           # Componentes relacionados ao tema
├── constants/           # Constantes e dados estáticos
│   └── QuestionData.ts  # Dados das perguntas frequentes
└── theme/
    └── theme.ts         # Configuração personalizada do tema MUI
```

## 🎨 Seções da Landing Page

A landing page é composta por seções modulares:

1. **Header** - Navegação principal com logo da marca
3. **Dose Section** - Benefícios e características do café
4. **Countdown** - Timer para pré-venda com engajamento da comunidade
5. **Functional Coffee** - Detalhes sobre o café funcional
6. **Signup** - Formulário de cadastro com benefícios exclusivos
7. **FAQ (SixthSection)** - Perguntas frequentes com acordeão interativo
8. **Footer** - Informações de contato e redes sociais

## 🎨 Tema e Paleta de Cores

O projeto utiliza uma paleta de cores cuidadosamente selecionada:

- **Primária**: `#35271B` (Marrom escuro)
- **Secundária**: `#F095BA` (Rosa vibrante)
- **Background**: `#F4EDE3` (Bege claro)
- **Accent**: `#35271B` (Texto principal)

### Tipografia
- **Kombin** - Fonte principal para títulos
- **Maven Pro** - Fonte para textos e conteúdo

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints otimizados:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: até 767px

## 🔧 Funcionalidades Especiais

### FAQ Interativo (SixthSection)
- Acordeão animado com transições suaves
- Ícones dinâmicos (+ para expandir, × para fechar)
- Estado controlado para uma pergunta aberta por vez
- Animações com Fade do Material-UI
- Tipagem TypeScript completa

### Gerenciamento de Estado
- `useState` para controle de estado local
- Interface `QuestionData` para tipagem de dados
- Dados centralizados em arquivos de constantes

## 🚀 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com Turbopack
- `npm run build` - Gera build otimizado para produção
- `npm run start` - Executa a aplicação em modo produção
- `npm run lint` - Executa verificação de código com ESLint

## 🚀 Deploy

Para fazer o deploy da aplicação:

```bash
npm run build
npm run start
```

### Deploy em Plataformas
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**

## 🛠️ Desenvolvimento

### Adicionando Novas Seções
1. Crie o componente em `src/components/pre-sale/`
2. Defina tipos necessários em `src/@types/`
3. Adicione constantes em `src/constants/`
4. Importe e use na página principal

### Modificando o Tema
Edite `src/theme/theme.ts` para personalizar:
- Paleta de cores
- Tipografia
- Breakpoints
- Componentes MUI

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Código
- Use TypeScript para tipagem
- Siga as convenções do ESLint
- Componentes funcionais com hooks
- Nomeação em PascalCase para componentes
- Organize imports por categoria

## 📋 Requisitos do Sistema

- **Node.js**: 18.0.0 ou superior
- **npm**: 8.0.0 ou superior (ou yarn equivalente)
- **Navegadores suportados**: Chrome, Firefox, Safari, Edge (versões modernas)

## 🐛 Solução de Problemas

### Problemas Comuns
- **Erro de build**: Verifique se todas as dependências estão instaladas
- **Problemas de tipagem**: Execute `npm run lint` para verificar erros TypeScript
- **Estilos não aplicados**: Verifique se o tema MUI está configurado corretamente

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**DoseDay** - O primeiro café da beleza do Brasil ☕✨