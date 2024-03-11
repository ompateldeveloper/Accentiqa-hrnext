export function getUrl(){
    return import.meta.env.VITE_URL || 'http://192.168.2.42:4000'
    // return 'http://localhost:4000'
}