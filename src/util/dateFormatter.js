const formatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
  timeStyle: 'short',
});

export const formatDate = (dateString) =>
  formatter.format(new Date(dateString));
