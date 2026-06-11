# Processo de Release

Este projeto usa SemVer e publica tres pacotes relacionados:

- `@marcelodl49/zd-signature-input-common`
- `@marcelodl49/zd-signature-input-vue`
- `@marcelodl49/zd-signature-input`

## Checklist

1. Atualize a versao em todos os `package.json`.
2. Atualize o `CHANGELOG.md`.
3. Sincronize o lockfile.

```bash
npm install --package-lock-only
```

4. Rode a verificacao completa.

```bash
npm run check
```

5. Crie o commit e a tag anotada.

```bash
git add .
git commit -m "chore: release vX.Y.Z"
git tag -a vX.Y.Z -m "Release vX.Y.Z"
```

6. Publique o codigo e as tags.

```bash
git push origin main --tags
```

7. Publique os pacotes quando estiver autenticado no npm/registro autorizado.

```bash
npm run publish:packages
```

8. Envie ou atualize a submissao na Zeedhi Store usando os dados em `store/zeedhi-store-submission.md`.
