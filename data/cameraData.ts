
import type { Options } from '../types';

export const CAMERAS: Options = {
  alexa35: { name: 'ARRI Alexa 35', description: 'an ARRI Alexa 35 large-format cinema camera, featuring smooth highlight roll-off and organic filmic color science' },
  arriflex16: { name: 'ARRI Arriflex 16SR', description: 'an ARRI/Arriflex 16SR camera, delivering a classic film grain and a vintage vibe' },
  redVraptor: { name: 'RED V-Raptor', description: 'a RED V-Raptor camera, known for its high-detail digital look and crisp resolution' },
  sonyVenice: { name: 'Sony Venice', description: 'a Sony Venice camera, providing rich cinematic color science and excellent low-light performance' },
  imax: { name: 'IMAX Film Camera', description: 'an IMAX film camera, creating an ultra-wide, immersive, and epic-scale image' },
  panavisionDXL2: { name: 'Panavision DXL2', description: 'a Panavision Millennium DXL2, for a high-end blockbuster digital style' },
};

export const LENSES: Options = {
  arriSignature: { name: 'ARRI Signature Prime', description: 'an ARRI Signature Prime lens, delivering a neutral, clean, and modern prime feel' },
  panavisionC: { name: 'Panavision C-Series', description: 'a Panavision C-Series anamorphic lens, creating a blockbuster vibe with iconic horizontal flares and oval bokeh' },
  canonK35: { name: 'Canon K-35', description: 'a Canon K-35 lens, producing a classic softer, vintage look with beautiful character' },
  cookeS4: { name: 'Cooke S4', description: 'a Cooke S4 lens, delivering the famous warm, organic "Cooke Look" with gentle contrast' },
  petzval: { name: 'Petzval / Helios', description: 'a Petzval or Helios lens, known for its artistic and dreamy swirly bokeh' },
  laowaMacro: { name: 'Laowa Macro', description: 'a Laowa Macro lens, for extreme close-focus detail and unique perspectives' },
  zeissUltra: { name: 'Zeiss Ultra Prime', description: 'a Zeiss Ultra Prime lens, providing a sharp, clean, and technically precise image' },
};

export const FOCAL_LENGTHS: Options = {
  '8mm': { name: '8mm', description: '8mm, creating an ultra-wide, dramatic, and distorted perspective' },
  '14mm': { name: '14mm', description: '14mm, for a wide, cinematic environment shot with a sense of scale' },
  '24mm': { name: '24mm', description: '24mm, a standard wide-angle for versatile storytelling' },
  '50mm': { name: '50mm', description: '50mm, for a neutral, natural human-like perspective' },
  '65mm': { name: '65mm', description: '65mm, creating natural compression and intimate framing' },
  '85mm': { name: '85mm', description: '85mm, for beautiful portrait compression and subject separation' },
  '100mm': { name: '100mm', description: '100mm, for strong telephoto compression that makes space feel dense and sculptural' },
};

export const APERTURES: Options = {
  f1_4: { name: 'f/1.4', description: 'aperture f/1.4, resulting in an extremely shallow depth of field and maximum subject isolation' },
  f2_0: { name: 'f/2.0', description: 'aperture f/2.0, creating a very shallow depth of field with strong subject isolation' },
  f2_8: { name: 'f/2.8', description: 'aperture f/2.8, for a classic cinematic shallow depth of field that separates the subject beautifully' },
  f4_0: { name: 'f/4.0', description: 'aperture f/4.0, providing a moderately deep focus that keeps more of the environment sharp' },
};
