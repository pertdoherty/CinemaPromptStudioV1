
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SelectorGroup } from './components/SelectorGroup';
import { PromptOutput } from './components/PromptOutput';
import { CAMERAS, LENSES, FOCAL_LENGTHS, APERTURES } from './data/cameraData';
import { SHOT_SIZES, ANGLES, VIEWPOINTS, MOVEMENTS, COMPOSITIONS, PERSPECTIVES, LAYERS } from './data/compositionData';
import { TIMES_OF_DAY, WEATHER_CONDITIONS } from './data/environmentData';
import { compilePrompt } from './services/promptService';
import type { Selections } from './types';

const App: React.FC = () => {
  const [selections, setSelections] = useState<Selections>({
    camera: 'alexa35',
    lens: 'cookeS4',
    focalLength: '65mm',
    aperture: 'f2_0',
    shotSize: 'medium',
    angle: 'eyeLevel',
    viewpoint: 'front',
    movement: 'static',
    composition: 'ruleOfThirds',
    perspective: 'onePoint',
    layers: 'layered',
    time: 'goldenHour',
    weather: 'clear',
  });

  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  const handleSelectionChange = useCallback((category: keyof Selections, value: string) => {
    setSelections(prev => ({ ...prev, [category]: value }));
  }, []);

  const handleGeneratePrompt = useCallback(() => {
    const prompt = compilePrompt(selections);
    setGeneratedPrompt(prompt);
  }, [selections]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />

        <main className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Camera Setup */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-semibold text-blue-400 border-b border-gray-700 pb-2">Camera Setup</h2>
            <SelectorGroup label="Camera Body" options={CAMERAS} value={selections.camera} onChange={(e) => handleSelectionChange('camera', e.target.value)} />
            <SelectorGroup label="Lens" options={LENSES} value={selections.lens} onChange={(e) => handleSelectionChange('lens', e.target.value)} />
            <SelectorGroup label="Focal Length" options={FOCAL_LENGTHS} value={selections.focalLength} onChange={(e) => handleSelectionChange('focalLength', e.target.value)} />
            <SelectorGroup label="Aperture" options={APERTURES} value={selections.aperture} onChange={(e) => handleSelectionChange('aperture', e.target.value)} />
          </div>

          {/* Column 2: Shots & Angles */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-semibold text-green-400 border-b border-gray-700 pb-2">Shots & Angles</h2>
            <SelectorGroup label="Shot Size" options={SHOT_SIZES} value={selections.shotSize} onChange={(e) => handleSelectionChange('shotSize', e.target.value)} />
            <SelectorGroup label="Angle / Elevation" options={ANGLES} value={selections.angle} onChange={(e) => handleSelectionChange('angle', e.target.value)} />
            <SelectorGroup label="Viewpoint" options={VIEWPOINTS} value={selections.viewpoint} onChange={(e) => handleSelectionChange('viewpoint', e.target.value)} />
            <SelectorGroup label="Camera Movement" options={MOVEMENTS} value={selections.movement} onChange={(e) => handleSelectionChange('movement', e.target.value)} />
          </div>

          {/* Column 3: Composition */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-semibold text-purple-400 border-b border-gray-700 pb-2">Composition</h2>
            <SelectorGroup label="Composition System" options={COMPOSITIONS} value={selections.composition} onChange={(e) => handleSelectionChange('composition', e.target.value)} />
            <SelectorGroup label="Perspective" options={PERSPECTIVES} value={selections.perspective} onChange={(e) => handleSelectionChange('perspective', e.target.value)} />
            <SelectorGroup label="Depth & Layers" options={LAYERS} value={selections.layers} onChange={(e) => handleSelectionChange('layers', e.target.value)} />
          </div>

          {/* Column 4: Environment */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-semibold text-yellow-400 border-b border-gray-700 pb-2">Environment</h2>
            <SelectorGroup label="Time of Day" options={TIMES_OF_DAY} value={selections.time} onChange={(e) => handleSelectionChange('time', e.target.value)} />
            <SelectorGroup label="Weather" options={WEATHER_CONDITIONS} value={selections.weather} onChange={(e) => handleSelectionChange('weather', e.target.value)} />
          </div>
        </main>

        <div className="mt-8 text-center">
          <button
            onClick={handleGeneratePrompt}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Generate Cinematic Prompt
          </button>
        </div>

        {generatedPrompt && (
          <div className="mt-8">
            <PromptOutput prompt={generatedPrompt} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
