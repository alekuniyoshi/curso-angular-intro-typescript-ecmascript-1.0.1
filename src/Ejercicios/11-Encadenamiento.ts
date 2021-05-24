interface passenger {
    name: String;
    childrens?: String[];
}

const passenger1: passenger = {
    name: 'Alejandro'
}

const passenger2: passenger = {
    name: 'Carolina',
    childrens: ['Rocio', 'Tomas']
}


function printChildren(passenger: passenger): void {
    const howManyChildren = passenger.childrens?.length || 0;
    console.log(howManyChildren);
}

printChildren(passenger1)