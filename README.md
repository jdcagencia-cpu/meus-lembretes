# 📱 Meus Lembretes — PWA

Agente de lembretes diários com IA. Funciona como app instalável no celular e no PC.

---

## Como publicar no GitHub Pages (gratuito)

### Passo 1 — Crie uma conta no GitHub
Acesse https://github.com e crie uma conta gratuita se ainda não tiver.

### Passo 2 — Crie um repositório
1. Clique em "New repository"
2. Nome sugerido: `meus-lembretes`
3. Marque como **Public**
4. Clique em "Create repository"

### Passo 3 — Faça upload dos arquivos
1. Na página do repositório, clique em "uploading an existing file"
2. Arraste todos os arquivos desta pasta:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - pasta `icons/` (com os dois arquivos .png)
3. Clique em "Commit changes"

### Passo 4 — Ative o GitHub Pages
1. Vá em **Settings** → **Pages**
2. Em "Source", selecione **main** branch e pasta **/root**
3. Clique em **Save**
4. Aguarde 1–2 minutos

### Passo 5 — Acesse e instale
Seu app estará disponível em:
`https://SEU_USUARIO.github.io/meus-lembretes/`

- **No celular Android**: abra no Chrome → menu (⋮) → "Adicionar à tela inicial"
- **No celular iOS**: abra no Safari → compartilhar (□↑) → "Adicionar à Tela de Início"
- **No PC Chrome**: ícone de instalação (⊕) na barra de endereço

---

## Funcionalidades

- ✅ Adicionar tarefas manualmente com categoria, prioridade e prazo
- ✦ Descrever em texto livre e a IA organiza automaticamente
- ◎ Resumo do dia gerado por IA com sugestão de ordem de execução
- 📴 Funciona offline (tarefas salvas no dispositivo)
- 📱 Interface responsiva para celular e PC

---

## Observações

- As tarefas são salvas localmente no dispositivo (localStorage)
- Para sincronizar entre dispositivos, seria necessário um banco de dados na nuvem
- A IA (Claude) precisa de conexão com internet para funcionar
