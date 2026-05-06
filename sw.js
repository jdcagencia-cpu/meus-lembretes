const CACHE = 'lembretes-v2';
const ASSETS = ['/', '/index.html', '/manifest.json', '/icons/icon-192.png', '/icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('api.anthropic.com') || e.request.url.includes('fonts.google')) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      });
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    if (list.length) return list[0].focus();
    return clients.openWindow('/');
  }));
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'CHECK_TASKS') checkScheduled(e.data.tasks);
});

function checkScheduled(tasks) {
  if (!tasks || !tasks.length) return;
  const now = new Date();
  const hhmm = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
  const today = now.toLocaleDateString('pt-BR');
  tasks.forEach(t => {
    if (t.done || !t.notifTime) return;
    if (t.notifTime === hhmm) {
      self.registration.showNotification('📋 Lembrete', {
        body: t.titulo + (t.prazo ? ' — ' + t.prazo : ''),
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        tag: 'notif_' + t.id + '_' + today + '_' + hhmm,
        renotify: false
      });
    }
  });
}
