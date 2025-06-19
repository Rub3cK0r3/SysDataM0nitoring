export function generateMockDevice(id = 1) {
    return {
        id,
        name: `Device-${id}`,
        status: Math.random() > 0.2 ? 'online' : 'offline',
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
    }
}
