import styled from "styled-components";
import { Scanner, useDevices } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

export default function QRScan() {
    const devices = useDevices();
    const [selectedDevice, setSelectedDevice] = useState(null);
    console.log(devices);

    return (
        <div>
            <select onChange={(e) => setSelectedDevice(e.target.value)}>
                <option value="">Select a camera</option>
                {devices.map((device) => (
                    <option key={device.deviceId} value={device.deviceId}>
                        {device.label || `Camera ${device.deviceId}`}
                    </option>
                ))}
            </select>

            { selectedDevice && <Scanner
                onScan={(result) => console.log(result)}
                constraints={{
                    deviceId: selectedDevice,
                }}
            /> }
        </div>
    );
};
