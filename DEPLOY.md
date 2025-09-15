# Deploy para GitHub Pages

Este documento contém as instruções para configurar e publicar este projeto no GitHub Pages.

## Configurações Realizadas

### 1. Vite Configuration
- ✅ Base path configurado para `/evolutta-ia-hub/proposta-comercial/julio-neto-csc/`
- ✅ Build de produção testado e funcionando

### 2. GitHub Actions Workflow
- ✅ Workflow criado em `.github/workflows/deploy.yml`
- ✅ Configurado para deploy automático no push para main

### 3. Arquivos Necessários
- ✅ `.nojekyll` presente na raiz do projeto
- ✅ Build de produção gerando arquivos corretos

## Passos para Ativar GitHub Pages

### No Repositório GitHub:

1. **Acesse as Configurações**:
   - Vá para o repositório: `https://github.com/fabricioCraft/evolutta-ia-hub`
   - Clique em "Settings" (Configurações)

2. **Configure GitHub Pages**:
   - No menu lateral, clique em "Pages"
   - Em "Source", selecione "GitHub Actions"
   - Salve as configurações

3. **Ative as Permissões**:
   - Vá para "Settings" > "Actions" > "General"
   - Em "Workflow permissions", selecione "Read and write permissions"
   - Marque "Allow GitHub Actions to create and approve pull requests"
   - Clique em "Save"

### Deploy Automático:

Após configurar, o deploy será automático:
- ✅ A cada push na branch `main`
- ✅ Build será executado automaticamente
- ✅ Site será publicado em: `https://fabriciocraft.github.io/evolutta-ia-hub/proposta-comercial/julio-neto-csc/`

## Comandos Úteis

```bash
# Build local para teste
npm run build

# Preview do build
npm run preview

# Desenvolvimento
npm run dev
```

## Estrutura de Arquivos

```
.
├── .github/workflows/deploy.yml  # Workflow do GitHub Actions
├── .nojekyll                     # Desabilita Jekyll
├── dist/                         # Build de produção
├── src/                          # Código fonte
├── vite.config.ts               # Configuração do Vite
└── DEPLOY.md                    # Este arquivo
```

## Verificação

Após o deploy, verifique:
- ✅ Site acessível na URL do GitHub Pages
- ✅ Assets carregando corretamente
- ✅ Navegação funcionando
- ✅ Responsividade mantida

## Troubleshooting

### Erro 404 nos Assets
- Verifique se o `base` no `vite.config.ts` está correto
- Confirme se o workflow está usando o caminho correto

### Deploy Falhando
- Verifique as permissões do GitHub Actions
- Confirme se o GitHub Pages está configurado para "GitHub Actions"

### Site Não Carregando
- Aguarde alguns minutos após o deploy
- Verifique se não há erros no workflow do Actions