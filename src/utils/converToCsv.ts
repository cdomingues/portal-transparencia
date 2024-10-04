export default function convertToCsv(data: object[], separator: string = ';'): string {
    if (!data || data.length === 0) {
        throw new Error("Os dados fornecidos estão vazios ou indefinidos.");
    }

    const headers = Object.keys(data[0] || {}).join(separator);
    const rows = data.map(row => 
        Object.values(row || {}).join(separator)
    );

    return [headers, ...rows].join('\n');
}