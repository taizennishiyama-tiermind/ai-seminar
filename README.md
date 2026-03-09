# AI活用セミナー ストーリーブックサイト

セミナーごとに動的な Web ページ（ストーリーブックサイト）を作成・管理するリポジトリ。

## ディレクトリ構成

```
.
├── CLAUDE.md              # Claude Code 向けプロジェクト指示書
├── assets/                # 全イベント共通のアセット
│   ├── png/               # イラスト素材（l_, m_, s_ プレフィックス）
│   ├── movie/             # 動画素材
│   ├── captcha/           # キャプチャ画像
│   ├── claude_output/     # Claude 生成物
│   └── illustration_guideline.pdf
├── docs/
│   └── design-system.md   # デザインシステム仕様書
└── event/
    └── YYYYMMDD<イベント名>/
        ├── manifest.md    # ビルド指示・クリエイティブ方向性
        ├── outline.md     # セミナー内容アウトライン
        └── site/          # Vite + React サイト本体
```

## 運用フロー

### 1. イベントフォルダの作成

セミナーが決まったら `event/` 配下に新しいフォルダを作成する。

**命名規則**: `YYYYMMDD` + イベント名（日本語OK）

```
event/20260312和歌山城南ロータリークラブ卓話/
event/20260501東京AIセミナー/
```

### 2. manifest.md にテーマ・内容を投入

`manifest.md` に音声入力やコピペで、テーマ・内容の叩きを雑多に入力する。きれいに整形する必要はない。Claude Code がこれを読み取ってサイトを構築する。

```
event/YYYYMMDD<イベント名>/manifest.md
```

### 3. ストーリーブックサイトの作成

Claude Code に指示して、以下を参照しながらサイトを構築する：

- `docs/design-system.md` — デザインシステム（カラー、タイポグラフィ、コンポーネント）
- `assets/` — 共通イラスト・動画素材
- 過去イベントの `site/` ソースコード — 実装パターンの参考

### 4. イベント固有アセットの管理

イベント特有の画像・動画・埋め込みリンクなどがある場合は、該当イベントフォルダ内に格納する：

```
event/YYYYMMDD<イベント名>/
  site/
    src/
      assets/        # イベント固有の画像・動画など
```

どのセミナーでも使い回せる汎用アセットは、リポジトリ直下の `assets/` に格納する。

### 5. 壁打ち → ローカル確認 → Push

1. Claude Code と壁打ちしながら何度もやり直してサイトを作り込む
2. `npm run dev` でローカルホスト確認しながら調整
3. 形になったら Claude Code に「push して PR 作って」と指示

## 技術スタック

- React 19 + TypeScript + Vite 7
- Tailwind CSS v4
- Framer Motion（アニメーション）
- Lucide React（アイコン）
