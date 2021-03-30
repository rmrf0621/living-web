<template>
  <div class="app-footer">
    <div class="bottom">
      <!-- <div class="footer-left">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="footer-right">
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'appfooter',
  data() {
    return {
      name: 'footer'
    }
  }
}
</script>
<style lang="less" scoped>
.app-footer {
  margin-top: 1rem;
  background-color: #33312d;
  min-width: 120rem;
  // min-height: 13.5rem;
  // height: 135px;
  background: #32302c;
  .bottom {
    width: 120rem;
    margin: 0 auto;
    // height: 13.5rem;
    height: 135px;
    justify-content: space-between;
  }
}
</style>
