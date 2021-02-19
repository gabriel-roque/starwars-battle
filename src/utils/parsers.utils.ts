export function setSessionPlayer(session: object): void {
  sessionStorage.setItem('player', JSON.stringify(session));
}

export function getSessionPlayer(): object {
  const session = sessionStorage.getItem('player') as string;
  return JSON.parse(session);
}

export function parserNickname(nick: string): string {
  return String(nick)
    .toLocaleLowerCase()
    .split(/[ .-/*~#ç`´^"'!%$&¨@{}(),?=+_-]/g)
    .join('-');
}
