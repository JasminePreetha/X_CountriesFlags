function CountryCard({ country }) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid green',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
        width: '200px',
        height: '200px',
      }}>
        <img src={country.flag} alt={country.name} style={{
          width: '100px',
          height: '100px',
        }} />
        <h2>{country.name}</h2>
      </div>
    );
  }
  
  export default CountryCard;