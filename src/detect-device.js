let canvas, gl, glRenderer, models;

const devices = [
  ["a7", "640x1136", ["iPhone 5", "iPhone 5s"]],
  ["a7", "1536x2048", ["iPad Air", "iPad Mini 2", "iPad Mini 3"]],
  ["a8", "640x1136", ["iPod touch (6th gen)"]],
  ["a8", "750x1334", ["iPhone 6"]],
  ["a8", "1242x2208", ["iPhone 6 Plus"]],
  ["a8", "1536x2048", ["iPad Air 2", "iPad Mini 4"]],
  ["a9", "640x1136", ["iPhone SE"]],
  ["a9", "750x1334", ["iPhone 6s"]],
  ["a9", "1242x2208", ["iPhone 6s Plus"]],
  ["a9x", "1536x2048", ["iPad Pro (1st gen 9.7-inch)"]],
  ["a9x", "2048x2732", ["iPad Pro (1st gen 12.9-inch)"]],
  ["a10", "750x1334", ["iPhone 7"]],
  ["a10", "1242x2208", ["iPhone 7 Plus"]],
  ["a10x", "1668x2224", ["iPad Pro (2th gen 10.5-inch)"]],
  ["a10x", "2048x2732", ["iPad Pro (2th gen 12.9-inch)"]],
  ["a11", "750x1334", ["iPhone 8"]],
  ["a11", "1242x2208", ["iPhone 8 Plus"]],
  ["a11", "1125x2436", ["iPhone X"]],
  ["a12", "828x1792", ["iPhone Xr"]],
  ["a12", "1125x2436", ["iPhone Xs"]],
  ["a12", "1242x2688", ["iPhone Xs Max"]],
  ["a12x", "1668x2388", ["iPad Pro (3rd gen 11-inch)"]],
  ["a12x", "2048x2732", ["iPad Pro (3rd gen 12.9-inch)"]],
  // Add more device entries here...
];

function getCanvas() {
  if (typeof window !== "undefined") {
    if (!canvas) {
      canvas = document.createElement("canvas");
    }
  }
  return canvas;
}

function getGl() {
  if (!gl) {
    gl = getCanvas()?.getContext("experimental-webgl");
  }
  return gl;
}

function getResolution() {
  let ratio;
  if (typeof window !== "undefined") {
    ratio = window?.devicePixelRatio || 1;
    return `${Math.min(window?.innerWidth, window?.innerHeight) * ratio}x${
      Math.max(window?.innerWidth, window?.innerHeight) * ratio
    }`;
  }
}

function getGlRenderer() {
  if (!glRenderer) {
    const debugInfo = getGl()?.getExtension("WEBGL_debug_renderer_info");
    glRenderer = debugInfo
      ? getGl().getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : "unknown";
  }
  return glRenderer;
}

export function getModels() {
  if (!models) {
    const gpu = getGlRenderer();
    const res = getResolution();
    models = ["unknown"];
    const matches = gpu.match(/^apple\s+([_a-z0-9-]+)\s+gpu$/i);

    if (matches) {
      for (let i = 0; i < devices.length; i++) {
        const device = devices[i];
        if (matches[1].toLowerCase() === device[0] && res === device[1]) {
          models = device[2];
          break;
        }
      }
    }
  }
  return models;
}

export function isDevice(match) {
  const currentModels = getModels();
  match = match?.toLowerCase()?.replace(/\s+$/, "") + " ";
  for (let i = 0; i < currentModels?.length; i++) {
    const model = currentModels[i]?.toLowerCase() + " ";
    if (model?.startsWith(match)) {
      return true;
    }
  }
  return false;
}

export function getDeviceInfo() {
  return {
    glRenderer: getGlRenderer(),
    models: getModels(),
    resolution: getResolution(),
  };
}
