import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const webStorage = {
  async getItem(key) {
    if (typeof window === "undefined") return null; // SSR guard
    return window.localStorage.getItem(key);
  },
  async setItem(key, value) {
    if (typeof window === "undefined") return; // SSR guard
    window.localStorage.setItem(key, value);
  },
  async removeItem(key) {
    if (typeof window === "undefined") return; // SSR guard
    window.localStorage.removeItem(key);
  },
};

export const storage = Platform.OS === "web" ? webStorage : AsyncStorage;
