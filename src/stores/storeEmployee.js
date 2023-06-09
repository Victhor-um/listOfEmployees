import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
function generateId() {
  return uuidv4();
}
const initialPersons = [
  {
    id: generateId(),
    name: 'Ivan',
    surname: 'Ivanov',
    experience: 5,
    age: 40,
    address: 'Russia, Moscow, Pushkin street',
  },
  {
    id: generateId(),
    name: 'Olga',
    surname: 'Petrova',
    experience: 8,
    age: 35,
    address: 'Russia, St. Petersburg, Nevsky Prospekt',
  },
  {
    id: generateId(),
    name: 'Alexander',
    surname: 'Sidorov',
    experience: 3,
    age: 28,
    address: 'Russia, Kazan, Baumana street',
  },
];
export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    persons: initialPersons,
  }),
  getters: {
    findEmployeeById: (state) => (id) => {
      return state.persons.find((person) => person.id === id) || null;
    },
    findEmployee: (state) => (employee) => {
      return (
        state.persons.find((person) => {
          return (
            person.name === employee.name &&
            person.surname === employee.surname &&
            person.experience === employee.experience &&
            person.age === employee.age &&
            person.address === employee.address
          );
        }) || null
      );
    },
  },
  actions: {
    updateEmployee(id, newData) {
      // Ищем сотрудника по id и обновляем его данные
      const index = this.persons.findIndex((person) => person.id === id);
      Object.assign(this.persons[index], newData);
    },
    addEmployee(data) {
      // Добавляем нового сотрудника в массив persons
      const newEmployee = {
        id: generateId(),
        ...data,
      };
      this.persons.push(newEmployee);
    },
  },
});
