<template>
  <form>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          v-model="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Surname</label>
      <div class="control">
        <input
          class="input"
          v-model="surname"
          type="text"
          placeholder="Enter your surname"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Age</label>
      <div class="control">
        <input
          class="input"
          v-model.number="age"
          type="number"
          min="1"
          max="120"
          placeholder="Enter your age"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Experience</label>
      <div class="control">
        <input
          class="input"
          v-model.number="experience"
          type="number"
          min="0"
          :max="age"
          placeholder="Enter your experience"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <textarea
          class="textarea"
          v-model="address"
          placeholder="Enter your address"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button
          class="button is-primary"
          @click.prevent="handleSubmit"
          :disabled="submitDisabled"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useEmployeeStore } from '@/stores/storeEmployee';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeId = route.params.id;
const storeEmployee = useEmployeeStore();
if (routeId === 'id') {
  const name = ref('');
  const surname = ref('');
  const age = ref();
  const experience = ref();
  const address = ref('');
} else {
}
onMounted(() => {
  const person = storeEmployee.findEmployeeById(route.params.id);
  if (person) {
    name.value = person.name;
    surname.value = person.surname;
    age.value = person.age;
    experience.value = person.experience;
    address.value = person.address;
  }
});
const name = ref('');
const surname = ref('');
const age = ref();
const experience = ref();
const address = ref('');
const submitDisabled = computed(() => {
  return !name.value || !age.value || !experience.value || !address.value;
});

function handleSubmit() {
  if (
    !name.value ||
    !surname.value ||
    !age.value ||
    !experience.value ||
    !address.value
  ) {
    return;
  }

  const newEmployee = {
    name: name.value,
    surname: surname.value,
    age: age.value,
    experience: experience.value,
    address: address.value,
  };

  const existingEmployee = storeEmployee.findEmployee(newEmployee);

  if (existingEmployee) {
    storeEmployee.updateEmployee(existingEmployee.id, newEmployee);
  } else {
    storeEmployee.addEmployee(newEmployee);
  }

  name.value = '';
  surname.value = '';
  age.value = null;
  experience.value = null;
  address.value = '';
}
</script>
<style></style>
