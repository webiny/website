import facepaint from "facepaint";
export const breakpoints = [836, 1440, 4000];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

export default mq;
