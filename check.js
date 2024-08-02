const checkArray = ['shruti', 'rana', 'lil', 'suu'];

const edited = checkArray.reduce((accumulator, element) => {
    return accumulator.concat(element + 'Edited');
}, [])

console.log(edited);