const DetoxRuntimeError = require('../../errors/DetoxRuntimeError');

class AppConnectionHandler {
  constructor({ api, session }) {
    this._api = api;
    this._api.appendLogDetails({
      trackingId: 'app',
      role: 'app',
      sessionId: session.id,
    });

    this._session = session;
  }

  handle(action) {
    if (!this._session.tester) {
      throw new DetoxRuntimeError({
        message: 'Cannot forward the message to the Detox client.',
        debugInfo: action,
      });
    }

    this._session.tester.sendAction(action);
  }
}

module.exports = AppConnectionHandler;
