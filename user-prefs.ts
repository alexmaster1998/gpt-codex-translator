import kv from '@vercel/kv';

export async function getPrefs() {
  const prefs = await kv.get('prefs');
  return prefs || {};
}

export async function updatePrefs(prefs: Record<string, string>) {
 return kv.set('prefs', prefs);
}
