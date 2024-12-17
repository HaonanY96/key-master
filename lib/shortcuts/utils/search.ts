/**
 * Calculate Levenshtein distance between two strings
 */
function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,  // substitution
          dp[i - 1][j] + 1,      // deletion
          dp[i][j - 1] + 1       // insertion
        );
      }
    }
  }

  return dp[m][n];
}

/**
 * Calculate similarity ratio between two strings (0-1)
 */
export function calculateSimilarity(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1.0;
  
  const distance = levenshteinDistance(str1, str2);
  return 1 - distance / maxLength;
}

/**
 * Check if two strings match with fuzzy search
 */
export function fuzzyMatch(text: string, query: string, threshold = 0.7): boolean {
  text = text.toLowerCase();
  query = query.toLowerCase();

  // Exact match takes priority
  if (text.includes(query)) return true;

  // Check each word
  const textWords = text.split(/\s+/);
  const queryWords = query.split(/\s+/);

  // Apply fuzzy matching to each query word
  return queryWords.every(queryWord => 
    textWords.some(textWord => 
      calculateSimilarity(textWord, queryWord) >= threshold
    )
  );
} 