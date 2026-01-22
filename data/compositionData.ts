
import type { Options } from '../types';

export const SHOT_SIZES: Options = {
  ecu: { name: 'Extreme Close-Up', description: 'Extreme close-up shot' },
  cu: { name: 'Close-Up', description: 'Close-up shot' },
  medium: { name: 'Medium Shot', description: 'Medium shot' },
  wide: { name: 'Wide Shot', description: 'Wide shot' },
  vws: { name: 'Very Wide Shot', description: 'Very wide shot' },
};

export const ANGLES: Options = {
  low: { name: 'Low Angle', description: 'Low-angle' },
  eyeLevel: { name: 'Eye-Level', description: 'Eye-level' },
  high: { name: 'High Angle', description: 'High-angle' },
  topDown: { name: 'Top-Down / God View', description: 'Top-down' },
  wormsEye: { name: "Worm's-Eye View", description: "Worm's-eye view" },
};

export const VIEWPOINTS: Options = {
  front: { name: 'Front View', description: 'front view' },
  threeQuarter: { name: 'Three-Quarter View', description: 'three-quarter view' },
  profile: { name: 'Side Profile', description: 'side profile' },
  back: { name: 'Back View', description: 'from the back' },
  ots: { name: 'Over-the-Shoulder', description: 'over-the-shoulder view' },
};

export const MOVEMENTS: Options = {
  static: { name: 'Static', description: 'Static cinematic camera.' },
  handheld: { name: 'Handheld', description: 'Handheld cinematic camera, adding a sense of realism and immediacy.' },
  dolly: { name: 'Dolly In/Out', description: 'Dolly shot, moving smoothly towards or away from the subject.' },
  crane: { name: 'Crane Shot', description: 'Crane shot, moving vertically to reveal scale.' },
  orbit: { name: 'Orbit', description: 'Orbiting camera, circling the subject to show all angles.' },
  dutch: { name: 'Dutch Angle', description: 'Dutch angle, tilting the camera for a sense of unease or dynamism.' },
};

export const COMPOSITIONS: Options = {
  ruleOfThirds: { name: 'Rule of Thirds', description: 'Rule of thirds composition.' },
  center: { name: 'Center Framed / Symmetry', description: 'Center-framed symmetrical composition.' },
  leadingLines: { name: 'Leading Lines', description: 'Leading lines guiding the eye toward the subject.' },
  frameInFrame: { name: 'Frame Within a Frame', description: 'Frame within a frame composition.' },
  golden: { name: 'Golden Section', description: 'Golden section composition with natural visual flow.' },
  diagonal: { name: 'Diagonal Composition', description: 'Strong diagonal composition creating dynamic tension.' },
};

export const PERSPECTIVES: Options = {
  onePoint: { name: 'One-Point Perspective', description: 'one-point perspective with a clear vanishing point' },
  twoPoint: { name: 'Two-Point Perspective', description: 'two-point perspective adding spatial depth' },
  threePoint: { name: 'Three-Point Perspective', description: 'three-point perspective emphasizing scale and height' },
};

export const LAYERS: Options = {
  layered: { name: 'Layered Depth', description: 'Clear foreground, midground, and background separation.' },
  foregroundFrame: { name: 'Foreground Framing', description: 'Foreground elements partially framing the subject.' },
  negativeSpace: { name: 'Negative Space', description: 'Dominant negative space emphasizing isolation and scale.' },
};
