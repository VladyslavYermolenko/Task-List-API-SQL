const app = require('./app');

// psql -h 127.0.0.1 tasklists todolist_app
// const hostname = '10.177.1.13';
const hostname = 'localhost'; // 127.0.0.1
const port = 3000;
app.listen(port, hostname, (error) => {
    error ? console.log(error) : console.log(`Server listens http://${hostname}:${port}`);
});
























//////////////////////////////////////////////////////////////////////
//                     Test commands (lists)                        //
//////////////////////////////////////////////////////////////////////
// GET:     http :3000/lists                                        //
// or:      http :3000/lists/1/tasks                                //
//                                                                  //
// POST:    http POST :3000/lists listName="New List"               //
//                                                                  //
// DELETE:  http DELETE :3000/lists listId=1                        //
//                                                                  //
// PUT:     http PUT :3000/lists?listId=1 listName="Put List"       //
//                                                                  //
// PATCH: http PATCH :3000/lists?listId=1 listName="Patch List"     //
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//                     Test commands (tasks)                        //
//////////////////////////////////////////////////////////////////////
// GET:     http :3000/tasks                                        //
// or:      http :3000/tasks?listId=1                               //
//                                                                  //
// POST:    http POST :3000/tasks/1 taskName="New Task"             //
//                                                                  //
// DELETE:  http DELETE :3000/tasks taskId=1                        //
//                                                                  //
// PUT:     http PUT :3000/tasks?taskId=1 done=true                 //
// or       http PUT :3000/tasks?taskId=1 taskName="Put Task"       //
//                                                                  //
// PATCH: http PATCH :3000/tasks?taskId=1 done=true                 //
// or:    http PATCH :3000/tasks?taskId=1 taskName="Patch Task"     //
//////////////////////////////////////////////////////////////////////