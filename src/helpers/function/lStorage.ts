export const lStorage = (() => {
    // TODO Заменить везде localStorage на lStorage
    let is = true
    try {
        is = !!localStorage
    } catch (e) {
        is = false
    }

    return {
        dispatchEvent (
            key: string,
            oldValue: string,
            newValue: string
        ) {
            const event = new StorageEvent('storage', {
                bubbles: true,
                cancelable: false,
                key,
                oldValue,
                newValue
            })

            window.dispatchEvent(event)
        },

        get (key: string): string | null {
            if (!is) return null

            return localStorage.getItem(key)
        },

        set (key: string, value: any): void {
            if (!is) return
            const oldValue = this.get(key)

            const newValue = typeof value === 'string'
                ? value
                : JSON.stringify(value)

            localStorage.setItem(key, newValue)

            this.dispatchEvent(key, oldValue, newValue)
        }
    }
})()
