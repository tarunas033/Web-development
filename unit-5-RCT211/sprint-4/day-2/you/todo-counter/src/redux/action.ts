
export funcion addTodo(text: string){
    return {type:"ADD_TODO , text"}

}

export function toggleTodo(id:number){
    return {type:"TOGGLE_TODO"}
}