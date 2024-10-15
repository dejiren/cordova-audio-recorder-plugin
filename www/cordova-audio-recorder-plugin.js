var exec = require("cordova/exec");

exports.audioCapture_Start = function (audioCapture_Ended, audioCapture_Failed, audioCapture_duration) {
  exec(
    audioCapture_Ended,
    audioCapture_Failed,
    "AudioRecorder",
    "audioCapture_Start",
    audioCapture_duration ? [audioCapture_duration] : [60]
  );
};

exports.audioCapture_Stop = function (audioCapture_Ended, audioCapture_Failed) {
  exec(audioCapture_Ended, audioCapture_Failed, "AudioRecorder", "audioCapture_Stop", []);
};

exports.getTime = function () {
  return exec(null, null, "AudioRecorder", "time", []);
};

exports.getAmplitude = function () {
  return exec(null, null, "AudioRecorder", "amplitude", []);
};
