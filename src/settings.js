// src/settings.js

// Global settings are defined here:
const GAME = {
  SPEED: 5,
};

// Ground component settings are defined here:
const GROUND = {
  WIDTH: 3200,
  LENGTH: 1200,
  COLOR: "midnightblue",
};

// Road component settings are defined here:
const ROAD = {
  LENGTH: 10,
  CUTOFF: -200,
};

// Road Segment component settings are defined here:
const ROAD_SEGMENT = {
  WIDTH: 100,
  HEIGHT: 1,
  LENGTH: 100,
  COLOR: "cyan",
};

// Car component settings are defined here:
const CAR = {
  WIDTH: 20,
  HEIGHT: 5,
  LENGTH: 20,
  COLOR: "white",
  ACCELERATION: 0.25,
  TURN_SPEED: 0.75,
  get BOUNDARY() {
    return ROAD_SEGMENT.WIDTH / 2 - this.WIDTH / 2;
  },
};

// Combine settings for export
const settings = { GAME, GROUND, ROAD, ROAD_SEGMENT, CAR };
export default settings;
