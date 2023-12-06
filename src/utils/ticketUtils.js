export const formattedPrice = price =>
    `${price.toLocaleString('ru-RU')} Р`.replace(/,/g, ' ');

export const formattedTransfers = (origin, destination) =>
    `${origin} - ${destination}`;

export const formattedTotalTime = duration => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    return `${hours}ч ${minutes}м`;
};

export const formattedFlightTime = (date, duration) => {
    const departure = new Date(date);

    const arrival = new Date(departure.getTime() + duration * 60000);

    function formattedTime(dateTime) {
        const hours = dateTime.getUTCHours().toString().padStart(2, '0');
        const minutes = dateTime.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return `${formattedTime(departure)} – ${formattedTime(arrival)}`;
};

const getTransferFormIndex = count => {
    const lastDigit = count % 10;
    const isExclusion = count % 100 >= 11 && count % 100 <= 14;

    if (lastDigit === 1 && !isExclusion) {
        return 1; // 'пересадка'
    }
    if (lastDigit >= 2 && lastDigit <= 4 && !isExclusion) {
        return 2; // 'пересадки'
    }
    return 0; // 'пересадок'
};

export const formattedStopsCount = transfers => {
    const transferForms = ['пересадок', 'пересадка', 'пересадки'];
    const count = transfers.length;

    const formIndex = getTransferFormIndex(count);

    return count === 0 ? 'Прямой рейс' : `${count} ${transferForms[formIndex]}`;
};
