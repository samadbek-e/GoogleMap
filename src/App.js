import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAesij1ciIH5y7VU9bIMSru4qQ3wp-yIV4' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        debounced={true}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
}

export default App;
