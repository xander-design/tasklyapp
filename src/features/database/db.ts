import * as SQLite from "expo-sqlite";

// Open the database
const db = SQLite.openDatabaseSync("taskly.db");

// Initialize database
export const initDatabase = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS taskly_settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT UNIQUE NOT NULL,
        value TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

// Save setting
export const saveSetting = async (key: string, value: string) => {
  try {
    await db.runAsync(
      `INSERT OR REPLACE INTO taskly_settings (key, value, updated_at) VALUES (?, ?, datetime('now'))`,
      [key, value],
    );
  } catch (error) {
    console.error("Error saving setting:", error);
  }
};

// Get setting
export const getSetting = async (key: string): Promise<string | null> => {
  try {
    const result = await db.getFirstAsync<{ value: string }>(
      `SELECT value FROM taskly_settings WHERE key = ?`,
      [key],
    );
    if (result) {
      return result.value;
    }
    return null;
  } catch (error) {
    console.error("Error getting setting:", error);
    return null;
  }
};

// Get all settings
export const getAllSettings = async (): Promise<Record<string, string>> => {
  try {
    const results = await db.getAllAsync<{ key: string; value: string }>(
      `SELECT key, value FROM taskly_settings`,
    );
    const settings: Record<string, string> = {};
    for (const row of results) {
      settings[row.key] = row.value;
    }
    return settings;
  } catch (error) {
    console.error("Error getting all settings:", error);
    return {};
  }
};

// Clear all settings (useful for resetting or migration)
export const clearAllSettings = async () => {
  try {
    await db.runAsync(`DELETE FROM taskly_settings`);
    console.log("All settings cleared");
  } catch (error) {
    console.error("Error clearing settings:", error);
  }
};
