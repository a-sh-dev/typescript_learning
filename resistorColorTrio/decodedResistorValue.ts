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

const decodedResistorValue = ([band1, band2, band3, ...restBand]): string => {
  if (restBand) {
    console.log('Ignored band(s): ', restBand);
  }

  const bandValue =
    (getBandValue(band1) * 10 + getBandValue(band2)) *
    10 ** getBandValue(band3);

  const [divisor, prefix] = ohms.find(([divisor]) => bandValue >= divisor) ?? [
    1,
    '',
  ];

  return `${bandValue / divisor} ${prefix}ohms`;
};

decodedResistorValue(['orange', 'orange', 'black']); // '33 ohms'
decodedResistorValue(['blue', 'grey', 'brown']); // '680 ohms'
decodedResistorValue(['red', 'black', 'red']); // '2 kiloohms'
decodedResistorValue(['green', 'brown', 'orange']); // '51 kiloohms'
decodedResistorValue(['yellow', 'violet', 'yellow']); // '470 kiloohms'
decodedResistorValue(['blue', 'violet', 'blue']); // '67 megaohms'
decodedResistorValue(['black', 'black', 'black']); // '0 ohms'
decodedResistorValue(['white', 'white', 'white']); // '99 gigaohms'
decodedResistorValue(['black', 'grey', 'black']); // '8 ohms'
decodedResistorValue(['blue', 'green', 'yellow', 'orange']); // '650 kiloohms'
decodedResistorValue(['blue', 'green', 'yellow', 'orange', 'violet', 'brown']); // '650 kiloohms'
