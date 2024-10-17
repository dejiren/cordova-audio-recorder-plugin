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

// success callback: returns the current amplitude
exports.getAmplitude = function (onSuccess, failed) {
  exec(onSuccess, failed, "AudioRecorder", "amplitude", []);
};

// Recorderの状態を監視する
exports.onEnd = function (onStatus) {
  exec(onStatus, onStatus, "AudioRecorder", "status", []);
};
