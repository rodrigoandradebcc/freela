# Instruções de Setup - DoseDay Landing Page

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **Yarn** ou **npm** (gerenciador de pacotes)
- **Git** (para controle de versão)

## 🚀 Passos para Executar

### 1. Instalar Dependências

Após clonar o repositório, execute:

```bash
# Usando Yarn (recomendado)
yarn install

# Ou usando npm
npm install
```

### 2. Executar em Modo de Desenvolvimento

```bash
# Usando Yarn
yarn dev

# Ou usando npm
npm run dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

### 3. Build para Produção

```bash
# Gerar build de produção
yarn build

# Executar build de produção
yarn start
```

## 🔧 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `yarn dev` | Executa em modo de desenvolvimento |
| `yarn build` | Gera build otimizado para produção |
| `yarn start` | Executa a versão de produção |
| `yarn lint` | Executa verificação de código |

## 📁 Estrutura de Arquivos Criados

```
src/
├── app/
│   ├── globals.css          # ✅ Atualizado - Estilos globais limpos
│   ├── layout.tsx           # ✅ Atualizado - Layout com meta tags
│   └── page.tsx             # ✅ Atualizado - Página principal
├── components/
│   ├── sections/            # ✅ Novo - Seções da landing page
│   │   ├── Header.tsx       # ✅ Novo - Cabeçalho
│   │   ├── HeroSection.tsx  # ✅ Novo - Seção principal
│   │   ├── DoseSection.tsx  # ✅ Novo - "Dose e sua dose"
│   │   ├── CountdownSection.tsx # ✅ Novo - Timer pré-venda
│   │   ├── FunctionalCoffeeSection.tsx # ✅ Novo - Café funcional
│   │   ├── SignupSection.tsx # ✅ Novo - Cadastro com benefícios
│   │   ├── FAQSection.tsx   # ✅ Novo - Perguntas frequentes
│   │   └── Footer.tsx       # ✅ Novo - Rodapé
│   ├── ThemeProvider.tsx    # ✅ Novo - Provider do tema MUI
│   └── index.ts             # ✅ Novo - Exportações
├── theme/
│   └── theme.ts             # ✅ Novo - Tema personalizado MUI
package.json                 # ✅ Atualizado - Dependências MUI
README.md                    # ✅ Atualizado - Documentação
```

## 🎨 Recursos Implementados

### ✅ Tema Personalizado
- Paleta de cores rosa/magenta da marca
- Tipografia Inter personalizada
- Componentes MUI estilizados
- Gradientes e sombras

### ✅ Seções da Landing Page
1. **Header** - Logo e navegação
2. **Hero** - Seção principal com produto
3. **Dose** - Benefícios do produto
4. **Countdown** - Timer para pré-venda
5. **Functional Coffee** - Características técnicas
6. **Signup** - Cadastro com vantagens
7. **FAQ** - Perguntas frequentes
8. **Footer** - Informações e redes sociais

### ✅ Funcionalidades
- Design responsivo (mobile-first)
- Animações e transições suaves
- Countdown timer funcional
- Accordion FAQ interativo
- Botões com efeitos hover
- Gradientes e glassmorphism

### ✅ Tecnologias
- Next.js 15 com App Router
- TypeScript para tipagem
- Material-UI (MUI) v6
- Emotion para CSS-in-JS
- React 19

## 🐛 Solução de Problemas

### Erro de Dependências
Se houver erro na instalação:
```bash
# Limpar cache e reinstalar
rm -rf node_modules yarn.lock
yarn install
```

### Erro de Porta
Se a porta 3000 estiver ocupada:
```bash
# Executar em porta diferente
yarn dev -p 3001
```

### Erro de Build
Se houver erro no build:
```bash
# Verificar sintaxe
yarn lint

# Limpar cache Next.js
rm -rf .next
yarn build
```

## 📱 Teste Responsivo

Para testar em diferentes dispositivos:

1. **Desktop**: Acesse normalmente
2. **Mobile**: Use DevTools (F12) e selecione dispositivo móvel
3. **Tablet**: Redimensione a janela para ~768px

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Deploy automático será feito

### Outros Provedores
```bash
# Gerar build estático
yarn build
yarn export  # Se necessário
```

## 📞 Suporte

Se encontrar problemas:
1. Verifique se todas as dependências foram instaladas
2. Confirme a versão do Node.js (18+)
3. Limpe cache e reinstale dependências
4. Verifique se não há conflitos de porta