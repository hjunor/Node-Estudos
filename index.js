const express = require('express');

const server = express();

const Tarefas = [{
    id : '1',
    title : 'novo projeto',
    task: []
}]
server.use(express.json());

server.get('/projects',(req, res) => {
     res.json(Tarefas);
});

server.post('/projects',(req, res) => {
    const { id } = req.body;
    const { title } = req.body;

    Tarefas.push({
        id : id,
        title : title,
        task: []
    })

    res.json(Tarefas);
});

server.post('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = Tarefas.find(p => p.id == id);
  
    project.task.push(title);
  
    return res.json(project);
  
  });

server.post('/projects/:id/task',(req,res) =>{
    const { id } = req.params;
    const { title } = req.body;

    const projects = Tarefas.find(p => p.id == id)
    
    projects.task.push(title);

    return res.json(projects)
})
 
 
server.delete('/projects/:id', (req, res) => {

    const { id } = req.params;
  
    const projectIndex = Tarefas.findIndex(p => p.id == id);
  
    Tarefas.splice(projectIndex, 1);

    return res.send();
  
  });

server.listen(3003);
