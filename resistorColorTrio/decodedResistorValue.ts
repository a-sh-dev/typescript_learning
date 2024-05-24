const colourArray = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;
type ColourType = (typeof colourArray)[number];

const ohms = [
  [1_000_000_000, 'giga'],
  [1_000_000, 'mega'],
  [1_000, 'kilo'],
] as const;

const getBandValue = (band: ColourType): number => colourArray.indexOf(band);

const decodedResistorValue = ([band1, band2, band3]): string => {
  const bandValue =
    (getBandValue(band1) * 10 + getBandValue(band2)) *
    10 ** getBandValue(band3);

  const [divisor, prefix] = ohms.find(([divisor]) => bandValue >= divisor) ?? [
    1,
    '',
  ];

  return `${bandValue / divisor} ${prefix}ohms`;
};
