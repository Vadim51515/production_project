// declaration.d.ts
declare module '*.scss';
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg' {
    import type React from 'react'
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}
