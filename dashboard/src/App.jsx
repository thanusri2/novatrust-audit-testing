import { useState } from 'react'
import './App.css'

// Mock audit trail data — will be replaced with real contract events later
const mockEvents = [
  {
    id: 1,
    eventType: 'DID Registered',
    wallet: '0x71C7...9E3f',
    timestamp: '2026-09-14 10:23:11',
    status: 'Confirmed',
  },
  {
    id: 2,
    eventType: 'Asset Minted',
    wallet: '0x8aF2...1B4c',
    timestamp: '2026-09-14 11:05:42',
    status: 'Confirmed',
  },
  {
    id: 3,
    eventType: 'Threshold Approval Requested',
    wallet: '0x3dE9...7A21',
    timestamp: '2026-09-15 09:12:00',
    status: 'Pending',
  },
  {
    id: 4,
    eventType: 'Break Glass Triggered',
    wallet: '0x5cB1...44Fe',
    timestamp: '2026-09-15 14:47:30',
    status: 'Flagged',
  },
]

function App() {
  const [events] = useState(mockEvents)

  return (
    <div className="app">
      <header className="app-header">
        <h1>NovaTrust Audit Trail</h1>
        <p>Live view of contract events — Team CRYPTX</p>
      </header>

      <table className="audit-table">
        <thead>
          <tr>
            <th>Event Type</th>
            <th>Wallet</th>
            <th>Timestamp</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.eventType}</td>
              <td className="wallet">{event.wallet}</td>
              <td>{event.timestamp}</td>
              <td>
                <span className={`status status-${event.status.toLowerCase()}`}>
                  {event.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App