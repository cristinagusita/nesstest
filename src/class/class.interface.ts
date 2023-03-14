export interface IClass {
  name: string;
  teacher: string;
  maxNoOfStudents: number;
  students: {
    name: string;
  }[];
}
