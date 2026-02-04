function interpolate(text: string, vars?: Record<string, string>) {
    if (!vars) return text;

    return Object.entries(vars).reduce(
        (acc, [key, value]) =>
            acc.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value),
        text
    );
}

export default interpolate;