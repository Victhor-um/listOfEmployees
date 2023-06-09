import { computed } from 'vue';

export function useFormValidation(formData, validationRules) {
  // Returns a computed property that returns true if all form inputs are valid
  const isFormValid = computed(() => {
    return Object.keys(validationRules).every((field) => {
      const rules = validationRules[field];

      // Check each validation rule and return false if any of them fail
      for (const rule in rules) {
        switch (rule) {
          case 'min':
            if (formData[field] < rules[rule]) {
              return false;
            }
            break;

          case 'max':
            if (formData[field] > rules[rule]) {
              return false;
            }
            break;

          case 'required':
            if (!formData[field]) {
              return false;
            }
            break;

          // Add your own custom validation rules here

          default:
            break;
        }
      }

      // If all validation rules pass, return true
      return true;
    });
  });

  // Returns a function that can be called to check if the form is valid
  const checkFormValidity = () => {
    return isFormValid.value;
  };

  // Returns an object with the computed isFormValid property and the checkFormValidity function
  return { isFormValid, checkFormValidity };
}
