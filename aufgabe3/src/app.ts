import fetch from 'node-fetch';
import https from 'https';


interface TodoItem {
    // TODO: Implement your interface with the properties todoItemTitle, title, createdAt und updatedAt.
}

const agent = new https.Agent({
    rejectUnauthorized: false  // Ignoriert das selbstsignierte Zertifikat
});

// TODO: Write a type guard for TodoItem
//       Vervollständige die Funktionsdeklaration mit den Parametern und dem Rückgabewert.
function isTodoItem... {
}

async function fetchTodoTasks(): Promise<TodoItem[]> {
    const response = await fetch('https://localhost:5443/api/TodoTasks', { agent });
    if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Daten');
    }
    const data: any = await response.json();
    // TODO: Erstelle ein TodoItem mit den Properties todoItemTitle, title, createdAt und updatedAt.
    //       und speichere die Daten in todoItems.    
    const todoItems = null; // Your implementation
    // Überprüfen, ob die Antwort dem Category-Interface entspricht
    if (Array.isArray(todoItems) && todoItems.every(isTodoItem)) {
        return todoItems;
    } else {
        throw new Error('Invalid data from server.');
    }
}

// Start fetching the categories
const todoTasks = await fetchTodoTasks();
for (const todoTask of todoTasks.filter(t => t.todoItemTitle == "Itaque et earum modi similique veniam explicabo quo.")) {
    console.log(`TodoTask ${todoTask.title} is in TodoItem ${todoTask.todoItemTitle}`);
}
