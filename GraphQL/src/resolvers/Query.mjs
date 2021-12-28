import { db } from "../db/db.mjs";

export const Query = {
 hello: (_,{ name }) => `Hello ${name || "World"}`,
 getTodos : () => {return db.todos ; } , 
 getTodoById: (parent, { id }, context, info) => {
    const todo = db.todos.find((todo) => todo.id === id);
    console.log(todo) ;
    if (!todo) {
      throw new Error(`Le todo d'id ${id} n'existe pas`);
    }
    return todo;
  }
}