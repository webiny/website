import facepaint from 'facepaint';
const breakpoints = [1024, 1440, 4000];

const mq = facepaint (breakpoints.map (bp => `@media (min-width: ${bp}px)`));

export default mq;
