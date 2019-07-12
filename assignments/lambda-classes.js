// CODE here for your Lambda Classes

// -------person---------
class Person{
    constructor(attrs){
        this.name=attrs.name;
        this.age=attrs.age;
        this.location=attrs.location;
    }
    speak(){
        return `Hello my name is ${this.name} , I am from ${this.location}.`;
    }
}

// ----------Instructor------------

class Instructor extends Person{
    constructor(InstructorAttrs){
        super(InstructorAttrs);
        this.specialty=InstructorAttrs.specialty;
        this.favLanguage=InstructorAttrs.favLanguage;
        this.catchPhrase=InstructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    };
    grade(student,subject){
        return `${student} recieves a perfect score on ${subject}. ` 
    }
}

// -----------student------------
class Student extends Person{
    constructor(StudentsAttrs){
        super(StudentsAttrs);
        this.previousBackground=StudentsAttrs.previousBackground;
        this.className=StudentsAttrs.className;
        this.favSubjects=StudentsAttrs.favSubjects;
    }
    listSubjects(){
        return `${this.favSubjects}`
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject} `
    }
}

// ----------Project Manager -------------

class ProjectManager extends Person{
    constructor(PmAttrs){
        super(PmAttrs);
        this.GradeClassName=PmAttrs.GradeClassName;
        this.FavInstructor=PmAttrs.FavInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel} , channel study times !`
    }
    dubugCode(name,subject){
        return `${name} debugs ${this.name}'s code on ${subject}`
    }
}

// ----------objects---------

const Andrew= new Person ({
    name:'Andrew',
    age:35,
    location:'Georgia'
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const Ramy = new Student({
    name:'Ramy',
    age:30,
    location:'San Francisco',
    previousBackground:'Pass',
    className:'webp8',
    favSubjects:['CSS', 'JavaScript' , 'HTML']
});

const Billy = new ProjectManager({
    name:'Billy',
    age :30,
    location: 'Florida',
    GradeClassName :'webp8',
    FavInstructor:'kerien'
});


console.log(Andrew.name);
console.log(Ramy.speak());
console.log(fred.specialty);
console.log(fred.catchPhrase);
console.log(Ramy.className);
console.log(Ramy.previousBackground)
console.log(Billy.speak());
console.log(fred.demo('JavaScriptIV'));
console.log(fred.grade('Ramy', 'CSS'));
console.log(Ramy.listSubjects());
console.log(Ramy.PRAssignment('Javascript'));
console.log(Billy.standUp('webp8'));
console.log(Billy.dubugCode('error', 'javascript'));
console.log(Billy.GradeClassName);
console.log(Billy.FavInstructor);