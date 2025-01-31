interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
  }
  
  interface Directors extends Teacher {
	numberOfReports: number;
  }
  
  const teacher3: Teacher = {
	  firstName: "John",
	  lastName: "Doe",
	  fullTimeEmployee: false,
	  location: "London",
	  contract: false,
	  workFromHome: function (): string {
		  throw new Error("Function not implemented.");
	  },
	  getCoffeeBreak: function (): string {
		  throw new Error("Function not implemented.");
	  },
	  workTeacherTasks: function (): string {
		  throw new Error("Function not implemented.");
	  }
  };
  
  console.log(teacher3);
  
  // Function printTeacher
  interface printTeacherFunction {
	(firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  console.log(printTeacher("John", "Doe"));
  
  // StudentClass definition
  interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
  }
  
  interface StudentConstructor {
	new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  class StudentClass implements StudentClassInterface {
	constructor(private firstName: string, private lastName: string) {}
  
	workOnHomework(): string {
	  return "Currently working";
	}
  
	displayName(): string {
	  return this.firstName;
	}
  }
  
  const student1 = new StudentClass("Alice", "Johnson");
  console.log(student1.displayName());
  console.log(student1.workOnHomework());
  
  // DirectorInterface and TeacherInterface
  interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
  }
  
  // Director Class
  class Director implements DirectorInterface {
	workFromHome(): string {
	  return "Working from home";
	}
	getCoffeeBreak(): string {
	  return "Getting a coffee break";
	}
	workDirectorTasks(): string {
	  return "Getting to director tasks";
	}
  }
  
  // Teacher Class
  class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return "Cannot work from home";
	}
	getCoffeeBreak(): string {
	  return "Cannot have a break";
	}
	workTeacherTasks(): string {
	  return "Getting to work";
	}
  }
  
  // createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
	  return new Teacher();
	}
	return new Director();
  }
  
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee("$500"));
  
  // isDirector function
  function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // executeWork function
  function executeWork(employee: Director | Teacher): void {
	if (isDirector(employee)) {
	  console.log(employee.workDirectorTasks());
	} else {
	  console.log(employee.workTeacherTasks());
	}
  }
  
  executeWork(createEmployee(200));
  executeWork(createEmployee(1000));
  
  // String literal type for Subjects
  type Subjects = "Math" | "History";
  
  // teachClass function
  function teachClass(todayClass: Subjects): string {
	return `Teaching ${todayClass}`;
  }
  
  console.log(teachClass("Math"));
  console.log(teachClass("History"));
  