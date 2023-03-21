export const handleSubmit = (values: any, actions: any) => {
  console.log(values);
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};
