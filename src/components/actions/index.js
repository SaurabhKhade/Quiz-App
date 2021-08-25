export function initCounter(length) {
  return {
    type: 'INITCOUNTER',
    payload: {
      length
    }
  };
}

export function resetCounter() {
  return {
    type: 'RESETCOUNTER',
    payload: {}
  };
}

export function elapse() {
  return {
    type: 'ELAPSE',
    payload: {}
  };
}

export function initAnswers(length) {
  return {
    type: 'INITANSWERS',
    payload: {
      length
    }
  };
}

export function resetAnswers() {
  return {
    type: 'RESETANSWERS',
    payload: {}
  };
}

export function submitAnswer(id,answer) {
  return {
    type: 'SUBMITANSWER',
    payload: {
      id,
      answer
    }
  };
}

export function cancelAnswer(id) {
  return {
    type: 'CANCELANSWER',
    payload: {
      id
    }
  };
}

export function initIsStarted() {
  return {
    type: 'INITISSTART',
    payload: {}
  };
}

export function start() {
  return {
    type: 'START',
    payload: {}
  };
}

export function stop() {
  return {
    type: 'STOP',
    payload: {}
  };
}

export function next(last) {
  return {
    type: 'NEXT',
    payload: {
      last
    }
  };
}

export function prev() {
  return {
    type: 'PREV',
    payload: {}
  };
}

export function initCurrentQuestion() {
  return {
    type: 'INITCURRENT',
    payload: {}
  };
}

export function resetCurrent() {
  return {
    type: 'RESETCURRENT',
    payload: {}
  };
}

export function setIntervalId(id) {
  return {
    type: 'SETID',
    payload: {
      id
    }
  };
}