const customMediaQuery = minWidth => `@media (min-width: ${minWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1260),
  tv: customMediaQuery(1468),
};

export default media;
