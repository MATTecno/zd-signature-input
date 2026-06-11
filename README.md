# ZdSignatureInput

Componente Zeedhi para capturar assinatura por desenho em canvas ou por upload de imagem. O output e sempre entregue em `value` como `data:image/png;base64,...`.

O pacote segue o modelo da documentacao oficial de criacao de componentes Zeedhi:

- `packages/common`: model e interfaces.
- `packages/vue`: view Vue/Vuetify e registro em `InputFactory`.
- `packages/zd-signature-input`: pacote agregador no mesmo formato dos componentes Store instalados no projeto.
- `demo`: aplicacao local para validar o componente fora do projeto consumidor.

## Rodar localmente

```bash
npm install
npm run serve:8081
```

## Qualidade

```bash
npm run check
```

Esse comando roda lint, build e dry-run de publicacao dos tres pacotes.

## Uso no projeto consumidor

```ts
import Vue from 'vue';
import ZdSignatureInput from '@zeedhi/zd-signature-input';

Vue.use(ZdSignatureInput);
```

Metadata:

```json
{
  "name": "assinatura",
  "component": "ZdSignatureInput",
  "label": "Assinatura",
  "height": 220,
  "showUpload": true,
  "validations": {
    "required": {}
  }
}
```

## API

Props novas:

- `height`
- `penColor`
- `backgroundColor`
- `minWidth`
- `maxWidth`
- `showUpload`
- `accept`
- `maxFileSize`

Eventos:

- `input`
- `change`
- `clear`
- `upload`
- `error`

Detalhes de payload estao em `docs/events.md`.

## Release

O projeto usa SemVer. Consulte `CHANGELOG.md` para ver a versao atual e o historico de releases.

Consulte `RELEASE.md` antes de publicar uma nova versao.

## Zeedhi Store

A documentacao oficial orienta registrar componentes na Zeedhi Store pelo formulario:
https://forms.gle/LUwn6pWqNE7udTCG9

Os dados sugeridos para preencher o formulario estao em `store/zeedhi-store-submission.md`.

## Licenca

Este repositorio esta marcado como proprietario por padrao. Antes de publicar como open source, substitua `LICENSE.md` e os campos `license` dos `package.json`.
