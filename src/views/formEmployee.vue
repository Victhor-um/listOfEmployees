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
        <button class="button is-primary" @click.prevent="handleSubmit">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script></script>
<style></style>
