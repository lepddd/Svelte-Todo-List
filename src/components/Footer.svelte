<script>
  import Icon from "@iconify/svelte";
</script>

<footer>
  <button on:click
    ><Icon icon="ant-design:plus-outlined" width="19" height="19" />Add new item</button
  >
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 320px;
    position: absolute;
    bottom: 0;
    background-color: #fff;
  }
  footer > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    width: 150px;
    height: 40px;
    background: linear-gradient(95.41deg, #da22ff 0%, #9733ee 100%);
    padding: 0 10px;
    font-weight: 400;
  }
</style>
