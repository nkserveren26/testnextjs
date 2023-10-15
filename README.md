学習メモ

## Next.jsに備わる各コンポーネント
### Link
他のページへ遷移するコンポーネント。  
実体はaタグで、内部でこの要素がラッピングされている。  
href属性で遷移先ページのリンクを指定する。  
LinkコンポーネントのpropsはLinkPropsで定義されている。

### PropsWithChildren
childrenの型を定義する。  

childrenを関数コンポーネントで受け取る際、childrenの型を次のように定義するのがやり方の1つ。
```sample.tsx
function Component({ children }: { children: ReactNode; }) {
    ...
};
```

PropsWithChildrenを使えば↑よりも簡潔に書ける。
```
function Component({ children }: PropsWithChildren) {
    ...
};
```

## メモ化
関数や変数の値を保持し、同一の呼び出しがあったときにその値を返す（再利用する）仕組み。

## フック

### useCallback
コールバック関数をメモ化し、その関数を返すフック。  
useCallback(関数, [])  
　第1引数にメモ化する関数を指定  
　第2引数に配列を指定  

コンポーネントの再描画が行われる際のuseCallbackの挙動は以下のようになる  
　再描画前と再描画後で配列の中の値が同じ→メモ化時に作成した関数を返す  
　再描画前と再描画後で配列の中の値が異なる→新しく関数を作成し、それを返す  

基本的に、再描画に伴う不要な関数の再作成を防ぐためにuseCallbackが使われる  
　→こうすることでパフォーマンス向上につながる  

## Atomic Design
一貫性のあるデザインを作るための考え方、方法論。  
Atomic Designでは、コンポーネントを以下の階層に分類し、各階層ごとにコンポーネントを定義する。  
　Atoms  
　Molecules  
　Organisms  
　Templates  
　Pages  

### Atoms
これ以上分割できないコンポーネント。  
（例：ボタン、テキストなど）

Atomsは以下の特徴を持つ。  
　状態やふるまいを持たない（ビジネスロジックを持たない）  
　見た目の設定に必要なパラメータはpropsで受け取る（汎用的に使えるようにするため）


### Molecules
複数のAtomsを組み合わせたコンポーネント。  
（例：ラベル付きのボタンなど）

Moleculesも状態やふるまいを持たず、汎用的に使えるようにするために親から値を受け取って見た目を定義する。  

### Organisms
複数のMoleculesやAtomsを組み合わせたコンポーネント。  
Moleculesよりも具体的なUIを定義するものが該当。  
（サインインフォーム、ヘッダーなど）

また、状態やふるまいを持つ。  
　Presentational Componentで見た目を定義  
　Container Componentでビジネスロジック（ふるまい等）を定義  

### Templates
ページ全体のレイアウトを定義するコンポーネント。  
複数のOrganism以下のコンポーネントを組み合わせ、それらをCSSでレイアウトする。  

### Pages
ページ単位のコンポーネント。    
Pagesでは状態管理やAPIコールなどのふるまいに関するものを実装。  
（レイアウトはTemplatesで管理）  

Pageコンポーネントはpagesディレクトリ直下に配置し、export defaultを指定する。

## styled-component
CSS in JSの1つ。  
htmlの各要素やコンポーネントのスタイル（レイアウト）を、各コンポーネントのtsxファイル内で定義する。  
スタイルはCSSで定義するのと同じ。  
styled-componentで定義したスタイルは、描画時にスタイルを作成する。  
そして、そのスタイルに紐づくclassNameを対象コンポーネントのclass属性に指定する。  
このようにして、対象コンポーネントにCSSのレイアウトが反映されるようになっている。
