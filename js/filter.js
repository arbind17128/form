let arr= [{id:1, name:'arbind', text: 'is a great man 🤣', iscomepete: true}, {id:2, name:'puja', text: 'is a kuti man 🤣', iscomepete: false}, {id:3, name:'neha', text: 'is a suwarni man 🤣', iscomepete: true}, {id:4, name:'suman', text: 'is bymistake man ', iscomepete: false}];

let a=arr.filter(function(todo) {
    return todo.iscomepete === true;
}).map(function(todo) {
    return todo.text;
});
console.log(a);

