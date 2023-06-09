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
      <tr v-for="person in storeEmployee.persons" :key="person.id">
        <td>{{ person.name }}</td>
        <td>{{ person.surname }}</td>
        <td>{{ person.experience }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.address }}</td>
        <RouterLink :to="`/formEmployee/${person.id}`" class="button"
          >Edit</RouterLink
        >
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useEmployeeStore } from '@/stores/storeEmployee';

const storeEmployee = useEmployeeStore();
</script>

<style lang="scss" scoped></style>
