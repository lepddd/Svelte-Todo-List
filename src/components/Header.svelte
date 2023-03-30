<script>
  import CurrentDate from "./CurrentDate.svelte";
  import TaskCounterBar from "./TaskCounterBar.svelte";
</script>

<header>
  <CurrentDate />
  <TaskCounterBar />
</header>

<style>
  header {
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
    height: 130px;
    background-image: url("../assets/fundo.png");
    background-size: contain;
  }
</style>
