import { Pipe, PipeTransform } from "@angular/core";
import fmt from "./index";

/*
 * PrettifyPipe is an Angular pipe that formats a string using the fmt function.
 * It takes an optional fallback value that is returned if the input value is null or undefined.
 * * Usage:
 * ```html
 * {{ someString | prettify }}
 * {{ someString | prettify: 'default value' }}
 * ```
 */
@Pipe({
  name: "prettify",
  standalone: true,
})
export class PrettifyPipe implements PipeTransform {
  transform(value: string | null | undefined, fallback = ""): string {
    if (!value) return fallback;

    return fmt(value);
  }
}
