<template>
  <div class="container">
    <ElementsHeading :level="1">elements</ElementsHeading>
    <ElementsHeading :level="2">ikaclo</ElementsHeading>
    <Ikaco />
    <ElementsHeading :level="2">column</ElementsHeading>
    <div class="row">
      <div class="col1of3">1カラム</div>
      <div class="col1of3">1カラム</div>
      <div class="col1of3">1カラム</div>
    </div>
    <div class="row">
      <div class="col1of4">1カラム</div>
      <div class="col1of4">1カラム</div>
      <div class="col2of4">1カラム</div>
    </div>
    <div class="row">
      <div class="col1of4">1カラム</div>
      <div class="col3of4">1カラム</div>
    </div>
    <ElementsHeading :level="2">img</ElementsHeading>
    <ElementsImg src="https://placehold.jp/150x150.png" alt="hoge" />
    <ElementsHeading :level="2">thumbnail</ElementsHeading>
    <ElementsThumbnail
      src="https://placehold.jp/150x200.png"
      alt="hoge"
      size="small"
    />
    <ElementsThumbnail src="https://placehold.jp/150x200.png" alt="hoge" />
    <ElementsThumbnail
      src="https://placehold.jp/150x200.png"
      alt="hoge"
      size="large"
    />
    <ElementsThumbnail
      src="https://placehold.jp/150x200.png"
      alt="hoge"
      size="small"
      sharp="circle"
    />
    <ElementsThumbnail
      src="https://placehold.jp/150x200.png"
      alt="hoge"
      sharp="circle"
    />
    <ElementsThumbnail
      src="https://placehold.jp/150x200.png"
      alt="hoge"
      size="large"
      sharp="circle"
    />
    <ElementsHeading :level="2">btn</ElementsHeading>
    <ElementsBtn size="small">ボタン</ElementsBtn>
    <ElementsBtn>ボタン</ElementsBtn>
    <ElementsBtn size="large">ボタン</ElementsBtn>
    <ElementsBtn size="small" sharp="block">ボタン</ElementsBtn>
    <ElementsBtn sharp="block">ボタン</ElementsBtn>
    <ElementsBtn size="large" sharp="block">ボタン</ElementsBtn>
    <ElementsHeading :level="2">画像 + テキスト</ElementsHeading>
    <BlocksImgWTxt src="https://placehold.jp/150x150.png" alt="hoge">
      <p>ふがふが</p>
      <p>ほげほげ</p>
    </BlocksImgWTxt>
  </div>
</template>

<script>
export default {}
</script>
