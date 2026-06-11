# Contribuindo

Obrigado por melhorar o `ZdSignatureInput`.

## Ambiente

Use Node.js 20 ou 22 e npm 10+.

```bash
npm install
npm run serve:8081
```

## Fluxo recomendado

1. Crie uma branch a partir de `main`.
2. Faça alteracoes pequenas e focadas.
3. Atualize exemplos e documentacao quando alterar API publica.
4. Rode a verificacao completa antes de abrir PR.

```bash
npm run check
```

## Padroes

- Mantenha o output do componente como Data URL PNG.
- Preserve compatibilidade com metadata Zeedhi.
- Evite dependencias novas sem necessidade clara.
- Nao commite `dist`, `types`, `node_modules`, `.tgz` ou arquivos de ambiente.

## Commits

Use mensagens objetivas, preferencialmente no estilo Conventional Commits:

```text
feat: add disabled upload state
fix: preserve signature after resize
docs: document metadata example
```
