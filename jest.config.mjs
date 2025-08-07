import presets from 'ts-jest/presets/index.js';

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    ...presets.defaults.transform,
  },
};