
import type { Options } from '../types';

export const TIMES_OF_DAY: Options = {
  goldenHour: { name: 'Golden Hour', description: 'golden hour lighting' },
  blueHour: { name: 'Blue Hour', description: 'blue hour lighting' },
  midday: { name: 'Midday', description: 'bright midday sun' },
  dusk: { name: 'Dusk', description: 'dusk lighting with long shadows' },
  night: { name: 'Night', description: 'night scene' },
  dawn: { name: 'Dawn', description: 'early dawn light' },
};

export const WEATHER_CONDITIONS: Options = {
  clear: { name: 'Clear', description: 'clear skies' },
  overcast: { name: 'Overcast', description: 'overcast with soft, diffused light' },
  lightRain: { name: 'Light Rain', description: 'light rain with wet surfaces and reflections' },
  heavyRain: { name: 'Heavy Rain', description: 'heavy rain with dramatic splashes' },
  fog: { name: 'Fog / Mist', description: 'dense fog creating a mysterious atmosphere' },
  snow: { name: 'Snow', description: 'gentle snowfall' },
  windy: { name: 'Windy', description: 'windy conditions with visible motion in the environment' },
};
