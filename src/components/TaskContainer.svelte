<script>
  import { store } from "../stores/taskStore";
  import TaskCard from "./TaskCard.svelte";
</script>

<div class="task-container">
  {#each $store as task, index}
    <TaskCard {task}/>
  {/each}
</div>

<style>
  .task-container {
    background-color: #fff;
    height: calc(100% - 267px);
    overflow: auto;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #5e6472;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #414345;
  }
</style>
