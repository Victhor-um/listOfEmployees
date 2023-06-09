<template>
  <table class="table">
    <thead>
      <tr>
        <th><abbr title="Name">Name</abbr></th>
        <th><abbr title="surName">Sur Name</abbr></th>
        <th><abbr title="Experience">Experience</abbr></th>
        <th><abbr title="Age">Age</abbr></th>
        <th>
          <abbr title="Address">Address</abbr>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th><abbr title="Name">Name</abbr></th>
        <th><abbr title="surName">Sur Name</abbr></th>
        <th><abbr title="Experience">Experience</abbr></th>
        <th><abbr title="Age">Age</abbr></th>
        <th>
          <abbr title="Address">Address</abbr>
        </th>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="employee in storeEmployee.persons" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.surname }}</td>
        <td>{{ employee.experience }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.address }}</td>
        <button class="button">Edit</button>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useEmployeeStore } from '@/stores/storeEmployee';

const storeEmployee = useEmployeeStore();
console.log(storeEmployee.persons);
</script>

<style lang="scss" scoped></style>
