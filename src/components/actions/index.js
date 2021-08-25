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