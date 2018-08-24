export function initState() {
  const previousSession = loadSession();
  if (previousSession === null)
    return { item: "", items: [], disableAnimation: false };
  else return previousSession;
}

export function saveSession(state) {
  localStorage.setItem("session", JSON.stringify(state));
}

function loadSession() {
  return JSON.parse(localStorage.getItem("session"));
}

export default { initState, saveSession };
