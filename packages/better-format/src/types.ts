/**
 * @description Formatter options
 * @param excludeWords - Words to exclude from formatting
 * @param enableDashCleaning - Enable dash cleaning (default: true)
 * @param enableUnderscoreCleaning - Enable underscore cleaning (default: true)
 */
export interface FormatterOptions {
  /**
   * @description Words to exclude from formatting
   */
  excludeWords?: string[];
  /**
   * @description Enable dash cleaning (default: true)
   */
  enableDashCleaning?: boolean;
  /**
   * @description Enable underscore cleaning (default: true)
   */
  enableUnderscoreCleaning?: boolean;
}
