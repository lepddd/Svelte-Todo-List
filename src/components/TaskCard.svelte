<script>
  import { store } from "../stores/taskStore";
  import Icon from "@iconify/svelte";

  export let task;

  $: ({ id, title, complete } = task);
</script>

<div class="task-card">
  <span class="check-box" class:active={complete === true} />
  <span
    class="task-name"
    class:active={complete === true}
    on:click={() => store.completeTask(id)}>{title}</span
  >
  <span class="delete-button" on:click={() => store.deleteTask(id)}
    ><Icon
      icon="akar-icons:minus"
      color="#1e293b"
      width="24"
      height="24"
    /></span
  >
</div>

<style>
  .task-card {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    margin: 0 auto;
    padding: 6px 10px;
    margin-bottom: 10px;
    color: #1e293b;
  }
  .check-box {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #1e293b;
    background-color: white;
    border-radius: 50%;
  }
  .check-box.active::after {
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    content: "";
    width: 8px;
    height: 8px;
    background-color: #94a3b8;
  }

  .check-box.active {
    border: 2px solid #94a3b8;
  }
  .task-name {
    margin: 0 10px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
  }
  .task-name.active {
    text-decoration: line-through;
    color: #94a3b8;
  }
  .delete-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
</style>
