<script>
  const date = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentDay = days[date.getDay()];

  console.log(date.getDate());

  const formateDate = (day) => {
    if (day === 1) return `${day}st`;
    if (day === 2) return `${day}nd`;

    return `${day}th`;
  };
</script>

<div>
  <span class="current-day">{currentDay},</span>
  <span class="day-number">{formateDate(date.getDate())}</span>
  <p class="current-month">{months[date.getMonth()]}</p>
</div>

<style>
  div {
    color: #fff;
    text-align: center;
  }
  .current-day {
    font-weight: 700;
    font-size: 2.5rem;
  }
  .day-number {
    font-weight: 300;
    font-size: 2.5rem;
  }
  .current-month {
    font-weight: 300;
    font-size: 1rem;
  }
</style>
