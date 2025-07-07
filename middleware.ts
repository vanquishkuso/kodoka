import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = ["/sv", "/en"].every(
    (locale) => !pathname.startsWith(`${locale}/`) && pathname !== locale
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

function getLocale(request: NextRequest): string {
  // Check if user has a preferred locale in cookie
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && ["sv", "en"].includes(cookieLocale)) {
    return cookieLocale;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Check for Swedish first (since it's the primary language)
    if (acceptLanguage.includes("sv")) return "sv";
    if (acceptLanguage.includes("en")) return "en";
  }

  // Default to Swedish
  return "sv";
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|admin|favicon.ico|.*\\..*).*)",
  ],
};
