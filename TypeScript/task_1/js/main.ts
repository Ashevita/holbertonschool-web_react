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
  