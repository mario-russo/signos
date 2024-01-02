import { ref } from "vue";

export default function useDateInfo(initialDate = new Date()) {
  const date = ref(initialDate);

  function setNewDate(newDate) {
    date.value = newDate;
  }

  function getWeekNumber() {
    const startOfTheYear = new Date(date.value.getFullYear(), 0, 1);
    const days = Math.floor(
      (date.value - startOfTheYear) / (24 * 60 * 60 * 1000)
    );
    const weekNumber = Math.ceil((days + startOfTheYear.getDay() + 1) / 7);
    return weekNumber;
  }

  function getMonthNumber() {
    return date.value.getMonth() + 1;
  }

  function getYear() {
    return date.value.getFullYear();
  }

  return {
    date,
    setNewDate,
    getWeekNumber,
    getMonthNumber,
    getYear,
  };
}
