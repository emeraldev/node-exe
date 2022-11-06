function wrapGameAction(emitter, actionName, callback) {
  emitter.on(actionName, (data) => {
    try {
      callback(JSON.parse(data));
    } catch (error) {
      callback(undefined)
    }
  });
}

const events = require('events');

let emitter = new events.EventEmitter();
wrapGameAction(emitter, "player_1_select", console.log);
emitter.emit("player_1_select", "\"row\": 1, \"column\": 1 }");

module.exports.wrapGameAction = wrapGameAction;