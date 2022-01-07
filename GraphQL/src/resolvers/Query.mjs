
export const Query = {
 hello: (_,{ name }) => `Hello ${name || "World"}`,
 getTodos : (parent,args,{db},info) => {return db.todos ; } , 
 getTodoById: (parent, { id }, {db}, info) => {
    const todo = db.todos.find((todo) => todo.id === id);
    console.log(todo) ;
    if (!todo) {
      throw new Error(`Le todo d'id ${id} n'existe pas`);
    }
    return todo;
  },
  getUsers :(parent, args, {db}, info) =>{
    return db.users ; 
  },
  getUserById :(parent, { id }, {db}, info) =>{
    const user = db.users.find((user) => user.id === id);
    console.log(todo) ;
    if (!user) {
      throw new Error(`Le user d'id ${id} n'existe pas`);
    }
    return user;

  }

}