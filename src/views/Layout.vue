<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider></Sider>
      <Layout>
        <Header class="header-wrapper"></Header>
        <Content></Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout-wrapper,.layout-outer{
  height: 100%;
  .header-wrapper{
    background-color: #ffffff;
    box-shadow:0 1px 1px rgba(0,0,0,.1);
  }

}

</style>
