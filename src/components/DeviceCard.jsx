export default function DeviceCard({ device }) {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#fafafa',
    }

    return (
        <div style={cardStyle}>
            <h2>{device.name}</h2>
            <p>Status: {device.status}</p>
            <p>CPU: {device.cpu}%</p>
            <p>Memory: {device.memory}%</p>
        </div>
    )
}