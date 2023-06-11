<script>
export default {
  methods: {
    validate(model, requiredFields) {
      let isValid = true;

      Object.keys(model)?.forEach((key) => {
        if (requiredFields?.find((field) => field === key) && !model[key]?.length) {
          model[key] = "";
          isValid = false;
        }
      });

      return isValid;
    }
  }
};
</script>
