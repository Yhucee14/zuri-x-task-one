function updateDateTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    const now = new Date();
    const utcTimeMilliseconds = now.getTime(); 
    const dayOfWeek = now.toLocaleDateString(undefined, { weekday: 'long' });

    // const formattedUtcTime = new Date(utcTimeMilliseconds);

    // const hours = formattedUtcTime.getUTCHours().toString().padStart(2, '0');
    // const minutes = formattedUtcTime.getUTCMinutes().toString().padStart(2, '0');
    // const seconds = formattedUtcTime.getUTCSeconds().toString().padStart(2, '0');


    utcTimeElement.textContent = `UTC Time: ${utcTimeMilliseconds}`;
    dayOfWeekElement.textContent = `Day of the Week: ${dayOfWeek}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
