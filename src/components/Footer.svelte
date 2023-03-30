<script>
  import Icon from "@iconify/svelte";
</script>

<footer>
  <button on:click
    ><Icon icon="ant-design:plus-outlined" width="19" height="19" />Add task</button
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
    gap: 10px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #d946ef 0%, #9333ea 100%);
    background-color: #d946ef;
    font-weight: 400;
  }
</style>
