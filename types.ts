
export interface Option {
  name: string;
  description: string;
}

export interface Options {
  [key: string]: Option;
}

export interface Selections {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shotSize: string;
  angle: string;
  viewpoint: string;
  movement: string;
  composition: string;
  perspective: string;
  layers: string;
  time: string;
  weather: string;
}
