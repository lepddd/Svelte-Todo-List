<script>
  export let title;
  export let body;
</script>

<div class="task-title">
  <span>{title}</span>
  <span>{body}</span>
</div>

<style>
  .task-title {
    padding: 10px 0;
    font-size: 0.875rem;
    color: #495057;
    text-align: center;
    background-color: #fff;
    font-weight: 400;
  }
  .task-title span:first-child {
    font-weight: 700;
  }
</style>
