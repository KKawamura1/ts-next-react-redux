Create Character Sheet
===

イケイケ Web Framework で Arianrhod Character Sheet 作成支援ツールを作りたい

せっかく手に入れた OCR 結果を使いたいという気持ち

## 使い方

```bash
$ git clone git@github.com:board-game-part/create-character-sheet.git
$ cp Path-to-your-skill.csv src/server/db/skill.csv  # そのうち真面目な DB にしたい気持ち
$ yarn build && yarn start  # and go to `localhost:3000`
```

## メモ: 実装上の登場人物

- React
  - Html を JS の一級要素として扱える JSX （拡張JS）を使えるようになるフレームワーク
  - 近年のデファクト
- TypeScript
  - JS に型を付けた言語
  - React と組み合わせたときの拡張子は .tsx
- next.js
  - React を使うイケイケフレームワーク
  - 簡易な書き方でめっちゃ速い webpage を作ってくれる
  - JS トランスパイラ (Babel)、 import bundler (webpack)、拡張CSS コンパイラ (Sass) などの管理もやってくれる
