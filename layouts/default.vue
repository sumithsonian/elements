<template>
  <div class="platform">
    <div class="platform__header">
      <GlobalHeader
        ><p>Header</p>
        <ul class="globalHeader__nav">
          <li>ほげほげほげほげほげほげほげほげ</li>
          <li>ほげほげほげほげほげほげほげほげ</li>
          <li>ほげほげほげほげほげほげほげほげ</li>
          <li>ほげほげほげほげほげほげほげほげ</li>
        </ul>
      </GlobalHeader>
    </div>
    <div class="platform__contents">
      <main class="mainContents">
        <nuxt />
      </main>
      <GlobalFooter><p>Footer</p></GlobalFooter>
    </div>
    <div class="platform__bottomNav">
      <BottomNav>
        <ul class="bottomNav">
          <li><span>メニュー</span></li>
          <li><span>ホーム</span></li>
          <li><span>作成</span></li>
          <li><span>通知</span></li>
          <li><span>マイページ</span></li>
        </ul>
      </BottomNav>
    </div>
  </div>
</template>
