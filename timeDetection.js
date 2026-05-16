/**
 * Time Detection System for Joe's Dialogue
 * Determines which school period the user is currently in based on time
 */

// School schedule times (24-hour format in minutes from midnight)
const SCHEDULE = {
    advisory: { start: 8 * 60 + 55, end: 9 * 60 + 15, name: 'advisory' },
    period_1: { start: 9 * 60 + 19, end: 9 * 60 + 59, name: 'period_1' },
    period_2: { start: 10 * 60 + 3, end: 10 * 60 + 43, name: 'period_2' },
    period_3: { start: 10 * 60 + 47, end: 11 * 60 + 27, name: 'period_3' },
    period_4: { start: 11 * 60 + 31, end: 12 * 60 + 11, name: 'period_4' },
    period_5: { start: 12 * 60 + 15, end: 12 * 60 + 55, name: 'period_5' },
    period_6: { start: 12 * 60 + 59, end: 13 * 60 + 29, name: 'period_6' }, // Lunch for 7th graders
    period_7: { start: 13 * 60 + 33, end: 14 * 60 + 13, name: 'period_7' },
    period_8: { start: 14 * 60 + 17, end: 14 * 60 + 57, name: 'period_8' },
    period_9: { start: 15 * 60, end: 15 * 60 + 40, name: 'period_9' }
};

// Passing periods are between classes (after advisory and before end of 9th period)
const PASSING_PERIODS = [
    { start: 9 * 60 + 15, end: 9 * 60 + 19 },  // After advisory
    { start: 9 * 60 + 59, end: 10 * 60 + 3 },  // After 1st
    { start: 10 * 60 + 43, end: 10 * 60 + 47 }, // After 2nd
    { start: 11 * 60 + 27, end: 11 * 60 + 31 }, // After 3rd
    { start: 12 * 60 + 11, end: 12 * 60 + 15 }, // After 4th
    { start: 12 * 60 + 55, end: 12 * 60 + 59 }, // After 5th
    { start: 13 * 60 + 29, end: 13 * 60 + 33 }, // After 6th (lunch)
    { start: 14 * 60 + 13, end: 14 * 60 + 17 }, // After 7th
    { start: 14 * 60 + 57, end: 15 * 60 }       // After 8th
];

/**
 * Get current time in minutes from midnight
 */
function getCurrentTimeInMinutes() {
    const now = new Date();
    const cstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
    return cstTime.getHours() * 60 + cstTime.getMinutes();
}

/**
 * Check if current time falls in a passing period
 */
function isPassingPeriod() {
    const currentTime = getCurrentTimeInMinutes();
    return PASSING_PERIODS.some(period => 
        currentTime >= period.start && currentTime < period.end
    );
}

/**
 * Get the current school period or activity
 * Returns: 'advisory', 'period_1', ..., 'period_9', 'passing_period', or 'at_home'
 */
function getCurrentPeriod() {
    const now = new Date();
    const cstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
    const dayOfWeek = cstTime.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
    
    // Check if it's weekend (Saturday or Sunday)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return 'weekend';
    }
    
    const currentTime = getCurrentTimeInMinutes();
    
    // Check if in a class period
    for (const [key, period] of Object.entries(SCHEDULE)) {
        if (currentTime >= period.start && currentTime < period.end) {
            return period.name;
        }
    }
    
    // Check if in a passing period
    if (isPassingPeriod()) {
        return 'passing_period';
    }
    
    // Before 8:55 AM = before school, After 3:40 PM = after school
    if (currentTime < 8 * 60 + 55) return 'before_school';
    return 'after_school';
}

/**
 * Get a random time-based greeting based on current period
 * Returns an array of dialogue line objects, or null if not available
 */
function getTimeBasedGreeting(dialogueData) {
    const period = getCurrentPeriod();
    const greetings = dialogueData.timeBasedGreeting;
    
    if (!greetings || !greetings[period]) {
        return null;
    }
    
    const periodGreetings = greetings[period];
    const randomIndex = Math.floor(Math.random() * periodGreetings.length);
    return periodGreetings[randomIndex];
}

/**
 * Get current period info for debugging/logging
 */
function getPeriodInfo() {
    const period = getCurrentPeriod();
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    return {
        period: period,
        time: time,
        timestamp: now.toISOString()
    };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCurrentPeriod,
        getTimeBasedGreeting,
        getPeriodInfo,
        getCurrentTimeInMinutes,
        isPassingPeriod
    };
}
