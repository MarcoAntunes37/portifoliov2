import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt_BR", "en_US"];
const defaultLocale = "en_US";

function detectLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");

  if (!header) return defaultLocale;

  if (header.toLowerCase().startsWith("pt")) {
    return "pt_BR";
  }

  return "en_US";
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ignora arquivos e assets
  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(locale =>
    pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
