import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button, Form, Container } from 'react-bootstrap';
import { QrReader } from 'react-qr-scanner';
import 'bootstrap/dist/css/bootstrap.min.css';

const QRCodeAttendance = () => {
  const [qrData, setQrData] = useState('');
  const [scanResult, setScanResult] = useState('');
  const [showScanner, setShowScanner] = useState(false);

  const generateQRCode = (e) => {
    e.preventDefault();
    if (qrData) {
      setShowScanner(false);
    }
  };

  const handleScan = (result) => {
    if (result) {
      setScanResult(result.text);
      setShowScanner(false);
      alert(`✅ Attendance Marked: ${result.text}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
    alert('❌ Unable to Scan the QR Code!');
  };

  return (
    <Container className="mt-5 text-center">
      <h1>📌 QR Code Attendance System</h1>

      <Form onSubmit={generateQRCode} className="mt-4">
        <Form.Control
          type="text"
          placeholder="Enter Class ID or Lecture Info"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          required
        />
        <Button variant="primary" type="submit" className="mt-3">
          Generate QR Code
        </Button>
      </Form>

      {qrData && (
        <div className="mt-4">
          <QRCode value={qrData} size={200} />
        </div>
      )}

      <Button
        variant="success"
        className="mt-4"
        onClick={() => setShowScanner(!showScanner)}
      >
        {showScanner ? 'Stop Scanner' : 'Scan QR Code'}
      </Button>

      {showScanner && (
        <div className="mt-3">
          <QrReader
            delay={300}
            onScan={handleScan}
            onError={handleError}
            style={{ width: '100%' }}
          />
        </div>
      )}

      {scanResult && (
        <h4 className="mt-3">
          🎯 Scanned Result: <strong>{scanResult}</strong>
        </h4>
      )}
    </Container>
  );
};

export default QRCodeAttendance;
