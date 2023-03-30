<script>
  import { createEventDispatcher } from "svelte";
  import { store } from "../stores/taskStore";
  import Icon from "@iconify/svelte";

  const dispatch = createEventDispatcher();

  let isOpen;
  let input;

  const handleSubmit = (task) => {
    store.newTask(task);
    closeClick();
  };

  const closeClick = () => {
    isOpen = false;
    dispatch("close", isOpen);
  };
</script>

<form class="add-new-container" on:submit={() => handleSubmit(input)}>
  <div class="input-container">
    <input class="input-task" type="text" bind:value={input} required />
    <span>New task</span>
  </div>
  <div class="btn-container">
    <button>
      <Icon icon="ic:round-add-task" color="white" width="20" height="20" />
      Add</button
    >
    <button on:click={closeClick}>Cancel</button>
  </div>
</form>

<style>
  .input-container {
    position: relative;
    width: 300px;
    margin: 20px auto;
  }
  .input-container > span {
    position: absolute;
    top: 10px;
    left: 10px;
    pointer-events: none;
    color: #adb5bd;
    transition: 0.2s ease-in-out;
  }
  .input-task:valid ~ span,
  .input-task:focus ~ span {
    font-size: 14px;
    transform: translateX(10px) translateY(-22px);
    background-color: #414345;
    color: #fff;
    padding: 2px 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  .add-new-container {
    background-color: #fff;
  }
  .input-task {
    padding: 0 10px;
    border: none;
    width: 300px;
    height: 40px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 5px;
    outline-color: #414345;
  }
  .btn-container {
    width: 100%;
    max-width: 300px;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .btn-container > button:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    font-weight: 500;
    padding: 6px 10px;
    color: #f4f4f4;
    background: linear-gradient(90deg, #d946ef 0%, #9333ea 100%);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-container > button:last-child {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    font-weight: 500;
    background-color: #f4f4f4;
    padding: 6px 12px;
    color: #f43f5e;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s color ease-in-out;
  }

  .btn-container > button:last-child:hover {
    color: #e11d48;
  }
</style>
