export const Mutation = {
    addTodo : (parent,{addTodoInput},{db},info) => {
        if (!existInArray(db.users,id,addTodoInput.userId)) {
                throw new Error(`le user d'id ${addTodoInput.userId} n'existe pas `)
        }else{
            const newTodo = {
                id:db.todos[db.todos.length-1].id+1,
                status:'WAITING',
                ...addTodoInput
            }
            db.todos.push(newTodo)
            return newTodo 
        }
    }, 
    updateTodo: (parent, { id, updateTodoInput }, { db}, infos) => {
        // il faudra vérifier qu'on a un userId et que ce userId correspond à un user
        if (
          updateTodoInput.userId &&
          !existInArray(db.users, "id", updateTodoInput.userId)
        ) {
          throw new Error(`Le user d'id ${updateTodoInput.userId} n'existe pas`);
        } else {
          //Il faut que l'id du todo existe
          const todo = db.todos.find((todoItem) => todoItem.id === id);
          if (!todo) {
            throw new Error(`Le todo d'id ${id} n'existe pas`);
          } else {
            for (let key in updateTodoInput) {
              todo[key] = updateTodoInput[key];
            }
            return todo;
          }
        }
      }, 
    deleteTodo:(parent,{id},{db},info)=>{
        const indexTodo = db.todos.findIndex((todo)=>todo.id === id );
        if (indexTodo === -1 ) {
            throw new Error ('Todo inexistant') ; 
        }else{
            const [todo] = db.todos.splice(indexTodo,1); 
            return todo  ; 
        }
    }
}
function existInArray(array,attribut,value) {
    return array.some((element)=>element[attribut]==value) ; 
}