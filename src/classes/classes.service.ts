import { IClass } from '../class/class.interface';
import { classes } from './data';

export class ClassesService {
  private classes: IClass[];
  constructor() {
    this.classes = classes;
  }

  getData() {
    return this.classes;
  }

  delete(name: string) {
    this.classes = this.classes.filter((item) => {
      return item.name != name;
    });
  }

  addStudent(className: string, student: string) {
    this.classes.forEach((item) => {
      if (item.name == className) {
        if (item.students.length < item.maxNoOfStudents) {
          item.students.push({
            name: student,
          });
        }
      }
    });
    this.classes = structuredClone(this.classes);
  }
}
