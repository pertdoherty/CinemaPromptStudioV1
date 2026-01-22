
import type { Selections } from '../types';
import { CAMERAS, LENSES, FOCAL_LENGTHS, APERTURES } from '../data/cameraData';
import { SHOT_SIZES, ANGLES, VIEWPOINTS, MOVEMENTS, COMPOSITIONS, PERSPECTIVES, LAYERS } from '../data/compositionData';
import { TIMES_OF_DAY, WEATHER_CONDITIONS } from '../data/environmentData';

export const compilePrompt = (selections: Selections): string => {
  const camera = CAMERAS[selections.camera];
  const lens = LENSES[selections.lens];
  const focalLength = FOCAL_LENGTHS[selections.focalLength];
  const aperture = APERTURES[selections.aperture];

  const shotSize = SHOT_SIZES[selections.shotSize];
  const angle = ANGLES[selections.angle];
  const viewpoint = VIEWPOINTS[selections.viewpoint];
  const movement = MOVEMENTS[selections.movement];

  const composition = COMPOSITIONS[selections.composition];
  const perspective = PERSPECTIVES[selections.perspective];
  const layers = LAYERS[selections.layers];

  const time = TIMES_OF_DAY[selections.time];
  const weather = WEATHER_CONDITIONS[selections.weather];

  const promptParts = [
    "Cinematic image prompt.",
    "",
    `Shot using ${camera.description}.`,
    `Paired with ${lens.description}.`,
    `Captured at ${focalLength.description} and ${aperture.description}.`,
    "",
    movement.description,
    `${angle.description} ${shotSize.description} ${viewpoint.description}.`,
    composition.description,
    "",
    `Time of day: ${time.description}.`,
    `Weather conditions: ${weather.description}.`,
    "",
    layers.description,
    `Camera uses ${perspective.description}.`,
    "Intentional cinematic framing and physically plausible optical behavior."
  ];

  return promptParts.join('\n');
};
