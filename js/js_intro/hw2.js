const x = "adfv";

switch (typeof(x)) {
    case 'number':
        console.log('x its a number');
        break;
    case 'string':
        console.log('x its a string');
        break;
    case 'boolean':
        console.log('x its boolean');
        break;
    case isNaN:
        console.log('x somthing else');
        break;
    default:
}