let x=9;
let color= x > 10 ? 'red' : 'black';
console.log(color);


switch(color) {
    case  'red':
    console.log('this is red color');
    break;
    case 'black' :
    console.log('This is black color');
    break;
    default:
        console.log('This is not any color');
}