var Student = /** @class */ (function () {
    //name: string;
    function Student(name) {
        this.name = name;
        this.name = name;
    }
    Student.prototype.setName = function (n) {
        this.name = n;
    };
    return Student;
}());
var st = new Student("Thida");
//st.name = "Dara";
st.setName("Dara");
console.log(st);
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.getArea = function () {
        return 2;
    };
    return Rectangle;
}());
