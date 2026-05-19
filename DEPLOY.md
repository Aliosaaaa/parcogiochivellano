# Deploy parcogiochivellano.dev

## Stato attuale

- Repo GitHub: https://github.com/Aliosaaaa/parcogiochivellano
- GitHub Pages attivo su branch `gh-pages`
- CNAME impostato: `parcogiochivellano.dev`
- URL temporaneo (mentre il DNS non è ancora attivo): https://aliosaaaa.github.io/parcogiochivellano/

## Configurazione DNS su Cloudflare

Apri Cloudflare → seleziona `parcogiochivellano.dev` → DNS → Records → Add record.

### 4 record A (root domain)

| Type | Name | IPv4 address     | Proxy status | TTL  |
|------|------|------------------|--------------|------|
| A    | @    | 185.199.108.153  | DNS only     | Auto |
| A    | @    | 185.199.109.153  | DNS only     | Auto |
| A    | @    | 185.199.110.153  | DNS only     | Auto |
| A    | @    | 185.199.111.153  | DNS only     | Auto |

### 1 record CNAME (www)

| Type  | Name | Target              | Proxy status | TTL  |
|-------|------|---------------------|--------------|------|
| CNAME | www  | aliosaaaa.github.io | DNS only     | Auto |

**IMPORTANTE**: la nuvoletta Proxy deve essere GRIGIA (DNS only), non arancione.
Altrimenti GitHub Pages non riesce a emettere il certificato HTTPS.

### Verifica

Dopo 2-5 minuti:
```
dig parcogiochivellano.dev +short
```
Deve restituire i 4 IP di GitHub.

Poi su GitHub:
1. Vai su https://github.com/Aliosaaaa/parcogiochivellano/settings/pages
2. Clicca **"Check again"** sotto Custom domain
3. Quando il dominio è verificato, spunta **"Enforce HTTPS"**

## Aggiornare il sito (deploy)

Dalla cartella del progetto:
```bash
npm run build
git add -A && git commit -m "update"
git push

# Deploy su gh-pages
git worktree add -B gh-pages /tmp/pages-deploy
rm -rf /tmp/pages-deploy/*
cp -R out/. /tmp/pages-deploy/
cd /tmp/pages-deploy
git add -A && git commit -m "deploy"
git push
cd -
git worktree remove /tmp/pages-deploy
```
