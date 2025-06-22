import { useState, useEffect } from 'react'
import DeviceCard from '../components/DeviceCard'
import MetricsChart from '../components/MetricsChart'
import { generateMockDevice } from '../utils/generateMockData'

export default function Dashboard() {
    const [device, setDevice] = useState(generateMockDevice())

    useEffect(() => {
        const interval = setInterval(() => {
            setDevice(generateMockDevice())
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{ padding: 20 }}>
            <h1>SysDataM0nitoring Dashboard</h1>
            <DeviceCard device={device} />
            <MetricsChart data={[device.cpu, device.memory]} />
        </div>
    )
}
