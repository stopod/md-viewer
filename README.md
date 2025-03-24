# md-viewer  

## はじめに

これは md ファイルを表示するためだけの機能を持ちます  
ついでに md ファイルの下記コメントをマスクします

```
const randomString = `株式会社 ${Math.random().toString(36).substring(2, 8)}`;

const masked = md
  // ここは本名とか出したくないとき
  .replace(
    /<!-- START: MASK -->[\s\S]*?<!-- END: MASK -->/g,
    "<!-- Masked -->"
  )
  // ここは会社名隠したいとき
  .replace(
    /<!-- START: MASK-C -->[\s\S]*?<!-- END: MASK-C -->/g,
    randomString
  );
```

## 使用方法

React Router を使用して作りました  
デプロイは vercel を想定しています

## その他  
ここで説明しています  
https://qiita.com/stopod/items/0604f8add953e3f6aec2
