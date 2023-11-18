type Mods = Record<string, boolean | string>
export const classNames = (cls: string, mods: any, additional: Array<string>): string => {
    console.log('Object.entries(mods)', Object.entries(mods));

    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional,
    ].join(' ');

};
