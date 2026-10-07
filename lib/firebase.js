// Firebase compartido por /cms y /metricas (proyecto finnix-crm).
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, connectAuthEmulator } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, connectFirestoreEmulator, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getStorage, connectStorageEmulator } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

export const app = initializeApp({
  apiKey: 'AIzaSyCgpZnHLfdoMu3YuCvQvJUnVWONpI3g2LU',
  authDomain: 'finnix-crm.firebaseapp.com',
  projectId: 'finnix-crm',
  storageBucket: 'finnix-crm.firebasestorage.app',
  messagingSenderId: '869108301178',
  appId: '1:869108301178:web:678d8cf5ce0f9a71286ac3',
});
export const auth = getAuth(app), db = getFirestore(app), st = getStorage(app);

const local = ['localhost', '127.0.0.1'].includes(location.hostname);

// App Check: misma clave de reCAPTCHA Enterprise que el resto del
// ecosistema (CRM, finnix.ar, finnix-app, Urban.OS, Minimarket.OS). Sin esto,
// el día que se exija App Check en Firestore/Storage el Centro deja de poder
// leer y guardar. Que no cargue no corta nada mientras la exigencia esté apagada.
// El dominio centro.finnix.com.ar tiene que estar en la lista de dominios
// de la clave (Google Cloud Console → reCAPTCHA Enterprise).
const APPCHECK_SITE_KEY = '6LfDyMstAAAAAFVbcyWCBYDG0FR9T-2q9LQxM6r-';
let appCheck = null, appCheckGetToken = null;
if (!local) {
  try {
    const { initializeAppCheck, ReCaptchaEnterpriseProvider, getToken } =
      await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check.js');
    appCheck = initializeAppCheck(app, { provider: new ReCaptchaEnterpriseProvider(APPCHECK_SITE_KEY), isTokenAutoRefreshEnabled: true });
    appCheckGetToken = getToken;
  } catch (e) {
    console.error('App Check no pudo inicializarse:', e);
  }
} else {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  connectStorageEmulator(st, '127.0.0.1', 9199);
}

export async function esSuperAdmin(user) {
  try { return (await getDoc(doc(db, 'crm_users', user.uid))).data()?.rol === 'super_admin'; }
  catch { return false; }
}

// Token de App Check para mandarlo a funciones propias (/api/*), que lo
// reenvían a Firestore. null si App Check no está disponible.
export async function appCheckToken() {
  if (!appCheck) return null;
  try { return (await appCheckGetToken(appCheck)).token; } catch { return null; }
}
