 'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/backoffice/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/backoffice/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};

