import Constants from "expo-constants";

const API_URL =
  Constants.expoConfig?.extra?.API_URL ||
  Constants.manifest?.extra?.API_URL || // fallback for older SDKs
  process.env.EXPO_PUBLIC_API_URL || // optional env fallback
  "http://127.0.0.1:8000"; // final fallback for local dev

export async function loginWithEmail({ email, password }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || "Login failed");
  return data; // expect { token, user }
}


export async function getMe(token) {
  const res = await fetch(`${API_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Session invalid");
  return res.json();
}