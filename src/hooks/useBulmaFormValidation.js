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

export function useBulmaFormValidation(formData, validationRules) {
  // Returns an object with error messages for each input field
  const errors = computed(() => {
    const result = {};

    for (const field in validationRules) {
      const rules = validationRules[field];

      result[field] = '';

      for (const rule in rules) {
        switch (rule) {
          case 'min':
            if (formData[field] < rules[rule]) {
              result[
                field
              ] = `The ${field} field must be at least ${rules[rule]}.`;
            }
            break;

          case 'max':
            if (formData[field] > rules[rule]) {
              result[
                field
              ] = `The ${field} field must be at most ${rules[rule]}.`;
            }
            break;

          case 'required':
            if (!formData[field]) {
              result[field] = `The ${field} field is required.`;
            }
            break;

          // Add your own custom error messages here

          default:
            break;
        }
      }
    }

    return result;
  });

  // Returns a function that can be called to validate a specific input field and apply the appropriate Bulma styles
  const validateInput = (field) => {
    const rules = validationRules[field];

    for (const rule in rules) {
      switch (rule) {
        case 'min':
          if (formData[field] < rules[rule]) {
            document.getElementById(field).classList.add('is-danger');
          } else {
            document.getElementById(field).classList.remove('is-danger');
          }
          break;

        case 'max':
          if (formData[field] > rules[rule]) {
            document.getElementById(field).classList.add('is-danger');
          } else {
            document.getElementById(field).classList.remove('is-danger');
          }
          break;

        case 'required':
          if (!formData[field]) {
            document.getElementById(field).classList.add('is-danger');
          } else {
            document.getElementById(field).classList.remove('is-danger');
          }
          break;

        // Add your own custom validation functions here

        default:
          break;
      }
    }
  };

  // Returns an object with the computed errors property and the validateInput function
  return { errors, validateInput };
}
