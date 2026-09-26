const API_BASE = "https://api.abcz.workers.dev/api/fitlog";

/**
 * Fetch every workout from the FitLog API.
 * Always returns an array (empty on failure) so callers never crash.
 */
export async function getWorkouts() {
  try {
    const res = await fetch(API_BASE, { cache: "no-store" });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("getWorkouts failed:", err);
    return [];
  }
}

/**
 * Fetch a single workout by id.
 * Falls back to filtering the full list if the /:id route misbehaves.
 */
export async function getWorkoutById(id) {
  try {
    const res = await fetch(`${API_BASE}/${id}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data && !Array.isArray(data)) return data;
      if (Array.isArray(data) && data.length) return data[0];
    }
  } catch (err) {
    console.error("getWorkoutById failed:", err);
  }

  // Fallback: pull from the full collection
  const all = await getWorkouts();
  return all.find((w) => String(w.id) === String(id)) || null;
}
