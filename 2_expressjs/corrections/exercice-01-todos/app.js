import express from "express";
import { TodoDao } from "./dao/TodoDao.js";
import { Todo } from "./models/Todo.js";

const app = express();

// Classe d'accès aux données
const todoDao = new TodoDao();

// Utilisation du middleware pour la sérialisation/desérialisation en JSON
app.use(express.json());

// Renvoie tous les todos
app.get('/todos', (req, res) => {
    res.json(todoDao.getAll());
});

// Renvoie un todo spécifique
app.get('/todos/:todoId', (req, res) => {
    res.send("hello");
});

// Créé un todo
app.post('/todos', (req, res) => {
    const {title, content, statut} = req.body;
    let todo = new Todo(null, title, content, statut);
    res.json(todoDao.save(todo));
});

// Mettre à jour le todo
app.put('/todos/:todoId', (req, res) => {
    res.send("hello");
});

// Modifier statut
app.put('/todos/:todoId', (req, res) => {
    res.send("hello");
});

// Supprimer le todo
app.delete('/todos/:todoId', (req, res) => {
    res.send("hello");
});

// Récupérer un todo par son title
app.get('/todos/search/:search', (req, res) => {
    res.send("hello");
});

app.listen(3001, () => {
    todoDao.readFile();
    console.log('http://127.0.0.1:3001');
});