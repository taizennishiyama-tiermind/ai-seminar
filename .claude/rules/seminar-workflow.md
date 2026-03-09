# セミナーサイト構築ルール

## サイト作成の手順

1. イベントフォルダの `manifest.md` を読み、セミナーの意図・テーマを把握する
2. `outline.md` があれば内容構成を確認する
3. `docs/design-system.md` を必ず参照し、カラー・タイポグラフィ・コンポーネントパターンに従う
4. `assets/png/` のイラスト素材を積極的に活用する（`mix-blend-multiply`, 低opacity）
5. 過去イベントの `site/src/` を参照し、実装パターンを踏襲する

## イベントフォルダの命名規則

`YYYYMMDD` + イベント名（日本語）で作成する：

```
event/20260312和歌山城南ロータリークラブ卓話/
event/20260501東京AIセミナー/
```

## サイト作成時の原則

- 各イベントの `site/` は独立した Vite + React プロジェクトとして構築する
- ルートディレクトリに `package.json` や `src/` を作成しない
- イベント間の依存関係を持たせない
- 日本語コンテンツで統一する
- ストーリーブック形式で、スクロールに応じたアニメーションで直感的に内容が伝わるようにする

## アセット管理

- **汎用アセット**（どのセミナーでも使い回せるもの）→ リポジトリ直下の `assets/` に格納
- **イベント固有アセット**（特定セミナーの画像・動画・埋め込み素材）→ `event/<イベント>/site/src/assets/` に格納

## 開発フロー

1. `manifest.md` の内容を元にサイトを構築する
2. ユーザーと壁打ちしながら何度でもやり直す
3. ローカルホスト（`npm run dev`）で確認しながら調整する
4. ユーザーが「push して」「PR 作って」と指示するまで push しない
5. push / PR 作成はユーザーの明示的な指示があった場合のみ行う

## デザインシステムの遵守

- `docs/design-system.md` に定義されたカラーパレット（Blue Primary + Warm Sand Accent）を使う
- フォント: Inter + Noto Sans JP（本文）、JetBrains Mono（コード）
- Framer Motion のアニメーションパターン（`whileInView`, `viewport={{ once: true }}`, stagger）を統一的に使う
- イラストは透過PNG、`pointer-events-none` で装飾的に配置する
