import './country.css'

const Country = (props) => {
    console.log(props)
    const {population,area,flags} = props.country;
    return (
        <div className="country">
            
            <p>name:{props.country.name.common}</p>

            <p>area:{area}</p>

            <p>population:{population}</p>

            <img src={flags.png} alt="" />
            
        </div>
    );
};

export default Country;