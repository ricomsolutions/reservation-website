interface RateLimitEntry {
  count: number;
  expiresAt: number;
}

export function rateLimit({
  interval,
  uniqueTokenPerInterval = 500,
}: {
  interval: number;
  uniqueTokenPerInterval?: number;
}) {
  const tokenCache = new Map<string, RateLimitEntry>();

  return {
    check(limit: number, token: string): Promise<void> {
      return new Promise((resolve, reject) => {
        const now = Date.now();

        // Clean up expired entries
        if (tokenCache.size > uniqueTokenPerInterval) {
          for (const [key, entry] of tokenCache.entries()) {
            if (entry.expiresAt < now) {
              tokenCache.delete(key);
            }
          }
        }

        const entry = tokenCache.get(token);

        if (!entry || entry.expiresAt < now) {
          tokenCache.set(token, {
            count: 1,
            expiresAt: now + interval,
          });
          return resolve();
        }

        if (entry.count >= limit) {
          return reject(
            new Error("Rate limit exceeded. Please try again later.")
          );
        }

        entry.count += 1;
        tokenCache.set(token, entry);
        resolve();
      });
    },
  };
}
