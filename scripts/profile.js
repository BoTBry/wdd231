const current_year = document.querySelector(".current_year");
const current_datetime = document.querySelector(".current_datetime");
const nav_btn = document.querySelector(".nav_btn");
const ham_btn = document.querySelector(".ham_btn");
const ham_btn2 = document.querySelector(".ham_btn2");
const ham_btn3 = document.querySelector(".ham_btn3");
const show_nav = document.querySelector("nav");
const get_date = new Date()
const lastModified = document.lastModified;

document.querySelector(".lastModification").textContent = `${lastModified}` 
current_year.textContent = `${get_date.getFullYear()}`;

nav_btn.addEventListener("click", ()=> {
    ham_btn.classList.toggle("show");
    ham_btn2.classList.toggle("show2");
    ham_btn3.classList.toggle("show3");
    show_nav.classList.toggle("show_nav");
})

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

////////////////// courses Secton ////////////////////////////////

//courses.forEach(e => console.log(e)); //Displays the 'courses' array.

// Calls the "courses" class from the html file.
const courses_section = document.querySelector(".courses");

// Gets the courses button.
const all_courses_btn = document.querySelector(".all");

const cse_courses_btn = document.querySelector(".cse");

const wdd_courses_btn = document.querySelector(".wdd");

// Creates Click eventlisteners for the buttons.
all_courses_btn.addEventListener("click", ()=> {
    courses_section.innerHTML = ``;
    all_courses(courses);
});

cse_courses_btn.addEventListener("click", ()=> {
    courses_section.innerHTML = ``;
    cse_courses(courses);
});

wdd_courses_btn.addEventListener("click", ()=> {
    courses_section.innerHTML = ``;
    wdd_courses(courses);
});

// Creates a function that creates and appends the "subject" and "number" (WDD 231) from the array.
const create_course_span = (element) => {

    let courseSpan = document.createElement("span");
    courseSpan.textContent = `${element.subject} ${element.number}`;
    courses_section.appendChild(courseSpan);

    if (element.completed) {
      courseSpan.classList.add("completed");
    }

}


const all_courses = (course) => {
    course.forEach(element => create_course_span(element));
    
    const creditNum = document.querySelector(".creditNum");
    const totalCredits = course.reduce((acc, current) => {
        return acc + current.credits;
    }, 0);

    creditNum.textContent = totalCredits;
}
const cse_courses = (course) => {
    const filteredcourse = course.filter((p) => p.subject === "CSE");
    filteredcourse.forEach(element => {
        create_course_span(element)
        console.log(element);
    })
    
     const creditNum = document.querySelector(".creditNum");
     
     const totalCredits = filteredcourse.reduce((acc, current) => {
         return acc + current.credits;
     }, 0);

     creditNum.textContent = totalCredits;
}

 const wdd_courses = (course) => {
    const filteredcourse = course.filter((p) => p.subject === "WDD");
    filteredcourse.forEach(element => {
        create_course_span(element)
        console.log(element);
    })
    
     const creditNum = document.querySelector(".creditNum");
     
     const totalCredits = filteredcourse.reduce((acc, current) => {
         return acc + current.credits;
     }, 0);

     creditNum.textContent = totalCredits;
  
}

// Calls the function by default whenever the pages loads.
all_courses(courses);