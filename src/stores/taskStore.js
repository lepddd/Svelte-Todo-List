import { writable } from "svelte/store";
import { nanoid } from "nanoid";

const newTask = (store, task) => {
  let newTask = { id: nanoid(), title: `${task}`, complete: false };
  return [newTask, ...store];
};

const completeTask = (store, id) => {
  const tasks = store.map((task) => {
    task.id === id ? (task = { ...task, complete: !task.complete }) : task;
    return task;
  });
  return tasks;
};

const deleteTask = (store, id) => {
  return store.filter((task) => task.id !== id);
};

function taskStore() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    newTask: (task) => update((store) => newTask(store, task)),
    completeTask: (id) => update((store) => completeTask(store, id)),
    deleteTask: (id) => update((store) => deleteTask(store, id)),
  };
}

export const store = taskStore();
