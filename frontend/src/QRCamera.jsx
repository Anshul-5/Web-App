import { useRef, useEffect } from 'react';

export default function QRCamera() {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;
    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        // handle error
      }
    }
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="rounded shadow border w-full max-w-md aspect-video bg-black"
      />
      <p className="mt-4 text-gray-600">Point your camera at a QR code to scan.</p>
    </div>
  );
}
