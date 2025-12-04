// ===========================================
// DCE Sales Hub - Firebase Authentication
// ===========================================
// 
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project (or use existing)
// 3. Go to Authentication > Sign-in method
// 4. Enable: Google, Microsoft, Apple
// 5. Go to Project Settings > General
// 6. Scroll to "Your apps" > Add Web App
// 7. Copy the firebaseConfig values below
// 8. Add your domain to Authentication > Settings > Authorized domains
//
// ===========================================

// FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyB5viMeAjQq7m-a0Dzn2VxHtThzxDlbshs",
    authDomain: "dce-sales-strategy.firebaseapp.com",
    projectId: "dce-sales-strategy",
    storageBucket: "dce-sales-strategy.firebasestorage.app",
    messagingSenderId: "1030425362432",
    appId: "1:1030425362432:web:067f4ae59b1beddb1b18e5",
    measurementId: "G-2X9RYRJ1DW"
};

// ===========================================
// AUTH STATE
// ===========================================
let currentUser = null;

// Default profile picture (Germanedge branded - using UI Avatars as fallback)
function getProfilePicture(user) {
    if (user?.picture) return user.picture;
    const name = encodeURIComponent(user?.name || 'User');
    return `https://ui-avatars.com/api/?name=${name}&background=FFD100&color=1a1a1a&bold=true&size=128`;
}

// ===========================================
// INITIALIZATION
// ===========================================
function initAuth() {
    try {
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        // Listen for auth state changes
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                currentUser = {
                    name: user.displayName,
                    email: user.email,
                    picture: user.photoURL,
                    sub: user.uid
                };
                onUserLoggedIn(currentUser);
            } else {
                currentUser = null;
                onUserLoggedOut();
            }
        });

    } catch (error) {
        console.error('Auth initialization error:', error);
        onUserLoggedOut();
    }
}

// ===========================================
// LOGIN / LOGOUT
// ===========================================
function login() {
    showLoginModal();
}

function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(() => hideLoginModal())
        .catch((error) => {
            console.error('Google login error:', error);
            alert('Login failed: ' + error.message);
        });
}

function loginWithMicrosoft() {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    firebase.auth().signInWithPopup(provider)
        .then(() => hideLoginModal())
        .catch((error) => {
            console.error('Microsoft login error:', error);
            alert('Login failed: ' + error.message);
        });
}

function loginWithApple() {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    firebase.auth().signInWithPopup(provider)
        .then(() => hideLoginModal())
        .catch((error) => {
            console.error('Apple login error:', error);
            alert('Login failed: ' + error.message);
        });
}

function logout() {
    firebase.auth().signOut()
        .catch((error) => {
            console.error('Logout error:', error);
        });
}

// ===========================================
// LOGIN MODAL
// ===========================================
function showLoginModal() {
    // Create modal if it doesn't exist
    if (!document.getElementById('login-modal')) {
        const modal = document.createElement('div');
        modal.id = 'login-modal';
        modal.innerHTML = `
            <div class="fixed inset-0 z-[2000] bg-black/80 flex items-center justify-center">
                <div class="bg-white rounded-xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden">
                    <div class="bg-black p-6 text-center">
                        <div class="text-3xl text-ge-yellow mb-2">∞</div>
                        <h2 class="text-white text-xl font-bold">Sign in to DCE Hub</h2>
                    </div>
                    <div class="p-6 space-y-3">
                        <button onclick="loginWithMicrosoft()" 
                                class="w-full flex items-center justify-center gap-3 bg-[#2F2F2F] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#404040] transition">
                            <svg class="w-5 h-5" viewBox="0 0 21 21" fill="none">
                                <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
                                <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
                                <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
                                <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
                            </svg>
                            Continue with Microsoft
                        </button>
                        <button onclick="loginWithGoogle()" 
                                class="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-semibold py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
                            <svg class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Continue with Google
                        </button>
                        <button onclick="loginWithApple()" 
                                class="w-full flex items-center justify-center gap-3 bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-900 transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Continue with Apple
                        </button>
                    </div>
                    <div class="px-6 pb-6">
                        <button onclick="hideLoginModal()" 
                                class="w-full text-gray-500 text-sm hover:text-gray-700 transition">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    document.getElementById('login-modal').style.display = 'block';
}

function hideLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ===========================================
// UI UPDATES
// ===========================================
function onUserLoggedIn(user) {
    currentUser = user;
    
    // Update all auth buttons on the page with dropdown
    const profilePic = getProfilePicture(user);
    const authContainers = document.querySelectorAll('.auth-container');
    authContainers.forEach(container => {
        container.innerHTML = `
            <div class="relative">
                <button onclick="toggleProfileDropdown()" class="flex items-center gap-2 hover:opacity-80 transition" id="profile-btn">
                    <img src="${profilePic}" 
                         alt="Profile" 
                         class="w-8 h-8 rounded-full border-2 border-ge-yellow object-cover bg-gray-800">
                    <span class="text-white text-sm font-medium hidden lg:inline">${user.name || user.email}</span>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                
                <!-- Profile Dropdown -->
                <div id="profile-dropdown" class="hidden absolute right-0 top-12 w-72 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-[2000]">
                    <div class="bg-black p-4">
                        <div class="flex items-center gap-3">
                            <img src="${profilePic}" 
                                 class="w-12 h-12 rounded-full border-2 border-ge-yellow object-cover bg-gray-800">
                            <div>
                                <div class="text-white font-bold">${user.name || 'User'}</div>
                                <div class="text-gray-400 text-xs">${user.email || ''}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-4 border-b border-gray-100">
                        <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Progress</div>
                        <div class="flex items-center gap-2">
                            <div class="flex-1 bg-gray-200 rounded-full h-2">
                                <div id="dropdown-progress-bar" class="bg-ge-yellow h-2 rounded-full transition-all" style="width: 0%"></div>
                            </div>
                            <span id="dropdown-progress-text" class="text-xs font-bold text-gray-600">0/4</span>
                        </div>
                    </div>
                    
                    <div class="p-4 border-b border-gray-100">
                        <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Certifications</div>
                        <div id="dropdown-certs" class="grid grid-cols-2 gap-2">
                            <div class="text-xs text-gray-400">Loading...</div>
                        </div>
                    </div>
                    
                    <div class="p-2 space-y-1">
                        <button onclick="confirmClearResults()" class="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded transition flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                            Clear All Results
                        </button>
                        <button onclick="logout()" class="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                            </svg>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // Load user data from Firestore
    loadUserData().then(() => {
        updateProgressUI();
        // Dispatch event for other scripts after data is loaded
        window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: user }));
        console.log('User logged in:', user.name || user.email);
    });
}

function onUserLoggedOut() {
    currentUser = null;
    
    // Update all auth buttons on the page
    const authContainers = document.querySelectorAll('.auth-container');
    authContainers.forEach(container => {
        container.innerHTML = `
            <button onclick="login()" 
                    class="flex items-center gap-2 bg-ge-yellow text-black text-xs font-bold uppercase px-4 py-2 rounded hover:bg-yellow-400 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In
            </button>
        `;
    });
    
    window.userPrefsKey = null;
    
    // Dispatch event for other scripts
    window.dispatchEvent(new CustomEvent('userLoggedOut'));
}

// ===========================================
// FIRESTORE DATABASE
// ===========================================
let db = null;

function initFirestore() {
    if (!db) {
        db = firebase.firestore();
    }
    return db;
}

// Get user document reference
function getUserDocRef() {
    if (!currentUser || !currentUser.sub) return null;
    return initFirestore().collection('users').doc(currentUser.sub);
}

// ===========================================
// USER DATA - FIRESTORE
// ===========================================

// Load all user data from Firestore
async function loadUserData() {
    const docRef = getUserDocRef();
    if (!docRef) return null;
    
    try {
        const doc = await docRef.get();
        if (doc.exists) {
            window.userData = doc.data();
            console.log('User data loaded from Firestore');
            return window.userData;
        } else {
            // Create initial user document
            const initialData = {
                name: currentUser.name,
                email: currentUser.email,
                picture: currentUser.picture,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                preferences: {},
                certifications: {},
                examResults: [],
                lastVisit: firebase.firestore.FieldValue.serverTimestamp()
            };
            await docRef.set(initialData);
            window.userData = initialData;
            console.log('New user document created');
            return window.userData;
        }
    } catch (e) {
        console.error('Error loading user data:', e);
        return null;
    }
}

// Save user data to Firestore
async function saveUserData(data) {
    const docRef = getUserDocRef();
    if (!docRef) return false;
    
    try {
        await docRef.update({
            ...data,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('User data saved to Firestore');
        return true;
    } catch (e) {
        console.error('Error saving user data:', e);
        return false;
    }
}

// ===========================================
// PREFERENCES
// ===========================================
async function updateUserPreference(key, value) {
    const docRef = getUserDocRef();
    if (!docRef) return false;
    
    try {
        await docRef.update({
            [`preferences.${key}`]: value,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        if (window.userData && window.userData.preferences) {
            window.userData.preferences[key] = value;
        }
        return true;
    } catch (e) {
        console.error('Error updating preference:', e);
        return false;
    }
}

function getUserPreference(key, defaultValue = null) {
    if (window.userData && window.userData.preferences) {
        return window.userData.preferences[key] !== undefined 
            ? window.userData.preferences[key] 
            : defaultValue;
    }
    return defaultValue;
}

// ===========================================
// CERTIFICATIONS & EXAM RESULTS
// ===========================================
async function saveCertification(trackId, passed, score) {
    const docRef = getUserDocRef();
    if (!docRef) return false;
    
    try {
        const certData = {
            passed: passed,
            score: score,
            earnedAt: new Date().toISOString()
        };
        
        await docRef.update({
            [`certifications.${trackId}`]: certData,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        if (window.userData) {
            if (!window.userData.certifications) window.userData.certifications = {};
            window.userData.certifications[trackId] = certData;
        }
        
        console.log(`Certification saved for track: ${trackId}`);
        return true;
    } catch (e) {
        console.error('Error saving certification:', e);
        return false;
    }
}

async function saveExamResult(trackId, score, totalQuestions, passed) {
    const docRef = getUserDocRef();
    if (!docRef) return false;
    
    try {
        const result = {
            trackId: trackId,
            score: score,
            totalQuestions: totalQuestions,
            passed: passed,
            takenAt: new Date().toISOString()
        };
        
        await docRef.update({
            examResults: firebase.firestore.FieldValue.arrayUnion(result),
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        if (window.userData) {
            if (!window.userData.examResults) window.userData.examResults = [];
            window.userData.examResults.push(result);
        }
        
        console.log(`Exam result saved for track: ${trackId}`);
        return true;
    } catch (e) {
        console.error('Error saving exam result:', e);
        return false;
    }
}

function getCertification(trackId) {
    if (window.userData && window.userData.certifications) {
        return window.userData.certifications[trackId] || null;
    }
    return null;
}

function getAllCertifications() {
    if (window.userData && window.userData.certifications) {
        return window.userData.certifications;
    }
    return {};
}

function getExamHistory(trackId = null) {
    if (window.userData && window.userData.examResults) {
        if (trackId) {
            return window.userData.examResults.filter(r => r.trackId === trackId);
        }
        return window.userData.examResults;
    }
    return [];
}

// ===========================================
// CLEAR RESULTS
// ===========================================
function confirmClearResults() {
    if (confirm('Are you sure you want to clear all your certifications and exam results? This cannot be undone.')) {
        clearAllResults();
    }
}

async function clearAllResults() {
    const docRef = getUserDocRef();
    if (!docRef) {
        alert('You must be logged in to clear results.');
        return false;
    }
    
    try {
        await docRef.update({
            certifications: {},
            examResults: [],
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        // Update local state
        if (window.userData) {
            window.userData.certifications = {};
            window.userData.examResults = [];
        }
        
        // Clear localStorage certifications too
        TRACKS.forEach(track => {
            localStorage.removeItem(`cert_${track}`);
        });
        
        // Update UI
        updateProgressUI();
        
        // Update badges in learning.html if function exists
        if (typeof updateBadges === 'function') {
            updateBadges();
        }
        
        // Close dropdown
        const dropdown = document.getElementById('profile-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
        
        alert('All results have been cleared.');
        console.log('All results cleared from Firestore');
        return true;
    } catch (e) {
        console.error('Error clearing results:', e);
        alert('Failed to clear results. Please try again.');
        return false;
    }
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================
function isLoggedIn() {
    return currentUser !== null;
}

function getCurrentUser() {
    return currentUser;
}

// ===========================================
// PROFILE DROPDOWN
// ===========================================
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('profile-dropdown');
    const btn = document.getElementById('profile-btn');
    if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

// ===========================================
// PROGRESS UI UPDATES
// ===========================================
const TRACKS = ['strategy', 'intel', 'ai', 'competition'];
const TRACK_NAMES = {
    'strategy': 'Strategy',
    'intel': 'Intel',
    'ai': 'AI Adoption',
    'competition': 'Competition'
};

function updateProgressUI() {
    const certs = getAllCertifications();
    const certCount = Object.keys(certs).filter(k => certs[k]?.passed).length;
    const totalTracks = TRACKS.length;
    const percentage = Math.round((certCount / totalTracks) * 100);
    
    // Update dropdown progress bar
    const progressBar = document.getElementById('dropdown-progress-bar');
    const progressText = document.getElementById('dropdown-progress-text');
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${certCount}/${totalTracks}`;
    
    // Update dropdown certifications
    const certsContainer = document.getElementById('dropdown-certs');
    if (certsContainer) {
        certsContainer.innerHTML = TRACKS.map(track => {
            const isCertified = certs[track]?.passed;
            return `
                <div class="flex items-center gap-1 text-xs ${isCertified ? 'text-green-600' : 'text-gray-400'}">
                    <span>${isCertified ? '✓' : '○'}</span>
                    <span>${TRACK_NAMES[track]}</span>
                </div>
            `;
        }).join('');
    }
    
    // Update sidebar progress panel (if exists)
    updateSidebarProgress(certs, certCount, totalTracks, percentage);
}

function updateSidebarProgress(certs, certCount, totalTracks, percentage) {
    const sidebar = document.getElementById('sidebar-progress-panel');
    if (!sidebar) return;
    
    sidebar.innerHTML = `
        <div class="p-4 bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">My Progress</div>
            
            <div class="flex items-center gap-2 mb-4">
                <div class="flex-1 bg-gray-700 rounded-full h-2">
                    <div class="bg-ge-yellow h-2 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
                </div>
                <span class="text-xs font-bold text-white">${certCount}/${totalTracks}</span>
            </div>
            
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Certifications</div>
            <div class="space-y-2">
                ${TRACKS.map(track => {
                    const isCertified = certs[track]?.passed;
                    return `
                        <div class="flex items-center justify-between">
                            <span class="text-xs ${isCertified ? 'text-white' : 'text-gray-500'}">${TRACK_NAMES[track]}</span>
                            <span class="text-xs ${isCertified ? 'text-green-400' : 'text-gray-600'}">${isCertified ? '✓ Certified' : '○ Pending'}</span>
                        </div>
                    `;
                }).join('')}
            </div>
            
            ${certCount === totalTracks ? `
                <div class="mt-4 p-2 bg-ge-yellow/20 rounded text-center">
                    <span class="text-ge-yellow text-xs font-bold">🏆 All Tracks Complete!</span>
                </div>
            ` : ''}
        </div>
    `;
}

// ===========================================
// INITIALIZE ON PAGE LOAD
// ===========================================
document.addEventListener('DOMContentLoaded', initAuth);
