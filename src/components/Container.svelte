<script>
  import AddNewTask from "./AddNewTask.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import TaskContainer from "./TaskContainer.svelte";
  import TaskTitle from "./TaskTitle.svelte";

  //open and close add new task tab
  let isOpen = false;

  const closeForm = (e) => {
    isOpen = e.detail;
  };

  const openForm = () => {
    isOpen = true;
  };
</script>

<div class="container">
  <Header />
  {#if isOpen}
    <TaskTitle title={"Add"} body={"new task"} />
    <AddNewTask on:close={(e) => closeForm(e)} />
  {:else}
    <TaskTitle title={"Task"} body={"for today"} />
    <TaskContainer />
    <Footer on:click={() => openForm()} />
  {/if}
</div>

<style>
  .container {
    position: relative;
    width: 320px;
    height: 568px;
  }
</style>
