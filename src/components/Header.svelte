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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px 10px 20px;
    width: 320px;
    height: 130px;
    background-image: url('../assets/fundo.png');
    background-size: contain;
  }
</style>
