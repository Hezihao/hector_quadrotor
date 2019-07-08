
"use strict";

let VelocityXYCommand = require('./VelocityXYCommand.js');
let ThrustCommand = require('./ThrustCommand.js');
let RC = require('./RC.js');
let MotorStatus = require('./MotorStatus.js');
let MotorCommand = require('./MotorCommand.js');
let RawRC = require('./RawRC.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let Altimeter = require('./Altimeter.js');
let ServoCommand = require('./ServoCommand.js');
let Compass = require('./Compass.js');
let MotorPWM = require('./MotorPWM.js');
let YawrateCommand = require('./YawrateCommand.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let HeightCommand = require('./HeightCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let HeadingCommand = require('./HeadingCommand.js');
let Supply = require('./Supply.js');
let RawImu = require('./RawImu.js');
let RawMagnetic = require('./RawMagnetic.js');
let ControllerState = require('./ControllerState.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let LandingActionResult = require('./LandingActionResult.js');
let PoseAction = require('./PoseAction.js');
let PoseFeedback = require('./PoseFeedback.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let PoseResult = require('./PoseResult.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let PoseActionResult = require('./PoseActionResult.js');
let LandingAction = require('./LandingAction.js');
let TakeoffResult = require('./TakeoffResult.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let LandingFeedback = require('./LandingFeedback.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let LandingResult = require('./LandingResult.js');
let LandingGoal = require('./LandingGoal.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let PoseGoal = require('./PoseGoal.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let TakeoffAction = require('./TakeoffAction.js');

module.exports = {
  VelocityXYCommand: VelocityXYCommand,
  ThrustCommand: ThrustCommand,
  RC: RC,
  MotorStatus: MotorStatus,
  MotorCommand: MotorCommand,
  RawRC: RawRC,
  PositionXYCommand: PositionXYCommand,
  Altimeter: Altimeter,
  ServoCommand: ServoCommand,
  Compass: Compass,
  MotorPWM: MotorPWM,
  YawrateCommand: YawrateCommand,
  VelocityZCommand: VelocityZCommand,
  HeightCommand: HeightCommand,
  RuddersCommand: RuddersCommand,
  AttitudeCommand: AttitudeCommand,
  HeadingCommand: HeadingCommand,
  Supply: Supply,
  RawImu: RawImu,
  RawMagnetic: RawMagnetic,
  ControllerState: ControllerState,
  PoseActionFeedback: PoseActionFeedback,
  LandingActionResult: LandingActionResult,
  PoseAction: PoseAction,
  PoseFeedback: PoseFeedback,
  TakeoffGoal: TakeoffGoal,
  PoseResult: PoseResult,
  TakeoffActionResult: TakeoffActionResult,
  PoseActionResult: PoseActionResult,
  LandingAction: LandingAction,
  TakeoffResult: TakeoffResult,
  LandingActionFeedback: LandingActionFeedback,
  LandingFeedback: LandingFeedback,
  TakeoffActionGoal: TakeoffActionGoal,
  LandingActionGoal: LandingActionGoal,
  TakeoffActionFeedback: TakeoffActionFeedback,
  LandingResult: LandingResult,
  LandingGoal: LandingGoal,
  PoseActionGoal: PoseActionGoal,
  PoseGoal: PoseGoal,
  TakeoffFeedback: TakeoffFeedback,
  TakeoffAction: TakeoffAction,
};
