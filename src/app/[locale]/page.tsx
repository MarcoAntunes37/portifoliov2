import { getDictionary } from "../i18n/dictionaries/dictionaries";
import { Locale } from "../shared/type/Types";
import App from "./app";

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {

    const locale = await params.then(res => { return res.locale });

    const i18nDictionary = await getDictionary(locale);

    return <App dict={i18nDictionary} params={{ locale: locale }} />;
}