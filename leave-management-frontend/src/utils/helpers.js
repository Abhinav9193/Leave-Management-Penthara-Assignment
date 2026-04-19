// formats date to DD/MM/YYYY format
export const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-GB");
};

// calculates total no of days between start and end
export const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const diff = new Date(end) - new Date(start);
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
};

// Combines CSS class utility
export const cn = (...classes) => classes.filter(Boolean).join(' ');
