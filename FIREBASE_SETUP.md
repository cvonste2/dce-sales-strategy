# Firebase Setup Guide for DCE Sales Hub

## Overview

This guide walks you through setting up Firebase for social login (Microsoft, Google, Apple) on the DCE Sales Hub.

**Time required:** ~10 minutes  
**Cost:** Free (up to 50k monthly active users)

---

## Step 1: Create Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Create a project** (or use an existing one)
3. Name it (e.g., `dce-sales-hub`)
4. Disable Google Analytics (optional, not needed)
5. Click **Create Project**

---

## Step 2: Add Web App

1. In your project, click the **Web icon** (`</>`) to add a web app
2. Register app:
   - **App nickname:** `DCE Sales Hub`
   - Skip Firebase Hosting for now
3. Click **Register app**
4. **Copy the `firebaseConfig` object** — you'll need this!

It looks like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB...",
  authDomain: "dce-sales-hub.firebaseapp.com",
  projectId: "dce-sales-hub",
  storageBucket: "dce-sales-hub.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Step 3: Enable Authentication Providers

1. In Firebase Console, go to **Build > Authentication**
2. Click **Get started**
3. Go to **Sign-in method** tab

### Enable Google
1. Click **Google**
2. Toggle **Enable**
3. Select a support email
4. Click **Save**

### Enable Microsoft
1. Click **Microsoft**
2. Toggle **Enable**
3. You'll need to create an Azure app:
   - Go to [Azure Portal](https://portal.azure.com) > Azure Active Directory > App registrations
   - Create new registration
   - Copy **Application (client) ID** and create a **Client secret**
   - Paste both into Firebase
4. Click **Save**

### Enable Apple (Optional)
1. Click **Apple**
2. Toggle **Enable**
3. Requires Apple Developer account ($99/year)
4. Follow [Apple Sign-In setup guide](https://firebase.google.com/docs/auth/web/apple)

---

## Step 4: Add Authorized Domains

1. In **Authentication > Settings**
2. Go to **Authorized domains**
3. Add your domains:
   - `localhost` (already added by default)
   - `YOUR-USERNAME.github.io` (for GitHub Pages)
   - Any custom domain you use

---

## Step 5: Update Your Code

Edit `js/auth.js` and replace the placeholder config:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyB...",              // Your API key
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

---

## Step 6: Test Locally

1. Start a local server:
   ```bash
   cd /path/to/dce-sales-strategy
   python3 -m http.server 8000
   ```

2. Open [http://localhost:8000](http://localhost:8000)

3. Click **Sign In** and test each provider

---

## Step 7: Deploy to Production

Once testing is complete:

1. Commit your changes via GitHub Desktop (or CLI)
2. Merge to `main` when ready
3. Ensure your production domain is in Firebase Authorized Domains

---

## What Users Will See

When clicking **Sign In**, a modal appears with:

```
┌─────────────────────────────────────┐
│      ∞                              │
│   Sign in to DCE Hub                │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ ▣▣  Continue with Microsoft │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │ G   Continue with Google    │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │    Continue with Apple     │    │
│  └─────────────────────────────┘    │
│                                     │
│            Cancel                   │
└─────────────────────────────────────┘
```

---

## Troubleshooting

### "auth/unauthorized-domain"
- Add your domain to Firebase Authentication > Settings > Authorized domains

### "auth/popup-blocked"
- User needs to allow popups for your domain
- Or the browser blocked it — try again

### "auth/operation-not-allowed"
- The sign-in provider isn't enabled in Firebase Console

### Microsoft login fails
- Check that your Azure app credentials are correct
- Ensure redirect URI in Azure matches Firebase's callback URL

---

## Security Notes

- The `firebaseConfig` is safe to expose in frontend code
- Firebase handles all the secure token exchange
- Use HTTPS in production
- Consider enabling email verification for extra security

---

## Next Steps

After basic auth is working, you can:

1. **Store user data** — Use Firebase Firestore
2. **Track certifications** — Save quiz completions per user
3. **Add role-based access** — Use Firebase custom claims
4. **Analytics** — Enable Firebase Analytics

---

## Support

- [Firebase Auth Documentation](https://firebase.google.com/docs/auth/web/start)
- [Firebase Community](https://firebase.google.com/community)
