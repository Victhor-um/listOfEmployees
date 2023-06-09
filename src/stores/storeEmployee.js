import { defineStore } from 'pinia';
const initialPersons = [
  {
    id: 0,
    name: 'Ivan',
    surname: 'Ivanov',
    experience: 5,
    age: 40,
    address: 'Russia, Moscow, Pushkin street',
  },
  {
    id: 1,
    name: 'Olga',
    surname: 'Petrova',
    experience: 8,
    age: 35,
    address: 'Russia, St. Petersburg, Nevsky Prospekt',
  },
  {
    id: 2,
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
    getName() {
      return this.name;
    },
    getSurname() {
      return this.surname;
    },
    getExperience() {
      return this.experience;
    },
    getAge() {
      return this.age;
    },
    getAddress() {
      return this.address;
    },
  },
  actions: {
    setName(name) {
      this.name = name;
    },
    setSurname(surname) {
      this.surname = surname;
    },
    setExperience(experience) {
      this.experience = experience;
    },
    setAge(age) {
      this.age = age;
    },
    setAddress(address) {
      this.address = address;
    },
  },
});
