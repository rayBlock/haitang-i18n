import { z } from 'zod';

// Define supported locales
//  'es', 'de', 'it'
// const SupportedLocale = z.enum(['en', 'fr',]);
// type SupportedLocale = z.infer<typeof SupportedLocale>;

// export function validLocale (locale: string):SupportedLocale { 
//        return SupportedLocale.safeParse(locale).success ? locale as SupportedLocale : "en"

// }

// Type for the text content
// type TextContent = {
//   [key in SupportedLocale]: {
//     header1: string;
//     // Add other fields as needed
//   };
// };

// Usage
// const locale = getValidatedLocale(Astro.url);
// console.log(locale, "locale");

// const text = await getEntry("pages", "test");
// console.log(text, "text");

// Ensure text.data conforms to TextContent type
// const textData = text.data as TextContent;

// // Use type assertion to access the property safely
// const h1 = textData[locale]?.header1 ?? textData[getFallbackLocale(locale)].header1;

// console.log(h1, "h1");