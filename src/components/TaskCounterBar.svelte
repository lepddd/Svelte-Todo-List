<script>
  import { store } from "../stores/taskStore";

  //update variables automaticaly when store is change
  $: completed = $store.filter((task) => {
    return task.complete === true;
  }).length;
  $: tasks = $store.length;
  $: remaining = tasks - completed;
</script>

<div class="task-bar">
  <div>
    <p>{tasks}</p>
    <p>Total</p>
  </div>
  <div>
    <p>{remaining}</p>
    <p>Remaining</p>
  </div>
  <div>
    <p>{completed}</p>
    <p>Done</p>
  </div>
</div>

<style>
  .task-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #fff;
  }
  .task-bar div p:first-child {
    font-size: 0.875rem;
    font-weight: 500;
  }
  .task-bar div p:last-child {
    font-size: 0.875rem;
    font-weight: 700;
  }
</style>
