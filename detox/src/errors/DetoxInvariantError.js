class DetoxInvariantError extends Error {
  constructor(message) {
    super(message + '\n' + DetoxInvariantError.reportIssue);
    this.name = 'DetoxInvariantError';
  }

  static get reportIssue() {
    return 'Please report this issue on our GitHub tracker:\nhttps://github.com/wix/Detox/issues';
  }
}

module.exports = DetoxInvariantError;
