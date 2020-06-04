import fetch from 'node-fetch';
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

fetch(url)
    .then(res => res.json())
    .then(result => {
        const todo = result as Todo;  // add type here to catch an error
        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id, title, completed);
    });

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Hs a title of: ${ title}
        Is it finished: ${completed}
        `);
};