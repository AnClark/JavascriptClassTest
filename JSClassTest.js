/**
 * 用 JavaScript 进行面向对象程序设计
 * 根据阮一峰的教程，使用极简主义法封装类（class），实现 JavaScript 的面向对象编程。
 * Created by AnCla on 2016/7/24 0024.
 */

var Student = {     //对象封装之外壳
    createNew : function(Name, UID, College, Class){       //构造函数及其参数。我们可以直接借助构造函数的参数来给成员变量赋值。
        var student = {};       //定义一个实例对象，接下来要将其作为返回值

        /**     在实例对象上建立成员变量和成员方法      **/
        //成员变量
        student.name = Name;
        student.uid = UID;
        student.college = College;
        student.class = Class;

        //成员方法
        student.printStudentInfo = function(){
            var temp = "";
            temp += "姓名：" + student.name + "<br>";
            temp += "学号：" + student.uid + "<br>";
            temp += "院系：" + student.college + "<br>";
            temp += "班级：" + student.class + "<br>";

            return temp;
        };

        return student;         //返回实例对象
    }
};