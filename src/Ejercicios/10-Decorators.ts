function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class mySuperClass {
    public miProperty: String = "My String property";
    print() {
        console.log("Hi i am the superClass");
    }


}

console.log(mySuperClass);

const myClass = new mySuperClass();
console.log(myClass.miProperty);
console.log(myClass.print);